import Header from "../components/Header";
import Footer from "../components/Footer";

type ReactComponentProps = {
  children: React.ReactNode;
};

const Layout: React.FC<ReactComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

