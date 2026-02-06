Step 1: Start the Frontend
    cd frontend
    npm install
    npm run dev

Step 2: Configure Backend Environment
    edit .env file inside the backend folder :-

    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/food-del
    STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxx
    JWT_SECRET=your_jwt_secret_key
  
Step 3: Start the Backend
    cd backend
    npm install
    npm start
