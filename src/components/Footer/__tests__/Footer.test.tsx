import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "../footer";

describe("Footer Component", () => {
  it("deve renderizar o logotipo da Lacrei Saúde", () => {
    render(<Footer />);
    
    const logo = screen.getByRole("img", { name: /logotipo da lacrei/i }); 
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "https://lacreisaude.com.br/_next/static/media/global-logo.e41aea7b.svg");
  });

  it("deve exibir os links das redes sociais", () => {
    render(<Footer />);
    
    const facebookLink = screen.getByRole("link", { name: /Facebook da Lacrei/i }); 
    const instagramLink = screen.getByRole("link", { name: /Instagram da Lacrei/i });
    const linkedinLink = screen.getByRole("link", { name: /Linkedin da Lacrei/i });
    const emailLink = screen.getByRole("link", { name: /Email da Lacrei/i });

    expect(facebookLink).toHaveAttribute("href", "https://www.facebook.com/lacrei.saude/");
    expect(instagramLink).toHaveAttribute("href", "https://www.instagram.com/lacrei.saude/#");
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/company/lacrei-saude/posts/?feedView=all"); 
    expect(emailLink).toHaveAttribute("href", "mailto:contato@lacreisaude.com.br");
  });

  it("deve exibir as seções de links", () => {
    render(<Footer />);

    expect(screen.getByText("Lacrei Saúde")).toBeInTheDocument();
    expect(screen.getByText("Saúde")).toBeInTheDocument();
    expect(screen.getByText("Segurança e Privacidade")).toBeInTheDocument();
  });

  it("deve exibir a mensagem de direitos autorais", () => {
    render(<Footer />);

    expect(screen.getByText(/Copyright © 2024 Lacrei Saúde/)).toBeInTheDocument();
  });
});
