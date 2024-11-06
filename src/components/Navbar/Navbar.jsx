import { Link, NavLink, useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { useContext } from "react";
import { CartContext, WishlisContext } from "../MainLayout/MainLayout";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const {carts} = useContext(CartContext)
  const {wishlist} = useContext(WishlisContext)
  return (
    <div
      className={`navbar lg:px-16 
    ${
      pathname === "/" ||
      pathname === "/categories/Headphones" ||
      pathname === "/categories/Computers" ||
      pathname === "/categories/Phones" ||
      pathname === "/categories/Smart%20Watch" ||
      pathname === "/categories/Power%20Banks" ||
      pathname === "/categories/Chargers"
        ? "bg-[#9538E2] text-white"
        : "bg-white text-black shadow-lg"
    }
    fixed left-0 right-0 top-0 z-50`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content
          ${
            pathname === "/" ||
            pathname === "/categories/Headphones" ||
            pathname === "/categories/Computers" ||
            pathname === "/categories/Phones" ||
            pathname === "/categories/Smart%20Watch" ||
            pathname === "/categories/Power%20Banks" ||
            pathname === "/categories/Chargers"
              ? "bg-[#9538E2] text-white"
              : "bg-white text-black"
          }
         rounded-box z-[1] mt-3 w-52 p-2 shadow`}
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
          </ul>
        </div>
        <Link className="font-bold md:text-2xl">Gadget Heaven</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
              <NavLink to="/service">Service</NavLink>
            </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        
        <i className="py-2 relative px-2 border rounded-full text-black bg-white">
        <Link to='/dashboard'><GiShoppingCart /></Link> <p className="absolute -top-3 left-6 bg-black text-white px-2 rounded-full">{carts.length > 0 ? `${carts.length}` : ''}</p>
        </i>
       
        <i className="py-2 relative px-2 border rounded-full text-black bg-white">
          <FaRegHeart /> <p className="absolute -top-3 left-6 bg-black text-white px-2 rounded-full">{wishlist.length > 0 ? `${wishlist.length}` : ''}</p>
        </i>
      </div>
    </div>
  );
};

export default Navbar;
