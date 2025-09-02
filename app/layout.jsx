import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Enduramale",
  description: "Enduramale - Natural Supplements",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
