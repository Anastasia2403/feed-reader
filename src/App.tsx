import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { HomePage } from './components/HomePage';
import { Header } from './components/Header';
import { FeedArticlesPage } from './components/ FeedArticlesPage';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/feed/:feedUrl" element={<FeedArticlesPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
