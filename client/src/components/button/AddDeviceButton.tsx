import React from 'react';
import addnewDevice from '../../assets/Add Device.png';

interface AddDeviceButtonProps {
  addDevice: () => void;
}

const AddDeviceButton: React.FC<AddDeviceButtonProps> = ({ addDevice }) => {
  return (
    <button
      onClick={addDevice}
      className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg flex items-center"
    >
      <img src={addnewDevice} alt="Add Device" className="h-6 w-6 mr-2" />
      Add Device
    </button>
  );
};

export default AddDeviceButton;
