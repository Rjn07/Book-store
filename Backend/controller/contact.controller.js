// controllers/contactController.js
import Contact from '../models/contact.model.js';

const createContact = async (req, res) => {
  
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Message received successfully', contact });
  } catch (error) {
    res.status(400).json({ message: 'Failed to send message', error });
  }
};

export { createContact };






// Certainly! To set up a backend for handling contact form submissions with separate models, you'll need to follow these steps:

//1 Create a Contact Model
// 2Set Up a Contact Controller
// 3Configure Routes
// 4Initialize the Express App