import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

def load_data():
    # Dummy function to simulate loading data
    # Replace this with actual data fetching logic
    data = {
        'amount': [50, 100, 150, 200, 250],
        'category': [0, 1, 1, 0, 1] # Categorical values mapped to integers
    }
    return pd.DataFrame(data)

def getInsights():
    df = load_data()
    X = df[['category']]
    y = df['amount']
    
    model = LinearRegression()
    model.fit(X, y)

    # Perform prediction (dummy prediction for now)
    predicted_spending = model.predict(np.array([[1]])) # Predicting for category '1'
    return {
        'predictedSpending': predicted_spending[0]
    }