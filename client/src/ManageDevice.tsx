import React, { useState } from 'react';
import Footer from './components/footer/footer';
import DeviceCardComponent from './components/card/deviceCard';
import UserNav from './components/navigation/user_nav';
import SensorDevice from './assets/Sensor Device.png';
import AddDeviceButton from './components/button/AddDeviceButton'; 

const ManageDevice = () => {
  const [devices, setDevices] = useState([
    {
      id: 1,
      name: 'Device 1',
      status: 'Not Connected',
      icon: SensorDevice,
    },
    {
      id: 2,
      name: 'Device 2',
      status: 'Connected',
      icon: SensorDevice,
    },
    // Add more devices as needed
  ]);

  const addDevice = () => {
    const newDevice = {
      id: devices.length + 1,
      name: `Device ${devices.length + 1}`,
      status: 'Not Connected',
      icon: SensorDevice,
    };
    setDevices([...devices, newDevice]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <UserNav />
      <div className="flex-grow flex flex-col shadow-lg rounded-lg mt-8 p-6 bg-gray-50">
        <div className="bg-gray-0 px-4 py-5 border-b border-gray-200 sm:px-6">
          <div className="flex justify-between items-center">
            <div className="text-lg leading-6 font-medium text-gray-900 ml-11">Manage Device</div>
            <div>
              <AddDeviceButton addDevice={addDevice} />
            </div>
          </div>
        </div>
        <DeviceCardComponent devices={devices} />
      </div>
      <Footer />
    </div>
  );
};

export default ManageDevice;
