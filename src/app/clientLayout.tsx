"use client";

import { Header } from "@/components/Header/header";
import { Footer } from "@/components/Footer/footer";
import { usePathname } from "next/navigation";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  const pathname = usePathname();
  const hideHeaderFooter = pathname === "/patient" || pathname === "/professional";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default ClientLayout;
