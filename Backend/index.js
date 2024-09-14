import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoute from './routes/book.router.js';
import contactRoutes from './routes/contact.router.js';
import userRoute from './routes/user.routes.js'
import cors from 'cors';

 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI || 'your_default_mongodb_uri';

app.use(cors());

// Middleware to handle JSON payloads
app.use(express.json());

// Async function to handle MongoDB connection
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection FAILED", error);
    process.exit(1);  // Exit the process with failure
  }
};

// Connect to MongoDB
connectDB();

// Routing
app.use('/book', bookRoute);
app.use('/', contactRoutes);
app.use('/user', userRoute);
// Start the Express server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
