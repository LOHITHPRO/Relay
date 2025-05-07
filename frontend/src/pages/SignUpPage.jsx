import React, { useState } from 'react';
import { axiosInstance } from '../lib/axios';
import useAuthStore from '../store/useAuthStore';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const { signup } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData); // Connect to backend
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Full Name"
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
        />
        {/* Add email/password fields similarly */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};