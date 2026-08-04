import "./globals.css";
import Navbar from "./component/layout/navbar";
import Footer from "./component/layout/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
