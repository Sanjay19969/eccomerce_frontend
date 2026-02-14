import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import ForgotPassword from './pages/ForgotPassword';
import OTPVerification from './pages/OTPVerification';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-primary-bg text-dark-accent font-sans">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp-verification" element={<OTPVerification />} />

            {/* Fallback routes */}
            <Route path="/categories" element={<Shop />} />
            <Route path="/new-arrivals" element={<Shop />} />
            <Route path="/collections" element={<Shop />} />
            <Route path="/wishlist" element={<Shop />} />
            <Route path="/journal" element={<Home />} />
            <Route path="/contact" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
