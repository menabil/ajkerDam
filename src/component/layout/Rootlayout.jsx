import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Rootlayout = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Rootlayout;
