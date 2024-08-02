import React from 'react';
import { render } from '@testing-library/react';
import Cabecalho from './componentes/Cabecalho';

test('renders Cabecalho component correctly', () => {
  const { asFragment } = render(<Cabecalho />);
  expect(asFragment()).toMatchSnapshot();
});

test('calls the correct functions on link clicks', () => {
    // Mocking the functions
    window.open = jest.fn();
  
    const { getByText } = render(<Cabecalho />);
  
    // Simulating link clicks
    fireEvent.click(getByText('A Sodiê'));
    fireEvent.click(getByText('Produtos'));
    fireEvent.click(getByText('Bolos'));
    fireEvent.click(getByText('Salgados'));
    fireEvent.click(getByText('Kit Festa'));
    fireEvent.click(getByText('Doces'));
    fireEvent.click(getByText('Tortas Doces'));
    fireEvent.click(getByText('Bebidas'));
    fireEvent.click(getByText('Balas de Coco'));
    fireEvent.click(getByText('Lojas'));
    fireEvent.click(getByText('Contato'));
    fireEvent.click(getByText('Peça no app'));
    fireEvent.click(getByText('Seja um franqueado'));
  
    // Checking if the functions were called
    expect(window.open).toHaveBeenCalledTimes(13);
  });
