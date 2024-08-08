
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Psicóloga Italina Vinuto",
  description: "Pisicóloga em Fortaleza, Ceará. Italina Vinuto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-[#F2F2F2] text-black">{children}</body>
    </html>
  );
}
