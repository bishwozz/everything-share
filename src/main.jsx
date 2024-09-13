// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShareForm from './components/ShareForm';
import ShareDisplay from './components/ShareDisplay';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShareForm />} />
        <Route path="/:slug" element={<ShareDisplay />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
