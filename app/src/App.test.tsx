import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('prints the expected title', () => {
  render(<App />);
  const title = screen.getByText(/hey, i'm a vue.js app!/i);
  expect(title).toBeInTheDocument();
});
