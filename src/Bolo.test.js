import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Bolo from './componentes/Bolo';

test('deve renderizar o componente Bolo e verificar interações', () => {
  const bolo = {
    numero: 1,
    href: 'https://example.com',
    src: 'https://example.com/image.jpg',
    srcSet: 'https://example.com/image.jpg 1x, https://example.com/image@2x.jpg 2x',
    nome: 'Bolo de Cenoura'
  };

  render(<Bolo bolo={bolo} />);

  // Verificar se o número do bolo é renderizado
  expect(screen.getByText('#1')).toBeInTheDocument();

  // Verificar se o nome do bolo é renderizado
  expect(screen.getByText('Bolo de Cenoura')).toBeInTheDocument();

  // Simular clique no link "Eu quero"
  userEvent.click(screen.getByText('Eu quero'));

  // Verificar se o link foi clicado (pode ser necessário mockar o comportamento)
  expect(screen.getByRole('link', { name: /eu quero/i })).toHaveAttribute('href', 'https://example.com');
});
