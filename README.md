# HumanChain AI Safety - Incident Log API

## Project Overview

This project is an **Incident Log API** created to log and manage hypothetical AI safety incidents. It is a part of an internship assignment with **HumanChain**, a deep-tech software AI startup focused on AI safety. The API enables the creation, retrieval, and deletion of AI safety incident logs in a MongoDB database. 


---

## Technology Stack

- **Language**: TypeScript
- **Framework**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **Libraries**: 
  - `morgan` for request logging
  - `joi` for request validation
  - `dotenv` for environment variable management
  - `mongoose` for MongoDB integration

---

## Installation and Setup

Follow these steps to run the project locally.

### Prerequisites

- **Node.js**: Ensure you have **Node.js 14.x** or later installed. You can check your Node.js version by running:
  ```bash
  node -v
  ```

- **npm** (Node Package Manager) or **yarn** for managing dependencies.

### Steps to Install and Run the Project Locally

1. **Clone the Repository**

   Clone the project repository to your local machine using Git:
   ```bash
   git clone https://github.com/prabir227/ai_safety_api.git
   cd ai_safety_api
   ```

2. **Install Dependencies**

   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

   Alternatively, if you're using yarn:
   ```bash
   yarn install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory of the project with the following content:
   ```env
   MONGODB_URI=mongodb+srv://prabirghosh:227Prabir@cluster0.e8hzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   PORT=5000
   ```


4. **Run the Application**

   To start the application locally, use the following command:
   ```bash
   npm run dev
   ```

   This will run the project in development mode with `ts-node`. The application will be available at `http://localhost:5000`.

---

## API Endpoints

The API includes the following routes for managing incidents:

### 1. **Create an Incident** - `POST /api/incidents/`

   Create a new incident log.

   **Request Body** (JSON):
   ```json
   {
     "title": "Incident Title",
     "description": "Incident Description",
     "severity": "High"
   }
   ```

   **Response**:
   - **201 Created** on success
   - **400 Bad Request** if validation fails

### 2. **Get All Incidents** - `GET /api/incidents/`

   Retrieve a list of all incidents.

   **Response**:
   - **200 OK** on success
   - **404 Not Found** if no incidents are found

### 3. **Get Incident by ID** - `GET /api/incidents/:id`

   Retrieve an incident by its unique ID.

   **Response**:
   - **200 OK** with incident data on success
   - **404 Not Found** if the incident does not exist

### 4. **Delete Incident by ID** - `DELETE /api/incidents/:id`

   Delete an incident by its unique ID.

   **Response**:
   - **200 OK** on success
   - **404 Not Found** if the incident does not exist

---

## Database Setup

This project uses **MongoDB Atlas** for data storage. You don’t need to set up a local MongoDB instance, as the database is hosted remotely on MongoDB Atlas.

### Required Environment Variables

- **MONGODB_URI**: Your MongoDB Atlas connection string (including credentials).
- **PORT**: The port on which the server should run (default is `5000`).

---

## Design Decisions

1. **MongoDB for Persistence**: MongoDB was chosen as the database for this project because it provides flexible schema management, which is ideal for handling incident logs that might evolve over time. MongoDB's document-oriented structure makes it easy to store incident data.

2. **Express.js for API Routing**: Express.js was used as the web framework because of its simplicity and wide adoption for building RESTful APIs.

3. **Joi for Validation**: Joi was chosen for request validation because it provides a simple and expressive API for ensuring that incoming requests have the required structure and data types.

4. **Environment Variables**: Environment variables are used for sensitive data such as the MongoDB URI. This ensures that such information isn't hard-coded into the application, making it more secure and easier to manage across environments (e.g., local development, production).

---

## Running Tests

This project does not currently include automated tests, but you can use tools like **Postman** or **curl** to test the API endpoints manually.

---

## Conclusion

This project is a basic API service to manage AI safety incidents. It follows common backend development practices, such as using **Express.js** for handling HTTP requests and **MongoDB Atlas** for data persistence. The goal is to provide a simple, scalable API for managing AI safety incidents and to serve as a foundational part of **HumanChain's** AI safety efforts.

---
