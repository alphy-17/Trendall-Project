// Author : Ifteker Azim
// Last revised : 01-06-2024

// Import necessary modules and components from 'react' and 'react-router-dom'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import custom components/pages for the application
import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';
import Contact from './pages/Contact';
import Images from './pages/Images';
import PdfViewer from './pages/PdfViewer';

// Define the main App component
const App = () => {
  return (
    // Use Router to handle routing within the application
    <Router>
      <div>
        {/* Define the routes for the application */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />
          {/* Route for the search page */}
          <Route path="/search" element={<Search />} />
          {/* Route for the about page */}
          <Route path="/about" element={<About />} />
          {/* Route for the contact page */}
          <Route path="/contact" element={<Contact />} />
          {/* Route for the images page */}
          <Route path="/images" element={<Images />} />
          {/* Route for the PDF viewer page */}
          <Route path="/pdfview" element={<PdfViewer />} />
        </Routes>
      </div>
    </Router>
  );
};

// Export the App component as the default export
export default App;
