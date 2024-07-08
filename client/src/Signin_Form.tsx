import React from "react";
import Signup from "./assets/signup.png";
import Signin from "./assets/signin.png";
import UserIcon from "./assets/user.png";
import PassIcon from "./assets/password.png";
import RecIcon from "./assets/Recover.png";
import Header from "./components/navigation/header"; 
import { useNavigate } from 'react-router-dom';
import Footer from './components/footer/footer';
function SigninComponent() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex justify-center items-center flex-grow">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96 h-100">
          <div className="mb-6 flex items-center">
            <img className="w-8 h-8 mr-2 mb-9" src={Signin} alt="Signin" />
            <h2 className="text-3xl font-bold mb-9 text-gray-900">Sign in</h2>
          </div>
          <form>
            <div className="mb-6">
              <div className="flex items-center bg-white p-2 border border-gray-300 rounded-md">
                <img className="w-6 h-6 mr-2" src={UserIcon} alt="Email" />
                <input
                  type="text"
                  name="username"
                  className="bg-transparent border-none w-full text-gray-700 placeholder-gray-500 focus:outline-none"
                  placeholder="Email Address/Username"
                />
              </div>
            </div>
            <div className="mb-10">
              <div className="flex items-center bg-white p-2 border border-gray-300 rounded-md">
                <img className="w-6 h-6 mr-2" src={PassIcon} alt="Password" />
                <input
                  type="password"
                  name="password"
                  className="bg-transparent border-none w-full text-gray-700 placeholder-gray-500 focus:outline-none"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex justify-center mb-10"> 
              <button
                type="submit"
                className="w-40 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                style={{ backgroundColor: '#79797B' }}
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-6 text-center text-gray-500">
            <p className="mb-4">
              I don't have an account.{" "}
              <a href="#" className="text-blue-600 hover:underline" onClick={() => { navigate('/Signup_Form') }}>
                Sign Up
                <img className="w-4 h-4 inline-block ml-0" src={Signup} alt="Signup"   onClick={() => { navigate('/Signup_Form') }}/>
              </a>
            </p>
            <p>
              I forgot my password.{" "}
              <a href="#" className="text-blue-600 hover:underline" onClick={() => { navigate('/Recovery') }}>
              Recovery
                <img className="w-4 h-4 inline-block ml-1" src={RecIcon} alt="Recovery" onClick={() => { navigate('/Recovery') }}/>
              </a>
            </p>
          </div>
        </div>
       
      </div>
   
    </div>
  );
}

export default SigninComponent;