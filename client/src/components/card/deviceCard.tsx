import React from 'react';
import SensorDevice from '../../assets/Sensor Device.png';

interface Device {
  id: number;
  name: string;
  status: string;
  icon: string;
}

interface DeviceCardComponentProps {
  devices: Device[];
}

const DeviceCardComponent: React.FC<DeviceCardComponentProps> = ({ devices }) => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      {devices.map((device) => (
        <div className="bg-gray-200 flex justify-center items-center my-4 w-full max-w-7xl" key={device.id}>
          <div className="bg-gray-100 shadow-md rounded-lg p-4 flex items-center space-x-4 w-full">
            <div className="flex-shrink-0">
              <img src={device.icon} alt={`${device.name} Logo`} className="h-12 w-12 mr-2" />
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-semibold">{device.name}</h2>
              <p className="text-gray-500">Status: {device.status}</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg">Connect Device</button>
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Remove Device</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeviceCardComponent;
