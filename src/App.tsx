import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Mobiles from './pages/Mobiles';
import Laptops from './pages/Laptops';
import Watches from './pages/Watches';
import Television from './pages/Television';
import Fridge from './pages/Fridge';
import AirConditioner from './pages/AirConditioner';
import WashingMachine from './pages/WashingMachine';
import Routers from './pages/Routers';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import OrderTracking from './pages/OrderTracking';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <Header />
            <main className="pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mobiles" element={<Mobiles />} />
                <Route path="/laptops" element={<Laptops />} />
                <Route path="/watches" element={<Watches />} />
                <Route path="/television" element={<Television />} />
                <Route path="/fridge" element={<Fridge />} />
                <Route path="/air-conditioner" element={<AirConditioner />} />
                <Route path="/washing-machine" element={<WashingMachine />} />
                <Route path="/routers" element={<Routers />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<OrderTracking />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;