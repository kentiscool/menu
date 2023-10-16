import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { CartProvider } from './contexts/Cart'
import CartPage from './pages/cart'
import MenuPage from './pages/menu'

import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ height: '100%', width: '100%' }}>
        <CartProvider>
          <Routes>
            <Route path="/" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </CartProvider>
      </div>
    </Router>
  )
}

export default App
