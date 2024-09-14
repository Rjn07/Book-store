import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    
    try {
      const response = await axios.post('http://localhost:4001/contact', data)
      .then((res)=>{
        console.log(res.data)
          
          const msg=document.getElementById('message');
          msg.innerText='saved Succefully';
          msg.style='color:red;'
          setTimeout(() => {
            window.location.href='/';
            
          }, 3000);
          

        
      }).catch((err)=>{
        console.log(err)
        alert("Error:"+ err);
      })
     
    } catch (error) {
      console.error('There was a problem with the request:', error);
      alert('Failed to send your message. Please try again later.');
    }
  };

  return (
    <div className="contact-form max-w-lg mx-auto p-6 bg-white rounded shadow-md dark:bg-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <div id='message'></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name:</label>
          <input
            id="name"
            type="text"
            className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700"
            {...register('name', { required: true })}
          />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email:</label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700"
            {...register('email', { required: true })}
          />
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message:</label>
          <textarea
            id="message"
            className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-700"
            {...register('message', { required: true })}
          ></textarea>
          {errors.message && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="flex justify-end space-x-3">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 duration-200"
          >
            Send
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 duration-200"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
