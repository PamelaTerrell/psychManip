import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Topics from './pages/Topics';
import Message from './pages/Message';

// Topic detail pages
import Narcissism from './pages/topics/Narcissism';
import Gaslighting from './pages/topics/Gaslighting';
import TraumaBonding from './pages/topics/TraumaBonding';
import EmotionalCoercion from './pages/topics/EmotionalCoercion';
import Control from './pages/Control';
import Triangulation from './pages/topics/Triangulation';
import Hoovering from './pages/topics/Hoovering';
import SexandNarcissism from './pages/topics/SexandNarcissism';
import TypesOfManipulators from './pages/TypesOfManipulators';

import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/topics" element={<Topics />} />

          <Route path="/topics/narcissism" element={<Narcissism />} />
          <Route path="/topics/gaslighting" element={<Gaslighting />} />
          <Route path="/topics/trauma-bonding" element={<TraumaBonding />} />
          <Route path="/topics/emotional-coercion" element={<EmotionalCoercion />} />
          <Route path="/topics/hoovering" element={<Hoovering />} />
          <Route path="/topics/sex-and-narcissism" element={<SexandNarcissism />} />
          <Route path="/control" element={<Control />} />
          <Route path="/message" element={<Message />} />
          <Route path="/topics/triangulation" element={<Triangulation />} />
          <Route path="/types-of-manipulators" element={<TypesOfManipulators />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
