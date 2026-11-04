import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lab Catarina Domingos | BackOffice",
  description: "BackOffice do laboratório de prótese dentária Lab Catarina Domingos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}
