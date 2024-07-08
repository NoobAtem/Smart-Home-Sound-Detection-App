import React, { useEffect, useState } from 'react';
import UserNav from "./components/navigation/user_nav";
import { ViewCardTable } from "./components/table/cardtable";
import { useLocation } from "react-router-dom";
import Footer from './components/footer/footer';

function Timelog(props: any) {
  const location = useLocation();
  const [userData, setUserData] = useState();
  const [openAside, setOpenAside] = useState(false);

  useEffect(() => {
    // Google Analytics
  }, [location]);

  const titles = [
    "DeviceID", 
    "Device Name",
    "Sound Event",
    "Time"
  ];

  const dictionary = [
    {
      "DeviceID": 1,
      "Device Name": "Device 1",
      "Sound Event": "Opening of Door",
      "Time": "Date/Time",
    },
    {
      "DeviceID": 2,
      "Device Name": "Device 2",
      "Sound Event": "Opening of Door",
      "Time": "Date/Time",
    },
    {
      "DeviceID": 1,
      "Device Name": "Device 1",
      "Sound Event": "Breaking of Glass",
      "Time": "Date/Time",
    },
    {
      "DeviceID": 3,
      "Device Name": "Device 3",
      "Sound Event": "Opening of Door",
      "Time": "Date/Time",
    },
    {
      "DeviceID": 4,
      "Device Name": "Device 4",
      "Sound Event": "Doorbell",
      "Time": "Date/Time",
    },
    {
      "DeviceID": 4,
      "Device Name": "Device 4",
      "Sound Event": "Doorbell",
      "Time": "Date/Time",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <UserNav />
      <div className="flex-grow">
        <ViewCardTable
          title={"Time Logs"}
          header={titles}
          value={dictionary}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Timelog;
