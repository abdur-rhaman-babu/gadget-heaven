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
import { toast } from "react-toastify";

const Dashboard = () => {
  const { carts, setCarts } = useContext(CartContext);
  const { wishlist, setWishlist } = useContext(WishlisContext);
  const {cost,setCost} = useContext(CostContext)

  const handleRemoveFromCart = (id,price) => {
    const remaining = carts.filter((cart) => cart.product_id !== id);
    setCarts(remaining)
    setCost(cost - parseFloat(price))
    toast.success('Successfully deleted')
  };

  const handleRemoveFromWishlist = (id) => {
    const remaining = wishlist.filter((cart) => cart.product_id !== id);
    setWishlist(remaining);
    toast.success('Successfully deleted')
  };


    const handleSortByPrice = () =>{
      const sortByPrice = [...carts].sort((a,b)=> a.price - b.price)
      setCarts(sortByPrice)
    }

  

  return (
    <div className="-z-50">
      <div className="text-center bg-[#9538e2] text-white py-5">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <p className="my-2 lg:px-48 px-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
      <div className="text-center">
        <Tabs>
          <div className="bg-[#9538e2] text-white">
          <TabList>
            <Tab>Cart</Tab>
            <Tab>Wishlist</Tab>
          </TabList>
          </div>

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
          <p className="font-bold text-xl text-left">Wishlist</p>
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
