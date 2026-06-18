import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "My Fan Page",
  description: "A page about the things I love.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <Nav />
        {children}
        <footer style={{ marginTop: "3rem", textAlign: "center" }}>
          Built with Next.js 💙
        </footer>
      </body>
    </html>
  );
}
