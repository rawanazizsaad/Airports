import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar/navbar';
import { Home } from './Home/Home';
// import { ImageDetector } from './image_detector/image-detector';
// import { AudioDetector } from './audio_detector/audio_detector';
// import { TextDetector } from './text_detector/text-detector';
import { Pricing } from './pricing/pricing';
import { SignIn } from './Sign-In/SignIn';
import { Footer } from './Footer/Footer';
import { TOS } from './Footer/TOS';
import FAQs from './FAQs/FAQs';
import { PrivacyPolicy } from './Footer/PrivacyPolicy';
import './App.css';
import SignUp from './Sign_Up/SignUp';
import Admin from './Admin/admin'

export default class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar /> 
          <Routes>
            <Route path="/" element={<Home />} /> {/* Set "/" as the default route */}
            {/* <Route path="/image-detector" element={<ImageDetector />} /> */}
            <Route path="/Pricing" element={<Pricing />} />
            {/* <Route path="/audio-detector" element={<AudioDetector />} /> */}
            {/* <Route path="/text-detector" element={<TextDetector />} /> */}
            <Route path="/terms-of-service" element={<TOS />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/FAQs" element={<FAQs />} />
            <Route path="/Sign-In" element={<SignIn />} />
            <Route path="/Sign-Up" element={<SignUp />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/footer" element={<Footer />} />
          

          </Routes>
          <Footer />
        </>
      </Router>
    );
  }
}
