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

# Initialize branch data
def initialize_branches():
    if db.branches.count_documents({}) == 0:
        branches = [
            # Addis Ababa
            {'region': 'Addis Ababa', 'branchName': 'Mekenisa', 'zone': 'Nifas Silk Lafto', 'city': 'Addis Ababa', 'location': 'Around German Square', 'tel': '011-3854-391'},
            {'region': 'Addis Ababa', 'branchName': 'Asco', 'zone': 'Addis ketama', 'city': 'Addis Ababa', 'location': 'Asco Around Addis Sefar', 'tel': '011-2707-302'},
            
            # West Shewa
            {'region': 'West Shewa', 'branchName': 'Ambo', 'zone': 'West Shewa', 'city': 'Ambo', 'location': 'Ambo 03', 'tel': '011-2363-108'},
            {'region': 'West Shewa', 'branchName': 'Guder', 'zone': 'West Shewa', 'city': 'Guder', 'location': 'Guder 01', 'tel': '011-2820-313'},
            {'region': 'West Shewa', 'branchName': 'Ejaji', 'zone': 'West Shewa', 'city': 'Ejaji', 'location': 'Ilu Gelana', 'tel': '057-5500-278'},
            {'region': 'West Shewa', 'branchName': 'Gedo', 'zone': 'West Shewa', 'city': 'Gedo', 'location': 'Chaliya', 'tel': '057-2270-012'},
            {'region': 'West Shewa', 'branchName': 'Dano', 'zone': 'West Shewa', 'city': 'Dano', 'location': 'Seyo', 'tel': '057-1140-005'},
            {'region': 'West Shewa', 'branchName': 'Jibat', 'zone': 'West Shewa', 'city': 'Jibat', 'location': 'Shenan', 'tel': '011-2390-354'},
            {'region': 'West Shewa', 'branchName': 'Elfeta', 'zone': 'West Shewa', 'city': 'Bake', 'location': 'Elfeta', 'tel': '011-2620-254'},
            {'region': 'West Shewa', 'branchName': 'Ejersa Lafo', 'zone': 'West Shewa', 'city': 'Olonkomi', 'location': 'Ejersa Lafo', 'tel': '011-2850-639'},
            
            # South West Shewa
            {'region': 'South West Shewa', 'branchName': 'Woliso', 'zone': 'South West Shewa', 'city': 'Woliso', 'location': 'behind Ethio-telecom', 'tel': '011-3411-056'},
            {'region': 'South West Shewa', 'branchName': 'Sebeta', 'zone': 'Shegar', 'city': 'Sebeta', 'location': 'Sebeta 01', 'tel': '011-3380-658'},
            {'region': 'South West Shewa', 'branchName': 'Dilala', 'zone': 'South West Shewa', 'city': 'Dilala', 'location': 'Dilala', 'tel': '011-3530-092'},
            {'region': 'South West Shewa', 'branchName': 'Dawo', 'zone': 'South West Shewa', 'city': 'Busa', 'location': 'Dawo', 'tel': '011-3120-640'},
            {'region': 'South West Shewa', 'branchName': 'Wonch', 'zone': 'South West Shewa', 'city': 'Chitu', 'location': 'Wonch', 'tel': '011-3160-424'},
            {'region': 'South West Shewa', 'branchName': 'Ameya', 'zone': 'South West Shewa', 'city': 'Gindo', 'location': 'Ameya', 'tel': '011-3150-761'},
            {'region': 'South West Shewa', 'branchName': 'Haro Wonch', 'zone': 'South West Shewa', 'city': 'Haro', 'location': 'Haro Wonch', 'tel': '011-3560-420'},
            
            # Jimma
            {'region': 'Jimma', 'branchName': 'Jima', 'zone': 'Jima', 'city': 'Jima', 'location': 'Jima 01', 'tel': '047-1114-443'}
        ]
        db.branches.insert_many(branches)
        print("Branches initialized successfully")

initialize_branches()

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

@app.route('/api/branches', methods=['GET'])
def get_branches():
    branches = list(db.branches.find({}, {'_id': 0}))
    return jsonify(branches), 200

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
