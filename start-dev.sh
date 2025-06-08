#!/bin/bash

# Start the backend server
cd backend
PORT=3001 npm run dev &

# Start the frontend server
cd ../frontend
PORT=3000 npm start &

# Wait for both processes
wait 