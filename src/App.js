import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';

import Footer from './components/Footer/Footer';
import React from "react";


function App() {
  return (
    <>
      <div className="App">

        <NavBar />
        <div>
          <Home />
        </div>
        <Footer />
      </div>
    </>

  );
}

export default App;
