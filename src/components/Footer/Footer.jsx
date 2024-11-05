import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <footer>
        <div className="my-5 text-center border-b pb-4"> 
          <h1 className="font-bold text-3xl my-2">Gadget Heaven</h1>
          <p>Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className="grid mx-5 md:grid-cols-2 my-10 lg:grid-cols-3 max-w-7xl lg:mx-auto">
            <ul>
              <li className="font-bold text-xl mb-3">Service</li>
              <li><Link to='/support'>Product Support</Link></li>
              <li><Link to='/order'>Order Tracking</Link></li>
              <li><Link to='/delivery'>Shipping & Delivery</Link></li>
              <li><Link to='/return'>Returns</Link></li>
            </ul>
            <ul>
              <li className="font-bold text-xl mb-3">Company</li>
              <li><Link to='/aboutus'>About Us</Link></li>
              <li><Link to='/careers'>Careers</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <ul>
              <li className="font-bold text-xl mb-3">Service</li>
              <li><Link to='/service'>Terms of Service</Link></li>
              <li><Link to='/privacy'>Privacy Policy</Link></li>
              <li><Link to='/policy'>Cookie Policy</Link></li>
            </ul>
        </div>
   </footer>
  );
};

export default Footer;
