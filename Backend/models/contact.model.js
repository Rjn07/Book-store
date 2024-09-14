// models/contact.js
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
