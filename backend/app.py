from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

# MongoDB connection
client = MongoClient(os.getenv('MONGODB_URI', 'mongodb://localhost:27017/'))
db = client[os.getenv('DATABASE_NAME', 'microfinance_db')]

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'message': 'API is running'}), 200

@app.route('/api/services', methods=['GET'])
def get_services():
    services = [
        {
            'id': 1,
            'title': 'Personal Loans',
            'description': 'Quick and easy personal loans with flexible repayment options',
            'icon': '💰'
        },
        {
            'id': 2,
            'title': 'Business Loans',
            'description': 'Grow your business with our tailored business financing solutions',
            'icon': '🏢'
        },
        {
            'id': 3,
            'title': 'Savings Account',
            'description': 'Secure savings accounts with competitive interest rates',
            'icon': '🏦'
        },
        {
            'id': 4,
            'title': 'Mobile Banking',
            'description': 'Access your account anytime, anywhere with our mobile app',
            'icon': '📱'
        }
    ]
    return jsonify(services), 200

@app.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.get_json()
    
    contact_data = {
        'name': data.get('name'),
        'email': data.get('email'),
        'phone': data.get('phone'),
        'message': data.get('message')
    }
    
    db.contacts.insert_one(contact_data)
    
    return jsonify({'message': 'Contact form submitted successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True, port=int(os.getenv('PORT', 5000)))
