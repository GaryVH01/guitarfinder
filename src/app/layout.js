import { Kodchasan } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";

const kodchasan = Kodchasan({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Guitar Finder",
  description: "Fullstack application created with Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={kodchasan.className} suppressHydrationWarning={true}>
        <Header />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
