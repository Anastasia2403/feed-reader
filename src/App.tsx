import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { HomePage } from './components/HomePage';
import { Header } from './components/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
