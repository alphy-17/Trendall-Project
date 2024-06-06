// Author : Ifteker Azim
// Last revised : 01-06-2024

// Import necessary functions and components from the testing library and the App component.
import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Test case to check if the "learn react" link is rendered in the App component.
 *
 * This test renders the App component and checks if an element containing
 * the text "learn react" is present in the document.
 */
test('renders learn react link', () => {
  // Render the App component
  render(<App />);

  // Find an element that contains the text "learn react"
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the element is in the document
  expect(linkElement).toBeInTheDocument();
});
