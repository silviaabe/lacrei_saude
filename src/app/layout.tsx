import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";

const nunito = Nunito({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lacrei Saúde",
  description: "Saúde inclusiva para todos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={nunito.className}>
        <Header />
        {children} {/* Agora cada página renderiza seu próprio conteúdo */}
        <Footer />
      </body>
    </html>
  );
}
