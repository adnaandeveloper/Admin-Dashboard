import React from 'react';
import Topbar from './components/topbar/Topbar';

const App = () => {
  return (
    <div>
      <Topbar />
      {new Array(100).fill(null).map(() => (
        <h1> hello</h1>
      ))}
    </div>
  );
};

export default App;
