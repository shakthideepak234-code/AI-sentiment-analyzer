AI Sentiment Analyzer

A machine learning project that analyzes text reviews and predicts whether the sentiment is Positive or Negative.

 Features

* Text sentiment classification
* TF-IDF text vectorization
* Logistic Regression machine learning model
* Confidence score for predictions
* Interactive Gradio web interface
* Runs locally in a web browser

 Technologies Used

* Python
* Pandas
* Scikit-learn
* TF-IDF
* Logistic Regression
* Joblib
* Gradio

 Model Performance

Test Accuracy: 83.09%

The model was trained and evaluated using a labeled sentiment dataset.

 How It Works

User Review
     ↓
TF-IDF Vectorization
     ↓
Logistic Regression
     ↓
Sentiment Prediction
     ↓
Positive / Negative + Confidence

 How to Run

1. Install the required packages

python -m pip install -r requirements.txt

2. Run the application

python app.py

3. Open the local URL

After running the application, open the URL shown in the terminal, for example:

http://127.0.0.1:7860

 Project Structure

AI Sentimental Analysis/
│
├── app.py
├── sentiment_model.pkl
├── tfidf_vectorizer.pkl
├── requirements.txt
└── README.md

Example

Input:

I absolutely love this product!

Output:

Sentiment: POSITIVE
Confidence: 79.98%

Project

AI Sentiment Analyzer — Machine Learning Project