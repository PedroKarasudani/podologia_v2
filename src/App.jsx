import React from 'react';
import './App.css';
import './Cores.css';
import './Tipografia.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
