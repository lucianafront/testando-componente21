import React from 'react';
import { render } from '@testing-library/react';
import Carrosel from './componentes/Carrosel';

test('deve renderizar corretamente o componente Carrosel', () => {
  const { asFragment } = render(<Carrosel />);
  expect(asFragment()).toMatchSnapshot();
});
