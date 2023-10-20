# Backend User Management Service

This backend service provides endpoints to manage users. You can run this service either locally using Node.js and npm or using Docker.

## Prerequisites

1. [Node.js](https://nodejs.org/) (if running locally)
2. [npm](https://www.npmjs.com/) (if running locally)
3. [Docker](https://www.docker.com/) (if running in a container)

## Running Locally

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Start the Server**:
   ```bash
   npm start
   ```

The server will start on port 3000. You can access it at `http://localhost:3000`.

## Running with Docker

1. **Build the Docker Image**:

   ```bash
   docker build -t backend-user-service .
   ```

2. **Run the Container**:
   ```bash
   docker run -p 3000:3000 backend-user-service
   ```

The server will start on port 3000. You can access it at `http://localhost:3000`.

## API Endpoints

- **GET `/users`**: Fetches all users.
- **POST `/users`**: Creates a new user.
