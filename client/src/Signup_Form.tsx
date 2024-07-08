import { useState } from "react";
import Signup from "./assets/signup.png";
import Signin from "./assets/signin.png";
import UserIcon from "./assets/user.png";
import EmailIcon from "./assets/mail.png";
import PassIcon from "./assets/password.png";
import Header from "./components/navigation/header"; 
import { useNavigate } from 'react-router-dom';

function SignupComponent() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'User',
  });

  const handleInput = (event: any) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex items-center  mb-9">
          <img className="w-8 h-8 mr-2 mb-1" src={Signup} alt="Signup" />
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Sign Up</h2>
        </div>
        <form>
          <div className="mb-4 flex items-center bg-white p-2 rounded-md border border-gray-300">
            <img src={EmailIcon} alt="Email Icon" className="w-5 h-5 mr-3" />
            <input 
              type="text" 
              name="email" 
              value={values.email} 
              onChange={handleInput} 
              placeholder="Email Address" 
              className="bg-white outline-none w-full"
            />
          </div>
          <div className="mb-4 flex items-center bg-white p-2 rounded-md border border-gray-300">
            <img src={UserIcon} alt="User Icon" className="w-5 h-5 mr-3" />
            <input 
              type="text" 
              name="username" 
              value={values.username} 
              onChange={handleInput} 
              placeholder="Username" 
              className="bg-white outline-none w-full"
            />
          </div>
          <div className="mb-4 flex items-center bg-white p-2 rounded-md border border-gray-300">
            <img src={PassIcon} alt="Password Icon" className="w-5 h-5 mr-3" />
            <input 
              type="password" 
              name="password" 
              value={values.password} 
              onChange={handleInput} 
              placeholder="Password" 
              className="bg-white outline-none w-full"
            />
          </div>
          <div className="mb-10 flex items-center  bg-white p-2 rounded-md border border-gray-300">
            <img src={PassIcon} alt="Password Icon" className="w-5 h-5 mr-3 " />
            <input 
              type="password" 
              name="confirmPassword" 
              value={values.confirmPassword} 
              onChange={handleInput} 
              placeholder="Confirm Password" 
              className="bg-white outline-none w-full"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-40 mb-2 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              style={{ backgroundColor: '#79797B' }}
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">I already have an account. <a href="#" className="text-blue-600 hover:underline" onClick={() => { navigate('/Signin_Form') }}>Sign In
          <img className="w-4 h-4 inline-block ml-1" src={Signin} alt="signin"  onClick={() => { navigate('/Signin_Form') }} />
          </a> </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignupComponent;
