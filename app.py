import streamlit as st
import joblib
import pandas as pd
from supabase import create_client

# Supabase connection
supabase = create_client(
    st.secrets["SUPABASE_URL"],
    st.secrets["SUPABASE_KEY"]
)
# Restore Supabase session after Streamlit rerun
if "access_token" in st.session_state and "refresh_token" in st.session_state:
    try:
        supabase.auth.set_session(
            st.session_state.access_token,
            st.session_state.refresh_token
        )
    except Exception:
        pass

# Load ML model
model = joblib.load("sentiment_model.pkl")
vectorizer = joblib.load("tfidf_vectorizer.pkl")

st.set_page_config(
    page_title="AI Sentiment Analyzer",
    layout="wide"
)

st.title("AI Sentiment Analyzer")
st.caption("Analye customer reviews and track sentiment insights with machin learning.")

# Login / Signup
if "user" not in st.session_state:
    st.session_state.user = None

if st.session_state.user is None:

    tab1, tab2 = st.tabs(["Login", "Sign Up"])

    with tab1:
        st.subheader("Login")

        email = st.text_input("Email", key="login_email")
        password = st.text_input(
            "Password",
            type="password",
            key="login_password"
        )

        if st.button("Login"):
            try:
                response = supabase.auth.sign_in_with_password({
                    "email": email,
                    "password": password
                })

                st.session_state.user = response.user
                st.session_state.access_token = response.session.access_token
                st.session_state.refresh_token = response.session.refresh_token

                supabase.auth.set_session(
                response.session.access_token,
                response.session.refresh_token
)

                st.success("Login successful!")
                st.rerun()

            except Exception:
                st.error("Invalid email or password.")

    with tab2:
        st.subheader("Create Account")

        email = st.text_input("Email", key="signup_email")
        password = st.text_input(
            "Password",
            type="password",
            key="signup_password"
        )

        if st.button("Sign Up"):
            try:
                supabase.auth.sign_up({
                    "email": email,
                    "password": password
                })

                st.success(
                    "Account created. Check your email to verify your account."
                )

            except Exception as e:
                st.error(str(e))

else:

    st.write(f"Logged in as: {st.session_state.user.email}")

    if st.button("Logout"):
        supabase.auth.sign_out()
        st.session_state.user = None
        st.rerun()

    st.divider()

    st.write(
        "Enter a review and the AI will predict whether it is positive or negative."
    )

    review = st.text_area(
        "Enter Your Review",
        placeholder="Example: I really love this product!",
        height=120
    )

if st.button("Analyze Sentiment", width="stretch"):
        if not review.strip():
            st.warning("Please enter a review.")
        else:
            input_vector = vectorizer.transform([review])

            prediction = model.predict(input_vector)[0]

            probabilities = model.predict_proba(input_vector)[0]
            confidence = max(probabilities) * 100

            st.subheader("Prediction Result")
            if prediction == "positive":
                st.success(f"Positive Sentiment -{confidence:.2f}% confidence")
            else:
                st.error(f"Negative Sentiment - {confidence:.2f}% confidence")
           

            supabase.table("sentiment_history").insert({
                "user_id": st.session_state.user.id,
                "review": review,
                "sentiment": prediction,
                "confidence": confidence
            }).execute()

            st.success("Prediction saved to your history!")

            st.divider()

            st.subheader("Dashboard")
            st.caption("Overview of your sentiment analysis activity.")


        history = supabase.table("sentiment_history") \
        .select("review, sentiment, confidence, created_at") \
        .eq("user_id", st.session_state.user.id) \
        .order("created_at", desc=True) \
        .execute()

        if history.data:

           history_df = pd.DataFrame(history.data)

        col1, col2, col3, col4 = st.columns(4)

        col1.metric("Total Predictions", len(history_df))
        col2.metric("Positive", (history_df["sentiment"] == "positive").sum())
        col3.metric("Negative", (history_df["sentiment"] == "negative").sum())
        col4.metric("Avg Confidence", f"{history_df['confidence'].mean():.2f}%")

        st.subheader("Sentiment Distribution")

        chart_data = pd.DataFrame({
            "Sentiment": ["Positive", "Negative"],
            "Count": [
                (history_df["sentiment"] == "positive").sum(),
                (history_df["sentiment"] == "negative").sum()
            ]
        })

        st.bar_chart(chart_data.set_index("Sentiment"))

        history_df["created_at"] = pd.to_datetime(history_df["created_at"])
        history_df["created_at"] = history_df["created_at"].dt.strftime("%d-%m-%Y %H:%M")

       

        st.dataframe(
            history_df.rename(columns={
                "review": "Review",
                "sentiment": "Sentiment",
                "confidence": "Confidence",
                "created_at": "Date"
            }),
            width="stretch"
        )

else:
        st.info("No prediction history yet.")