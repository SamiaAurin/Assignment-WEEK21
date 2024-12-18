## Ostad-মডিউল ২১ এর অ্যাসাইনমেন্ট

In this assignment, you have to create a user data registration project using express.js (only backend)

# Table of Contents

## 1. Project Overview

## 2. Installation Prerequisites
- Node.js
- MongoDB Atlas and MongoDB Compass
- Postman (for API testing)

## 3. Getting Started
- Clone the Repository
- Install Dependencies
- Set Up Environment Variables

## 4. Project Structure
- Overview of File Structure

## 5. API Endpoints
- User Registration API
- User Login API**
- User Authentication by JWT Token and Cookie
- Single User Profile Read API
- All Users Profile Read API
- Single User Profile Update API
- Delete Single User API

## 6. Running the Project
- Run the Server Locally
- Testing with Postman
    - Importing the Postman Collection

## 7. Environment Variables
- Explanation of Required Environment Variables

## 8. Error Handling and Responses
- Format of API Responses
- Common Errors and Solutions

## 9. Conclusion

---

# Project Overview
This project is a simple User Registration API using Express.js and MongoDB. It provides the following endpoints to manage user registration, authentication, profile updates, and deletion using JWT tokens for authentication and cookies for session management.

## Installation Prerequisites
- **Node.js**: Install Node.js from [here](https://nodejs.org/).
- **MongoDB Atlas and MongoDB Compass**: Create a MongoDB Atlas account and cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). Download MongoDB Compass, the official GUI for MongoDB, from [here](https://www.mongodb.com/products/compass). 
- **Postman**: You can use Postman to test the APIs locally. Download Postman from [here](https://www.postman.com/downloads/).

## Getting Started

### Clone the Repository:
```bash
git clone https://github.com/SamiaAurin/Assignment-WEEK21.git
cd Assignment-WEEK21
```
### Install Dependencies:
Run the following command to install the required dependencies:
```bash
npm install
```
### Set Up Environment Variables:
Create a `.env` file in the root directory of the project with the following variables: `.env` file is already given and the should look like this:

```bash
MONGO_URI=mongodb+srv://samia:12345@assisgnmentw21.ahgde.mongodb.net/
JWT_SECRET=your_jwt_secret
```
If you face any problem you can check the `npm` commands in `commands.txt` file for installing dependencies.

## Project Structure

The Project structure should look like this:

```bash
Assignment-WEEK21/
        ├── .env                   # Environment variables file
        ├── server.js              # Main entry point for the app
        ├── config/                
        │   └── db.js              # MongoDB connection setup
        ├── models/
        │   └── User.js            # Mongoose User schema
        ├── routes/
        │   └── userRoutes.js      # API routes for user registration and login
        ├── controllers/
        │   └── userController.js  # Handlers for each API endpoint
        ├── middleware/
        │   └── authMiddleware.js  # Middleware to verify JWT token
        ├── package.json           # Project metadata and dependencies
        ├── package-lock.json      # Dependency lock file
        └── .gitignore             # Git ignore file (e.g., node_modules/)
```

## API Endpoints

### User Registration API: `POST /api/users/register`
- **Description**: Allows new users to register with the following required fields:
  - `firstName`: User's first name
  - `lastName`: User's last name
  - `NIDNumber`: User's National ID Number
  - `phoneNumber`: User's phone number
  - `password`: User's password
  - `bloodGroup`: User's blood group

### User Login API: `POST /api/users/login`
- **Description**: Allows users to log in with their `phoneNumber` and `password`. Returns a JWT token stored in a cookie.

### User Authentication by JWT Token and Cookies & Single User Profile Read API: `GET /api/users/profile`
- **Description**: Verifies if the JWT token is valid and retrieves the user profile and allows users to view their profile.

### All Users Profile Read API: `GET /api/users`
- **Description**: Retrieves profiles of all users in the database.

### Single User Profile Update API: `PUT /api/users/:id`
- **Description**: Allows users to update their profile by passing the user `ID` and updated data in the request body.

### Delete Single User API: `DELETE /api/users/:id`
- **Description**: Allows users to delete their profile by passing the user `ID` in the request URL.


## Running the Project

### Start the Server Locally:
Run the following command to start the server:

```bash
npm run dev
```
### Testing with Postman:
You can download `Ostad_Assignment_W21-User Registration API.pdf` file for visual representation.

#### Importing the Postman Collection
To test the APIs with Postman, you can use the predefined Postman collection file `Ostad-Assignment-W21.postman_collection`. Follow the steps below to import the collection and make API requests:

**Step 1: Download the Postman Collection File**
Ensure that you have the `Ostad-Assignment-W21.postman_collection` file available on your local machine. This file contains all the predefined requests for testing the API endpoints.

**Step 2: Open Postman**
If you don’t have Postman installed, you can download and install it from the official Postman website.

**Step 3: Import the Collection**
1. Open Postman and go to the File menu.
2. Click on Import to open the import dialog.
3. In the dialog, click on the Choose Files button.
4. Locate and select the Ostad-Assignment-W21.postman_collection file you downloaded.
5. Click Open to import the collection into Postman.

**Step 4: View the Collection**
After importing, the Ostad-Assignment-W21 collection will appear in the Collections tab in Postman. You can expand the collection to view the individual API requests.

**Step 5: Send Requests**
Select the desired API request (e.g., User Registration, User Login, etc.) from the collection.
Modify any required parameters, such as firstName, lastName, phoneNumber, and password for registration or login, as needed.
- Click on the Send button to make the API request.
- Review the API responses in the Postman interface.

1. **User Registration**:
   - Send a `POST` request to `http://localhost:5000/api/users/register` with the required fields (`firstName`, `lastName`, `NIDNumber`, `phoneNumber`, `password`, `bloodGroup`). Check `commands.txt` to see how to do it.

2. **User Login**:
   - Send a `POST` request to `http://localhost:5000/api/users/login` with `phoneNumber` and `password`.
   - Upon successful login, the server will return a JWT token, which will be stored in the `Set-Cookie` header.

3. **User Profile**:
   - Send a `GET` request to `http://localhost:5000/api/users/profile` (ensure that you are logged in).
   - In Postman, select the `"Authorization"` tab, choose `"Bearer Token"`, and provide the JWT token stored in the cookie (received from the login API) to access your profile data.
   
4. **Update Profile**:
   - Send a `PUT` request to `http://localhost:5000/api/users/:id` with updated user data.

5. **Delete User**:
   - Send a `DELETE` request to `http://localhost:5000/api/users/:id`.


## Environment Variables

Here’s a description of the environment variables required for the project:

- **MONGO_URI**: The connection string to your MongoDB instance (either MongoDB Atlas or local MongoDB).
- **JWT_SECRET**: A secret key used to sign the JWT tokens.

### Example `.env` file:

```plaintext
MONGO_URI=mongodb://localhost:27017/your_db_name
JWT_SECRET=your_secret_key_here
```

## Error Handling and Responses
The API responses will be in the following format:

### Format of API Responses:
```bash
{
  "message": "Success or error message"
}
```
### Common Errors:
- 400 Bad Request: Invalid request data or credentials.
- 401 Unauthorized: Missing or invalid JWT token.
- 404 Not Found: Endpoint or user not found.
- 500 Internal Server Error: Server issues or unexpected errors.

## 9. Conclusion

This project provides a simple yet powerful backend for user registration, authentication, and profile management using Express.js, MongoDB, and JWT authentication. It demonstrates best practices for handling user data, implementing secure authentication, and building a scalable API.

### How to Contribute
We welcome contributions to improve this project. To contribute:
1. Fork the repository.
2. Create a new branch for your changes.
3. Make your modifications or additions.
4. Test your changes thoroughly.
5. Submit a pull request with a detailed explanation of the changes you made.

Please ensure that your code adheres to the existing coding standards and passes all tests before submitting a pull request.


