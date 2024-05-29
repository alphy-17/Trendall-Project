
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GalleryWithPagination from './components/GalleryWithPagination';

function Images() {

    const imageFiles = [
        'P-1-4.jpg',
        'P-11-1.jpg',
        'P-11-2.jpg',
        'P-11-3.jpg',
        'P-11-4.jpg',
        'P-11-5.jpg',
        'P-11-6.jpg',
        'P-12-2.jpg',
        'P-12-3.jpg',
        'P-12-4.jpg',
        'P-12-6.jpg',
        'P-13-1.jpg',
        'P-13-2.jpg',
        'P-13-3.jpg',
        'P-13-4.jpg',
        'P-14-2.jpg',
        'P-15-1.jpg',
        'P-15-2.jpg',
        'P-15-3.jpg',
        'P-15-4.jpg',
        'P-16-1.jpg',
        'P-16-2.jpg',
        'P-16-3.jpg',
        'P-16-4.jpg',
        'P-16-5.jpg',
        'P-16-6.jpg',
        'P-17-1.jpg',
        'P-17-2.jpg',
        'P-18-1.jpg',
        'P-18-2.jpg',
        'P-18-3.jpg',
        'P-19-1.jpg',
        'P-19-2.jpg',
        'P-2.jpg',
        'P-20-1.jpg',
        'P-20-2.jpg',
        'P-22A.jpg',
        'P-22B.jpg',
        'P-23-1.jpg',
        'P-23-2.jpg',
        'P-23-3.jpg',
        'P-23-4.jpg',
        'P-23-5.jpg',
        'P-24-1.jpg',
        'P-24-2.jpg',
        'P-24-3.jpg',
        'P-25-1.jpg',
        'P-25-2.jpg',
        'P-25-3.jpg',
        'P-26-1.jpg',
        'P-26-2.jpg',
        'P-27-1.jpg',
        'P-27-2.jpg',
        'P-27-3.jpg',
        'P-27-4.jpg',
        'P-28-1.jpg',
        'P-28-2.jpg',
        'P-28-3.jpg',
        'P-29-1.jpg',
        'P-29-2.jpg',
        'P-29-3.jpg',
        'P-29-4.jpg',
        'P-29-5.jpg',
        'P-3-1.jpg',
        'P-30-1.jpg',
        'P-30-2.jpg',
        'P-31-1.jpg',
        'P-31-2.jpg',
        'P-31-3.jpg',
        'P-31-4.jpg',
        'P-31-5.jpg',
        'P-32-1.jpg',
        'P-32-2.jpg',
        'P-32-4.jpg',
        'P-33-1.jpg',
        'P-33-2.jpg',
        'P-34-1.jpg',
        'P-34-2.jpg',
        'P-35-1.jpg',
        'P-35-2.jpg',
        'P-35-3.jpg',
        'P-36-1.jpg',
        'P-36-2.jpg',
        'P-36-3.jpg',
        'P-37-1.jpg',
        'P-38-1.jpg',
        'P-38-2.jpg',
        'P-39.jpg',
        'P-41-1.jpg',
        'P-41-2.jpg',
        'P-42-1.jpg',
        'P-42-2.jpg',
        'P-43-1.jpg',
        'P-43-2.jpg',
        'P-44-1.jpg',
        'P-44-2.jpg',
        'P-45-1.jpg',
        'P-45-2.jpg',
        'P-46-1.jpg',
        'P-46-2.jpg',
        'P-47.jpg',
        'P-50-1.jpg',
        'P-51-1.jpg',
        'P-51-2.jpg',
        'P-52-1.jpg',
        'P-52-2.jpg',
        'P-53-1.jpg',
        'P-53-2.jpg',
        'P-54-1.jpg',
        'P-54-2.jpg',
        'P-55-1.jpg',
        'P-56-1.jpg',
        'P-56-2.jpg',
        'P-57-1.jpg',
        'P-57-3.jpg',
        'P-58.jpg',
      ];
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <Header/>
      <GalleryWithPagination imageFiles={imageFiles} />
      <Footer/>
    </>
  );
}

export default Images;