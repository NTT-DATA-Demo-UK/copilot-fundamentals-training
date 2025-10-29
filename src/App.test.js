import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app with repository forker', () => {
  render(<App />);
  const heading = screen.getByText(/🍴 Repository Forker/);
  expect(heading).toBeInTheDocument();
});