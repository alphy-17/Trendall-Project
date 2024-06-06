// Author : Ifteker Azim
// Last revised : 01-06-2024

// Importing React library to use JSX and create React components
import React from 'react';
// Importing ReactDOM to interact with the DOM in the browser
import ReactDOM from 'react-dom/client';
// Importing global CSS styles for the application
import './index.css';
// Importing the main App component
import App from './App';
// Importing a utility to report web vitals (performance metrics)
import reportWebVitals from './reportWebVitals';
// Importing ThemeProvider from Material Tailwind to provide theme context to the app
import { ThemeProvider } from "@material-tailwind/react";

// Creating a root element to render the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the React application inside the root element
// React.StrictMode is a wrapper to highlight potential problems in an application
// ThemeProvider provides the theme context to the App component and its children
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

/**
 * Function to report web vitals (performance metrics) of the app.
 * It helps in measuring the performance of the app.
 * You can pass a function to log results or send them to an analytics endpoint.
 * Learn more: https://bit.ly/CRA-vitals
 */
reportWebVitals();

