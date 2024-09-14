import React from 'react';
import Home from './Home';
import { Route, Routes } from "react-router-dom";
import Courses from './courses/courses';
import Signup from './Components/signup';
import Contact from './Components/contact'; // Ensure correct capitalization

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white-600">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
