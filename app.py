import streamlit as st
import joblib
from supabase import create_client

# Supabase connection
supabase = create_client(
    st.secrets["SUPABASE_URL"],
    st.secrets["SUPABASE_KEY"]
)

# Load ML model
model = joblib.load("sentiment_model.pkl")
vectorizer = joblib.load("tfidf_vectorizer.pkl")

st.set_page_config(page_title="AI Sentiment Analyzer")

st.title("AI Sentiment Analyzer")

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

    if st.button("Analyze Sentiment"):
        if not review.strip():
            st.warning("Please enter a review.")
        else:
            input_vector = vectorizer.transform([review])

            prediction = model.predict(input_vector)[0]

            probabilities = model.predict_proba(input_vector)[0]
            confidence = max(probabilities) * 100

            st.subheader("Result")
            st.write(f"**Sentiment:** {prediction.upper()}")
            st.write(f"**Confidence:** {confidence:.2f}%")