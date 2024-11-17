import React, { useState } from 'react';
import './App.css';

function MouseTracker ({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };
  return (
    <div onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}
function App() {
  return (
    <div className="App" style={{ height: '100%' }}>
      <MouseTracker render={position => (
        <h1>Mouse Position: ({position.x}, {position.y})</h1>
      )}
      />
    </div>
  );
}
export default App;
