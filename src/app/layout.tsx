import { Nunito } from "next/font/google";
import ClientLayout from "./clientLayout";
import "./globals.css";

const nunito = Nunito({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Lacrei Saúde",
  icons: "/favicon.ico",
  description: "Saúde inclusiva para todos",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <body className={nunito.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
