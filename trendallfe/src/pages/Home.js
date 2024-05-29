import React, { useState } from 'react';
import { HomeCarousel } from './components/HomeCarousel';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Header from './components/Header';
import { Link } from 'react-router-dom';

function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font min-h-screen">
        <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
          <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-center md:text-left mb-2 items-center text-center">
            <h1 className="mb-2 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
              Welcome to the Research Centre
            </h1>
            <p className="mb-10 text-2xl Avenir font-semibold text-gray-600 text-center">
              At the Trendall's Pottery Archive Repository, we focus on the study of classical art and archaeology. Our work encompasses a broad range of themes from classical antiquity, with a particular emphasis on ancient Greek and Roman artifacts.
            </p>
            <Link to="/search">
              <button
                type="button"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.5rem 1rem',
                  border: '1px solid transparent',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  borderRadius: '0.375rem',
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                  color: '#fff',
                  backgroundColor: '#666666',
                  transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out',
                  cursor: 'pointer',
                  outline: 'none',
                  textDecoration: 'none'
                }}
              >
                Search for Artifact ->
              </button>
            </Link>
          </div>
        </div>
        <section className="mx-auto">
          <div className="container px-5 mx-auto lg:px-24">
            <div className="flex flex-col w-full mb-8 text-left lg:text-center">
              <h1 className="mb-2 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
                Featured Articles
              </h1>
              <HomeCarousel />
            </div>
          </div>
        </section>
        <div className="grr max-w-7xl pt-20 mx-auto text-center">
          <h1 className="mb-8 text-6xl Avenir font-semibold text-gray-900">
            Image Gallery
          </h1>
          <div>
            <Gallery />
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section>
        <Footer />
      </section>
    </>
  );
}

export default Home;
