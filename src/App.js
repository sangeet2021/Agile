
import React from 'react';
import AboutUs from './Components/AboutUs/AboutUs';
import {BrowserRouter} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AboutUs></AboutUs>
      </BrowserRouter>
    </div>
  );
}

export default App;
