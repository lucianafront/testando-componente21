import React, { act } from "react";
import Carrosel from './componentes/Carrosel';
import { render, screen } from "@testing-library/react";

test('deve renderizar corretamente o componente Carrosel', () => {
  const { asFragment } = render(<Carrosel />);
  expect(asFragment()).toMatchSnapshot();
});

test('deve verificar se o componente Carrosel contém um texto específico', () => 
  { 
    const { asFragment } = render(<Carrosel />);
    expect(asFragment()).toHaveTextContent("Deliciosamente recheados e com muito sabor, cada um de nossos bolos é criado para proporcionar mais amor e carinho para todas as ocasiões.");
  });








