import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { createContext, useState } from "react";
import { Bars } from "react-loader-spinner";
export const CartContext = createContext();
export const WishlisContext = createContext();
export const CostContext = createContext();
const MainLayout = () => {
  const [carts, setCarts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cost, setCost] = useState(0);
  const navigation = useNavigation();
  return (
    <CartContext.Provider value={{ carts, setCarts }}>
      <WishlisContext.Provider value={{ wishlist, setWishlist }}>
        <CostContext.Provider value={{ cost, setCost }}>
          <div>
            <div className="h-[70px]">
              <Navbar />
            </div>
            {navigation.state === "loading" ? (
              <div className="flex items-center justify-center">
                <Bars
                  height="80"
                  width="80"
                  color="#9538e2"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : (
              <div className="max-w-7xl mx-5 lg:mx-auto min-h-[calc(100vh-402px)]">
                <Outlet />
              </div>
            )}
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
