import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { titleFont, contentFont } from "./fonts";

export const metadata: Metadata = {
  title: "Gaëlle Perrin Clone",
  description: "A minimalist design for lifestyle creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${titleFont.variable} ${contentFont.variable}`} suppressHydrationWarning>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
