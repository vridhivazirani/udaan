import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UDAAN — Every Child Deserves to Fly",
  description: "Bridging the education and opportunity gap for rural students through mentorship and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full selection:bg-rust selection:text-white">
        <main className="relative flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
