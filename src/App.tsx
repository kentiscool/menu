import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import MenuPage from './pages/menu';
import { CartProvider } from './contexts/Cart';

const App: React.FC = () => {
  return (
      <Router>
        <div style={{ height: '100%', width: '100%' }}>
          <CartProvider>
            <Routes>
                <Route path="/" element={<MenuPage/>} />
            </Routes>
          </CartProvider>
        </div>
      </Router>
  );
}

export default App;
