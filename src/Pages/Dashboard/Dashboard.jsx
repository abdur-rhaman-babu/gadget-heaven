import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  CartContext,
  CostContext,
  WishlisContext,
} from "../../components/MainLayout/MainLayout";
import Cart from "../../components/Cart/Cart";
import Wishlist from "../../components/Wishlist/Wishlist";
import { GrSort } from "react-icons/gr";

const Dashboard = () => {
  const { carts, setCarts } = useContext(CartContext);
  const { wishlist, setWishlist } = useContext(WishlisContext);
  const {cost,setCost} = useContext(CostContext)

  const handleRemoveFromCart = (id,price) => {
    const remaining = carts.filter((cart) => cart.product_id !== id);
    setCarts(remaining)
    setCost(cost - parseFloat(price))
  };

  const handleRemoveFromWishlist = (id) => {
    const remaining = wishlist.filter((cart) => cart.product_id !== id);
    setWishlist(remaining);
  };


    const handleSortByPrice = () =>{
      console.log('price')
      const sortByPrice = [...carts].sort((a,b)=> a.price - b.price)
      setCarts(sortByPrice)
    }

  

  return (
    <div className="-z-50">
      <div className="text-center">
        <Tabs>
          <TabList>
            <Tab>Cart</Tab>
            <Tab>Wishlist</Tab>
          </TabList>

          <TabPanel>
            <div>
              <div className="lg:flex items-center justify-between">
                <p className="font-bold text-xl">Cart</p>
                <div className="md:flex items-center gap-5">
                  <p className="font-bold text-base">Total cost: {cost}</p>
                  <button onClick={handleSortByPrice} className="flex items-center gap-2 px-5 py-2 rounded-full font-semibold border border-[#9538e2] text-[#9538e2]">
                    Sort by price{" "}
                    <i>
                      <GrSort />
                    </i>
                  </button>
                  <button className="bg-[#9538E2] py-2 px-4 rounded-full text-white">
                    Purchase
                  </button>
                </div>
              </div>
              <div className="space-y-5 my-5">
                {carts.map((cart) => (
                  <Cart
                    key={cart.product_id}
                    product={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="space-y-5 mt-5">
              {wishlist.map((cart) => (
                <Wishlist
                  key={cart.product_id}
                  product={cart}
                  handleRemoveFromWishlist={handleRemoveFromWishlist}
                />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
