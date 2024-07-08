import React, { useState } from 'react';
import DoorIcon from '../../assets/Door.png';
import BreakGlassIcon from '../../assets/Breaking Glass.png';
import DoorbellIcon from '../../assets/Doorbell.png';

interface Notification {
  id: number;
  device: string;
  event: string;
  icon: string;
}

const NotificationCard = () => {
  const [selectedNotification, setSelectedNotification] = useState<number | null>(null);

  const notifications: Notification[] = [
    {
      id: 1,
      device: 'Door Opening',
      event: 'The Detected sound Event of the Door Opening Notification',
      icon: DoorIcon,
    },
    {
      id: 2,
      device: 'Breaking of Glass',
      event: 'The Detected sound Event of a Glass Breaking Notification',
      icon: BreakGlassIcon,
    },
    {
      id: 3,
      device: 'Doorbell',
      event: 'The Detected sound Event of a Doorbell Notification',
      icon: DoorbellIcon,
    },
  ];

  const handleNotificationClick = (notificationId: number) => {
    setSelectedNotification(notificationId);
    // Do something with the selected notification, e.g., pass it to another component or store it in state
    console.log(`Selected notification: ${notificationId}`);
  };

  return (
    <div className="notif-container flex flex-col items-center">
      {notifications.map((notification) => (
        <div className="bg-gray-200 flex justify-center items-center my-4 w-full max-w-7xl" key={notification.id}>
          <div className="bg-gray-100 shadow-md rounded-lg p-4 flex items-center space-x-4 w-full">
            <div className="flex-shrink-0">
              <img src={notification.icon} alt={`${notification.device} Logo`} className="h-12 w-12 mr-2" />
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-semibold">{notification.device}</h2>
              <p className="text-gray-500">{notification.event}</p>
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-300 ${selectedNotification === notification.id ? 'bg-blue-200' : ''}`}
                onClick={() => handleNotificationClick(notification.id)}
              >
                <svg className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
                Notification {notification.id}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationCard;
