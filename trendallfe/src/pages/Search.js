
import React, { useState } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';

function SearchPage() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <Header/>
      <Filter/>
    </>
  );
}

export default SearchPage;
