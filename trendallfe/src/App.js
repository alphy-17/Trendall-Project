import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';
import Contact from './pages/Contact'
import Images from './pages/Images';
import PdfViewer from './pages/PdfViewer';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/images" element={<Images />} />
          <Route path="/pdfview" element={<PdfViewer />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;