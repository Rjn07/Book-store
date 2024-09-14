
import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});
const User = mongoose.model('User', userSchema);

export default User;
// // Hash the password before saving
// userSchema.pre('save', async function (next) {
//   if (this.isModified('password') || this.isNew) {
//     try {
//       const salt = await bcrypt.genSalt(10);
//       this.password = await bcrypt.hash(this.password, salt);
//       next();
//     } catch (error) {
//       next(error);
//     }
//   } else {
//     return next();
//   }
// });

// // Method to compare hashed password
// userSchema.methods.comparePassword = async function (candidatePassword) {
//   return await bcrypt.compare(candidatePassword, this.password);
// };

// 
