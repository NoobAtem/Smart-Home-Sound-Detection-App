import React from 'react';
import Footer from './components/footer/footer';
import NotificationCard from './components/card/notificationCard';
import UserNav from './components/navigation/user_nav';

const SetNotification = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <UserNav />
      <div className="flex-grow shadow-lg rounded-lg overflow-hidden mt-8 p-6 bg-gray-50">
        <div className="bg-EC-EC-EC px-4 py-5 border-b border-gray-200 sm:px-6">
          <div className="text-lg leading-6 font-medium text-gray-900 ml-11">Sound Notification Settings</div>
        </div>
        <NotificationCard />
      </div>
      <Footer />
    </div>
  );
};

export default SetNotification;
