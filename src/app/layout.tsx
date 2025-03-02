import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./provider";

export const metadata: Metadata = {
  title: "Irfanul Madar's Portfolio",
  description: "Irfanul Madar's portfolio website using  Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // system
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
