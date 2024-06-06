// Author : Ifteker Azim
// Last revised : 01-06-2024

/**
 * Reports web vitals performance metrics.
 *
 * This function loads the 'web-vitals' library and reports various web performance metrics 
 * (Cumulative Layout Shift, First Input Delay, First Contentful Paint, Largest Contentful Paint, 
 * and Time to First Byte) using the provided callback function `onPerfEntry`.
 *
 * @param {Function} onPerfEntry - A callback function that will receive the performance metrics.
 * It is executed if and only if it is a function.
 */

const reportWebVitals = onPerfEntry => {
  // Check if onPerfEntry is provided and is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Dynamically import the 'web-vitals' library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Measure and report Cumulative Layout Shift (CLS)
      getCLS(onPerfEntry);
      // Measure and report First Input Delay (FID)
      getFID(onPerfEntry);
      // Measure and report First Contentful Paint (FCP)
      getFCP(onPerfEntry);
      // Measure and report Largest Contentful Paint (LCP)
      getLCP(onPerfEntry);
      // Measure and report Time to First Byte (TTFB)
      getTTFB(onPerfEntry);
    });
  }
};

// Export the reportWebVitals function as the default export of this module
export default reportWebVitals;
