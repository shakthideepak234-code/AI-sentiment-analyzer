import gradio as gr
import joblib

# Load the trained model and TF-IDF vectorizer
model = joblib.load("sentiment_model.pkl")
vectorizer = joblib.load("tfidf_vectorizer.pkl")


def analyze_sentiment(review):
    # Check for empty input
    if not review.strip():
        return "Please enter a review.", "0%"

    # Convert review into TF-IDF features
    input_vector = vectorizer.transform([review])

    # Predict sentiment
    prediction = model.predict(input_vector)[0]

    # Get confidence
    probabilities = model.predict_proba(input_vector)[0]
    confidence = max(probabilities) * 100

    return prediction.upper(), f"{confidence:.2f}%"


# Create Gradio interface
app = gr.Interface(
    fn=analyze_sentiment,

    inputs=gr.Textbox(
        label="📝 Enter Your Review",
        placeholder="Example: I really love this product!",
        lines=4
    ),

    outputs=[
        gr.Textbox(label="🎯 Sentiment"),
        gr.Textbox(label="📊 Confidence")
    ],

    title="🤖 AI Sentiment Analyzer",
    description="Enter a review and the AI will predict whether it is positive or negative.",

    examples=[
        ["I absolutely love this product!"],
        ["This product is terrible."],
        ["The quality is amazing."],
        ["Worst purchase ever."]
    ]
)

app.launch()  