import React, { useState, useEffect } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Moment from 'react-moment';
import {CashProvider} from "./context/CashContext";

function App() {
  return (
    <div className="App">
      <CashProvider>
        <Homepage />
      </CashProvider>
    </div>
  );
}

export default App;
