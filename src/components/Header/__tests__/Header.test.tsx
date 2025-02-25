import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Header } from "../header";

describe("Header component", () => {
  it("renders the logo and navigation links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Verifica se o logo está sendo renderizado
    const logo = screen.getByRole("link", { name: /lacrei/i }); // Substitua "lacrei" pelo nome/alt do logo se necessário
    expect(logo).toBeInTheDocument();

    // Verifica se os botões de navegação estão sendo renderizados
    const quemSomosLink = screen.getByRole("link", { name: /quem somos/i });
    const ajudaLink = screen.getByRole("link", { name: /ajuda/i });
    const entrarButton = screen.getByRole("button", { name: /entrar/i });

    expect(quemSomosLink).toBeInTheDocument();
    expect(ajudaLink).toBeInTheDocument();
    expect(entrarButton).toBeInTheDocument();
  });

  it("links should navigate to correct paths", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Verifica os links (href) corretos
    const quemSomosLink = screen.getByRole("link", { name: /quem somos/i });
    const ajudaLink = screen.getByRole("link", { name: /ajuda/i });
    
    expect(quemSomosLink).toHaveAttribute("href", "/about_us");
    expect(ajudaLink).toHaveAttribute("href", "/help");
  });

  it("should render the Login button with arrow icon", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Verifica se o botão "Entrar" está renderizado com o ícone
    const entrarButton = screen.getByRole("button", { name: /entrar/i });
    const arrowIcon = screen.getByRole("img", { name: /seta para baixo/i }); // Ajuste o alt se necessário

    expect(entrarButton).toBeInTheDocument();
    expect(arrowIcon).toBeInTheDocument();
  });
});
