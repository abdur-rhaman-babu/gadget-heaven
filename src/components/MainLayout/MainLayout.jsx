import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { createContext, useState } from "react";
export const CartContext = createContext();
export const WishlisContext = createContext();
export const CostContext = createContext();
const MainLayout = () => {
  const [carts, setCarts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cost, setCost] = useState(0);
  return (
    <CartContext.Provider value={{ carts, setCarts }}>
      <WishlisContext.Provider value={{ wishlist, setWishlist }}>
        <CostContext.Provider value={{cost, setCost}}>
          <div>
            <div className="h-20">
              <Navbar />
            </div>
            <div className="max-w-7xl mx-5 lg:mx-auto min-h-[calc(100vh-402px)]">
              <Outlet />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </CostContext.Provider>
      </WishlisContext.Provider>
    </CartContext.Provider>
  );
};

export default MainLayout;
