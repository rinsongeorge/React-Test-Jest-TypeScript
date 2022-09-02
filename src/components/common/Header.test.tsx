import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../common/Header';

test('renders Header', () => {
  render(<Header />);
  const linkElement = screen.getByText('Movie Bazar') 
  expect(linkElement).toBeInTheDocument();
});
