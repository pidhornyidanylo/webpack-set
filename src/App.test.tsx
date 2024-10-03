import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('App component', () => {
  it('should render header', () => {
    render(<App />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
});
