// App.jsx

import React, { useEffect } from 'react';
import './App.css';
import Calculator from './calculator';

function App() {
  useEffect(() => {
    document.title = 'My Calculator App'; 
  }, []); 

  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
