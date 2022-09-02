import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCardList from '../components/MovieCardList';

test('renders list of movies', () => {
  render(<MovieCardList />);
  const linkElement = screen.getAllByTestId('card');  
  expect(linkElement.length).toBeGreaterThan(10);
});
