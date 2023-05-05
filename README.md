# **ChatPDF**

ChatPDF is a web application that allows users to upload a PDF file as a dataset to OpenAI. Users can then chat with the AI model and receive answers based on the contents of the uploaded PDF file. The application is designed for researchers, students, professionals, and anyone looking for an AI assistant that can understand and answer questions based on a specific PDF document.

## **Features**

- User Authentication (register, login, and password reset)
- PDF Upload (max file size 25MB)
- PDF Processing (text extraction and preprocessing)
- AI Model Training (with OpenAI)
- Chat Interface (user-friendly chat with the AI model)
- User Feedback on AI model's responses

## **Tech Stack**

- Frontend: React, NextJS, TypeScript, Tailwinds, Material-UI, react-icons
- Backend: Node.js with Express
- APIs and Integrations: OpenAI API, Firebase (storage and database)
- Database: Firebase Firestore
- Package Manager: Yarn
- IDE: Visual Studio Code

## **Getting Started**

These instructions will help you set up the project on your local machine for development and testing purposes.

### **Prerequisites**

- **[Node.js](https://nodejs.org/en/download/)** (v14.x or higher)
- **[Yarn](https://yarnpkg.com/getting-started/install)** package manager
- **[Firebase](https://firebase.google.com/)** account (for storage and database)
- **[OpenAI API](https://beta.openai.com/signup/)** key (for AI model training)

### **Installation**

1. Clone the repository
    
    ```
    git clone https://github.com/yourusername/ChatPDF.git
    ```
    
2. Change the current directory to the project folder
    
    ```
    cd ChatPDF
    ```
    
3. Install the required dependencies using Yarn
    
    ```
    yarn install
    ```
    
4. Create a **`.env.local`** file in the root of the project and add your Firebase and OpenAI API keys:
    
    ```
    FIREBASE_API_KEY=your_firebase_api_key
    FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    FIREBASE_PROJECT_ID=your_firebase_project_id
    FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    FIREBASE_APP_ID=your_firebase_app_id
    OPENAI_API_KEY=your_openai_api_key
    ```
    
5. Start the development server
    
    ```
    yarn dev
    ```
    

Now, open your browser and navigate to **`http://localhost:3000/`** to access the ChatPDF application.

## **Contributing**

Any contributions are welcome! Please feel free to submit a pull request or open an issue to report bugs, request features, or share your ideas.

## **License**

This project is licensed under the MIT License. See the **[LICENSE](https://chat.openai.com/c/LICENSE)** file for details.