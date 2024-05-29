import React, { useState } from 'react';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-30 bg-indigo md:bg-opacity-100 transition duration-300 ease-in-out"
        style={{backgroundColor: '#333333'}}
    >
      <div className="flex flex-col items-center justify-center max-w-6xl px-4 mx-auto md:flex-row  md:px-6 lg:px-8">
      <h1 style={{
    fontSize: '3xl',
    "@media (min-width: 640px)": {
        fontSize: '4xl',
    },
    "@media (min-width: 768px)": {
        fontSize: '4xl',
    },
    "@media (min-width: 1024px)": {
        fontSize: '3xl',
    },
    "@media (min-width: 1280px)": {
        fontSize: '2xl',
    },
    fontFamily: 'Avenir',
    letterSpacing: 'tighter',
    color: 'white',
    height: '10',
    marginBottom: '4',
    marginRight: '4',
}}>
    TRENDALL'S POTTERY ARCHIVE REPOSITORY
</h1>

  {/* <img 
    className="w-24 h-24 sm:w-32 sm:h-32 md:w-22 md:h-8 lg:w-22 lg:h-10 xl:w-24 xl:h-10" 
    src={require('../../images/logo.jpeg')} 
    alt="La Trobe"
  /> */}
</div>




      <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <a
            href="/"
            className="w-full max-w-md mx-auto rounded-md" 

          >
          </a>
          <button
            className="text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#191919"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <nav className="flex-col flex-grow ">
            <ul className="flex flex-grow justify-center flex-wrap items-center">
              <li>
                <a
                  href="/"
                  className="font-medium text-white hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/search"
                  className="font-medium text-white hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-medium text-white hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="font-medium text-white hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
