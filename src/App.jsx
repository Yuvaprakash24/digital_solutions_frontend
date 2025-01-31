import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Navbar from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';
import WhatsAppSupport from './components/WhatsAppSupport';

import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './pages/blog';
import Career from './pages/career';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Services from './pages/services';
import WhyChooseUs from './pages/why-choose-us';
import Admin from './pages/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/" element={<Services />} />
              <Route path="/services" element={<Services />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
            </Routes>
          </div>
          <Footer />
          <WhatsAppSupport />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;