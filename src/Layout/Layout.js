import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between  gap-y-5">
      <Header />
      <div className="bg-zinc-200 p-5 rounded-lg">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
