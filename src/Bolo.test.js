import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Bolo from "./componentes/Bolo";

test("deve renderizar o componente Bolo e verificar interações", async () => {
  const bolo = {
    numero: 1,
    href: "https://example.com",
    src: "https://example.com/image.jpg",
    srcSet:
      "https://example.com/image.jpg 1x, https://example.com/image@2x.jpg 2x",
    nome: "Bolo de Cenoura",
  };

  await act(() => {
    render(<Bolo bolo={bolo} />);
  });

  // Verificar se o número do bolo é renderizado
  expect(screen.getByText("#1")).toBeInTheDocument();

  // Verificar se o nome do bolo é renderizado
  expect(screen.getByText("Bolo de Cenoura")).toBeInTheDocument();

  // Simular clique no link "Eu quero"
  await act(async () => {
    userEvent.click(screen.getByText("Eu quero"));
  });

  // Verificar se o link foi clicado (pode ser necessário mockar o comportamento)
  expect(screen.getByRole("link", { name: /eu quero/i })).toHaveAttribute(
    "href",
    "https://example.com"
  );
});

test("deve corresponder ao snapshot do componente Bolo", () => {
  const bolo = {
    numero: 1,
    href: "https://example.com",
    src: "https://example.com/image.jpg",
    srcSet:
      "https://example.com/image.jpg 1x, https://example.com/image@2x.jpg 2x",
    nome: "Bolo de Cenoura",
  };

  const { container } = render(<Bolo bolo={bolo} />);

  expect(container).toMatchSnapshot();
});

test("deve verificar se o componente Bolo exibe a imagem correta", () => {
  const bolo = {
    numero: 1,
    href: "https://example.com",
    src: "https://example.com/image.jpg",
    srcSet:
      "https://example.com/image.jpg 1x, https://example.com/image@2x.jpg 2x",
    nome: "Bolo de Cenoura",
  };

  render(<Bolo bolo={bolo} />);

  // Verificar se a imagem é renderizada corretamente
  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute("src", "https://example.com/image.jpg");
  expect(imageElement).toHaveAttribute(
    "srcSet",
    "https://example.com/image.jpg 1x, https://example.com/image@2x.jpg 2x"
  );
});


test("deve lançar um erro se as props obrigatórias não forem fornecidas", () => {
  // Render the Bolo component without providing the required props
  expect(() => {
    render(<Bolo />);
  }).toThrow();
});
