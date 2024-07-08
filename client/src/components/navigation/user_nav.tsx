import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import AddDevice from '../../assets/Add Device.png';
import TimeLog from '../../assets/Time Log.png';
import Notification from '../../assets/Set Notification.png';
import LoginUser from '../../assets/user (1).png';
import Logout from '../../assets/logout.png';

const UserNav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-gradient-to-r from-gray-800 to-gray-600 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button 
            type="button" 
            className="flex items-center" 
            onClick={() => { navigate('/user/ManageDevice') }}
          >
            <img className="h-12- w-14 mr-0 ml-1" src={Logo} alt="Logo" />
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
        <div className="flex items-center justify-center flex-grow space-x-4" style={{ marginLeft: '-50px' }}>
          <button type="button" onClick={() => { navigate('/user/ManageDevice') }}>
            <img className="h-8 w-8" src={AddDevice} alt="Add Device" />
          </button>
          <button type="button" onClick={() => { navigate('/user/Timelog') }}>
            <img className="h-8 w-8" src={TimeLog} alt="Time Log" />
          </button>
          <button type="button" onClick={() => { navigate('/user/SetNotification') }}>
            <img className="h-8 w-8" src={Notification} alt="Notification" />
          </button>
        </div>
        <div className="flex items-center space-x-4 mr-10" style={{ marginRight: '50px' }}>
          <button type="button" onClick={() => { navigate('/Login') }}>
            <img className="h-8 w-8" src={LoginUser} alt="Update Account" />
          </button>
          <button type="button" onClick={() => { navigate('/Signin_Form') }}>
            <img className="h-8 w-8" src={Logout} alt="Logout" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default UserNav;
