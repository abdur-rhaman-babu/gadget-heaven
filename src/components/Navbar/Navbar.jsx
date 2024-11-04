import { Link, NavLink, useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  const { pathname } = location;
  console.log(pathname);

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
        : "bg-white text-black"
    }
    fixed left-0 right-0 top-0`}
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
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <i className="py-2 px-2 border rounded-full text-black bg-white">
          <GiShoppingCart />
        </i>
        <i className="py-2 px-2 border rounded-full text-black bg-white">
          <FaRegHeart />
        </i>
      </div>
    </div>
  );
};

export default Navbar;
