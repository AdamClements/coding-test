# Use an official Node.js runtime as the parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the app dependencies inside the container
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Make port 3000 available to the world outside the container
EXPOSE 3000

# Define the command to run the app using CMD
CMD ["node", "index.js"]
