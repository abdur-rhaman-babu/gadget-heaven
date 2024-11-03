import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="h-20">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-5 lg:mx-auto min-h-[calc(100vh-300px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
