import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
