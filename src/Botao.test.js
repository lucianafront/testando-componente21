import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Botao from "./componentes/Botao";

test("deve renderizar o componente Botao e verificar interações", async () => {
  const props = {
    link: "https://example.com",
    ico: "fa fa-icon",
  };

  render(<Botao {...props} />);

  // Verificar se o ícone é renderizado
  expect(screen.getByRole("link")).toBeInTheDocument();
  expect(screen.getByRole("link")).toHaveAttribute(
    "href",
    "https://example.com"
  );
  expect(screen.getByRole("link").querySelector("i")).toHaveClass("fa fa-icon");

  // Simular clique no link
  await act(() => userEvent.click(screen.getByRole("link")));

  // Verificar se o link foi clicado (pode ser necessário mockar o comportamento)
  expect(screen.getByRole("link")).toHaveAttribute(
    "href",
    "https://example.com"
  );
});

test("deve corresponder ao snapshot", () => {
  const props = {
    link: "https://example.com",
    ico: "fa fa-icon",
  };

  const { asFragment } = render(<Botao {...props} />);
  expect(asFragment()).toMatchSnapshot();
});

test("deve verificar se o componente Botao exibe o ícone correto", () => {
  const props = {
    link: "https://example.com",
    ico: "fa fa-icon",
  };

  render(<Botao {...props} />);
  expect(screen.getByRole("link").querySelector("i")).toHaveClass("fa fa-icon");
});
