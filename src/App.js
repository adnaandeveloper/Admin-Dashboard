import React from 'react';
import Sidebar from './components/topbar/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.css';
const App = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">other pages</div>
      </div>
    </div>
  );
};

export default App;
