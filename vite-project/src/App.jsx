import React from 'react';
import Sidebar from './Sidebar';
import Activities from './Activities';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4">
        <Activities />
      </div>
    </div>
  );
}

export default App;
