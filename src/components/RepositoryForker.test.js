import React from 'react';
import { render, screen } from '@testing-library/react';
import RepositoryForker from './RepositoryForker';

test('renders repository forker component', () => {
  render(<RepositoryForker />);
  const heading = screen.getByText(/🍴 Repository Forker/i);
  expect(heading).toBeInTheDocument();
});

test('renders default repository url', () => {
  render(<RepositoryForker />);
  const input = screen.getByDisplayValue(/hitachi-rail-workshop-org-2025-10-07\/code-along/);
  expect(input).toBeInTheDocument();
});

test('renders fork button', () => {
  render(<RepositoryForker />);
  const button = screen.getByText(/🍴 Fork Repository/);
  expect(button).toBeInTheDocument();
});