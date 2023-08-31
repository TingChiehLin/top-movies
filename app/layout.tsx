import "./globals.css";
import { Lato } from "next/font/google";

import HomeContainer from "@/layouts/HomeContainer/HomeContainer";
import Footer from "@/layouts/Footer";
import NavigationBar from "@/layouts/NavigationBar/";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Top Movies",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} tracking-wider leading-loose text-slate-700 h-screen flex flex-col`}
      >
        <HomeContainer>
          <NavigationBar />
          <main className="w-full h-auto flex-1 bg-slate-100">{children}</main>
          <Footer />
        </HomeContainer>
      </body>
    </html>
  );
}
