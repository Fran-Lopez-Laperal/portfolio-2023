import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';

import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router';
import React from "react";
import WhoIAm from './components/WhoIAm/WhoIAm';


function App() {
  return (
    <div className="App">
     
      <NavBar />
      <div>
        <Routes>
          <Route path="/sobre-mi" element={<WhoIAm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
