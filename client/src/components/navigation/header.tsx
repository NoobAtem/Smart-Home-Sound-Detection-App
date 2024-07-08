import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-gradient-to-r from-gray-800 to-gray-600 p-4">
      <div className="flex items-center">
        <button 
          type="button" 
          className="flex items-center" 
          onClick={() => { navigate('/Signin_Form') }}
        >
          <img className="h-12 w-12 ml-10" src={Logo} alt="Logo" />
          </button>
          <div className="flex flex-col ml-2">
            <p className="text-white text-xl font-bold leading-tight">
              Smart Home Sound Detection App
            </p>
            <p className="text-white text-md leading-tight mt-[-4px]">
              by atomic
            </p>
          </div>
        
      </div>
    </nav>
  );
};

export default Header;
