import React from 'react';
import { render } from '@testing-library/react';
import Sabores from './componebtes/Sabores';

test('renders Sabores component correctly', () => {
  const { asFragment } = render(<Sabores />);
  expect(asFragment()).toMatchSnapshot();
});


test('calls the correct functions on button clicks', () => {
    // Mocking the functions
    window.showBoloChocolate = jest.fn();
    window.showBoloBranco = jest.fn();
    window.showBoloZero = jest.fn();
    window.showBoloCaseiros = jest.fn();
  
    const { getByText } = render(<Sabores />);
  
    // Simulating button clicks
    fireEvent.click(getByText('Bolos de Chocolate'));
    fireEvent.click(getByText('Bolos Brancos'));
    fireEvent.click(getByText('Bolos Zero Açúcar'));
    fireEvent.click(getByText('Bolos Caseiros'));
  
    // Checking if the functions were called
    expect(window.showBoloChocolate).toHaveBeenCalled();
    expect(window.showBoloBranco).toHaveBeenCalled();
    expect(window.showBoloZero).toHaveBeenCalled();
    expect(window.showBoloCaseiros).toHaveBeenCalled();
  });