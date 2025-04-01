
# import numpy as np
# from flask import Flask, request, render_template,jsonify
# import pickle
# import json

# app = Flask(__name__)
# model = pickle.load(open('model.pkl', 'rb'))

# # Load crop details from JSON
# with open('crop_info.json', 'r', encoding='utf-8') as file:
#     crop_data = json.load(file)

# @app.route('/')
# def home():
#     return render_template('index.html')

# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         if not model:
#             return jsonify({"error": "Model not loaded. Check 'model.pkl' file."}), 500

#         # Get input values from the form
#         # form_values = list(request.form.values())[:-1]  # Exclude last non-numeric value
#         form_values = list(request.form.values())  # Exclude last non-numeric value
#         int_features = [float(x) for x in form_values]
#         final_features = np.array([int_features])  # Format input for model

#         # Make Prediction
#         prediction = model.predict(final_features)
#         crop_name = prediction[0]  # Predicted crop name

#         # Get user-selected language (default: English)
#         language = request.form.get('language', 'english')

#         # Fetch Crop Details
#         crop_info = crop_data.get('crops', {}).get(crop_name, {})

#         if not crop_info:
#             return render_template('results.html', 
#                                    prediction_text=crop_name,
#                                    crop_details={"error": "No details available for this crop."},
#                                    selected_language=language)

#         # Render results page
#         return render_template('results.html', 
#                                prediction_text=crop_name,
#                                crop_details=crop_info,
#                                selected_language=language)
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(debug=True)
import numpy as np
from flask import Flask, request, render_template, jsonify
import pickle
import json

app = Flask(__name__)
model = None
model = pickle.load(open('model1.pkl', 'rb'))

# Load crop details from JSON
jsonpath="crop_data.json"
# jsonpath="crop_info.json"
with open(jsonpath, 'r', encoding='utf-8') as file:
    crop_data = json.load(file)

# Main Routes
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/resources')
def resources():
    return render_template('resources.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

# Prediction Routes
@app.route('/predict')
def predict_page():
    # return render_template('index.html')
    return render_template('predict.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        if not model:
            return jsonify({"error": "Model not loaded. Check 'model.pkl' file."}), 500

        # Get input values from the form
        int_features = [
            float(request.form['nitrogen']),
            float(request.form['phosphorus']),
            float(request.form['potassium']),
            float(request.form['temperature']),
            float(request.form['humidity']),
            float(request.form['ph']),
            float(request.form['rainfall']),
            float(request.form['water_level'])
        ]
        
        final_features = np.array([int_features])  # Format input for model

        # Make Prediction
        prediction = model.predict(final_features)
        crop_name = prediction[0]  # Predicted crop name

        # Fetch Crop Details
        crop_info = crop_data.get('crops', {}).get(crop_name, {})

        if not crop_info:
            return render_template('results.html', 
                                prediction_text=crop_name,
                                crop_details={"error": "No details available for this crop."})

        # Render results page
        return render_template('results.html', 
                            prediction_text=crop_name,
                            crop_details=crop_info)
    
    except Exception as e:
        app.logger.error(f"Error during prediction: {str(e)}")
        return render_template('error.html', error_message=str(e))

# API Endpoint (optional)
@app.route('/api/predict', methods=['POST'])
def api_predict():
    try:
        data = request.get_json()
        
        if not model:
            return jsonify({"error": "Model not loaded"}), 500

        # Validate input data
        required_fields = ['nitrogen', 'phosphorus', 'potassium', 'temperature', 
                          'humidity', 'ph', 'rainfall', 'water_level']
        
        if not all(field in data for field in required_fields):
            return jsonify({"error": "Missing required fields"}), 400

        # Prepare features for prediction
        features = np.array([
            float(data['nitrogen']),
            float(data['phosphorus']),
            float(data['potassium']),
            float(data['temperature']),
            float(data['humidity']),
            float(data['ph']),
            float(data['rainfall']),
            float(data['water_level'])
        ]).reshape(1, -1)

        # Make prediction
        prediction = model.predict(features)
        crop_name = prediction[0]

        # Get crop details
        crop_info = crop_data.get('crops', {}).get(crop_name, {})

        return jsonify({
            "crop": crop_name,
            "details": crop_info
        })

    except Exception as e:
        print(f"Error during API prediction: {str(e)}")
        return jsonify({"error": str(e)}), 500

# Error Handlers
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    print(e)
    return render_template('500.html'), 500

if __name__ == "__main__":
    # app.run(debug=True)
    app.run()
