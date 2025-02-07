import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spider-Verse",
  description:
    "Criando um parallax do Aranhaverso com React, Next.js e Framer Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="relative text-white max-w-screen overflow-hidden">
        <header className="flex justify-between items-center mt-12 mr-12 ml-12 mb-0 relative z-4">
          <Image
            src="/icons/menu.svg"
            alt="Opçoes de Menu"
            width={36}
            height={25}
          />
          <Image
            src="/spider-logo.svg"
            alt="Spiderman"
            width={260}
            height={70}
          />
          <Image
            src="/icons/user.svg"
            alt="login-button"
            width={36}
            height={36}
          />
        </header>
        {children}
      </body>
    </html>
  );
}
