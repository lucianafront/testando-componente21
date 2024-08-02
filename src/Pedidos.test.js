import React from 'react';
import { render } from '@testing-library/react';
import Pedidos from './componebtes/Pedidos';

test('renders Pedidos component correctly', () => {
  const { asFragment } = render(<Pedidos />);
  expect(asFragment()).toMatchSnapshot();
});
