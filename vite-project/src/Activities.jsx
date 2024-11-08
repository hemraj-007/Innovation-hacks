import React from 'react';
import { FaTasks, FaCheck, FaUserCheck, FaHandsHelping } from 'react-icons/fa';

const Activities = () => {
  return (
    <div className="bg-gray-950 text-white p-6 rounded-lg shadow-lg w-90">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Activities</h2>
        <select className="bg-gray-800 text-white p-2 rounded border border-gray-700">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Daily</option>
        </select>
      </div>

      {/* Activity List */}
      <div className="space-y-4">
        <div className="bg-gray-900 p-4 rounded-lg flex items-center space-x-4">
          <div className="bg-gray-700 p-2 rounded-full">
            <FaTasks className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Underwriting</h3>
            <p className="text-sm text-gray-400">
              Collateral Evaluation for <span className="font-bold text-white">Case 9517</span> commenced.
            </p>
          </div>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center space-x-4">
          <div className="bg-gray-700 p-2 rounded-full">
            <FaCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Document Verification</h3>
            <p className="text-sm text-gray-400">
              Personal Identity validation for <span className="font-bold text-white">Case 871</span> completed.
            </p>
          </div>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center space-x-4">
          <div className="bg-gray-700 p-2 rounded-full">
            <FaUserCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Customer Support</h3>
            <p className="text-sm text-gray-400">
              Personal Identity validation for <span className="font-bold text-white">Case 871</span> completed.
            </p>
          </div>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center space-x-4">
          <div className="bg-gray-700 p-2 rounded-full">
            <FaHandsHelping className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Customer Support</h3>
            <p className="text-sm text-gray-400">
              Personal Identity validation for <span className="font-bold text-white">Case 871</span> completed.
            </p>
          </div>
        </div>
      </div>

      {/* See More Button */}
      <button className="border border-gray-00 text-white py-2 px-4 rounded mt-4 w-full hover:bg-gray-700">
        See More
      </button>
    </div>
  );
};

export default Activities;
