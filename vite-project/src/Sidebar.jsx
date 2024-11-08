import React from 'react';
import { FaTachometerAlt, FaFlask, FaUpload, FaRobot, FaTasks, FaPlug, FaEnvelope } from 'react-icons/fa';
import main from './assets/main.svg';
import profile from './assets/profile.svg'

const Sidebar = () => {
  return (
    <div
      className="h-screen text-white w-64 px-6 py-8 flex flex-col justify-between"
      style={{
        background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 10%, rgba(0, 0, 0, 0.5) 100%), rgb(30, 30, 30)'
      }}
    >
      {/* Logo */}
      <div className="flex items-center justify-center mb-8">
    <img src={main} alt="Logo" className="w-10 h-10" />
</div>

      
      {/* Navigation Links */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3 py-2 px-3 rounded-lg bg-gray-800 cursor-pointer hover:bg-gray-700">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </div>
        <div className="flex items-center space-x-3 py-2 px-3 rounded-lg cursor-pointer hover:bg-gray-700">
          <FaFlask />
          <span>Playground</span>
        </div>
        <div className="flex items-center space-x-3 py-2 px-3 rounded-lg cursor-pointer hover:bg-gray-700">
          <FaUpload />
          <span>Ingest</span>
        </div>
        <div className="flex items-center space-x-3 py-2 px-3 rounded-lg cursor-pointer hover:bg-gray-700">
          <FaRobot />
          <span>Automations</span>
        </div>
        <div className="flex items-center space-x-3 py-2 px-3 rounded-lg cursor-pointer hover:bg-gray-700">
          <FaTasks />
          <span>Active Automations</span>
        </div>
        <div className="flex items-center space-x-3 py-2 px-3 rounded-lg cursor-pointer hover:bg-gray-700">
          <FaPlug />
          <span>Integrations</span>
        </div>
        <div className="flex items-center space-x-3 py-2 px-3 rounded-lg cursor-pointer hover:bg-gray-700">
          <FaEnvelope />
          <span>Messages</span>
        </div>
      </div>

      {/* User Profile */}
      <div className="flex items-center space-x-3 mt-auto">
        <img
          src={profile}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">Alex Johns</p>
          <p className="text-sm text-gray-400">alexjohns@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
