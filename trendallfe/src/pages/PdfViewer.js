
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PDFViewer from "tailwind-pdf-viewer";
import "tailwind-pdf-viewer/style.css";
import pdf from "./components/trendaldoc.pdf";

function PdfViewer() {

  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <Header/>
      <PDFViewer pdfURL={pdf} />;
      <Footer/>
    </>
  );
}

export default PdfViewer;
