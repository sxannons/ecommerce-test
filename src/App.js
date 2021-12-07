import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <h1>404 - Not found</h1>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
