import streamlit as st
import joblib

model = joblib.load("sentiment_model.pkl")
vectorizer = joblib.load("tfidf_vectorizer.pkl")

st.set_page_config(page_title="AI Sentiment Analyzer")

st.title("AI Sentiment Analyzer")
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