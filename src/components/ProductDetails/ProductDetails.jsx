import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useContext, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { IoHeartOutline } from "react-icons/io5";
import { FaRegTimesCircle } from "react-icons/fa";
import {
  CartContext,
  CostContext,
  WishlisContext,
} from "../MainLayout/MainLayout";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { cost, setCost } = useContext(CostContext);
  const { carts, setCarts } = useContext(CartContext);
  const { wishlist, setWishlist } = useContext(WishlisContext);
  const [star, setStar] = useState("");
  const { productId } = useParams();
  const id = parseInt(productId);
  const products = useLoaderData();
  const product = products.find((product) => product.product_id === id);
  const navigate = useNavigate();

  const {
    availability,
    description,
    other_fields,
    price,
    product_image,
    product_title,
    specifications,
  } = product;

  const ratingChanged = (rating) => {
    setStar(rating);
  };

  const isExsits = carts.find(
    (cart) => cart.product_id === product.product_id
  );
  const handleAddToCart = (product, price) => {

    if (isExsits) {
      toast.error("already added");
      disable = true
    } else {
      setCarts([...carts, product]);
      setCost(cost + parseFloat(price));
      toast.success("successfully added");
    }
  };

  const isExsit = wishlist.find(
    (cart) => cart.product_id === product.product_id
  );
  const handleAddToWishlist = (product, price) => {
    if (isExsit) {
      toast.error("already added");
      disable = true
    } else {
      setWishlist([...wishlist, product]);
      toast.success("successfully added");
    }
  };

  return (
    <div>
      <div className="bg-[#9538E2] py-5 text-white text-center rounded-b-lg">
        <h2 className="font-bold text-4xl my-3">Product Details</h2>
        <p className="mb-40 lg:px-56">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="lg:flex p-5 items-center gap-5 bg-white -mt-36 mb-10 rounded-lg max-w-4xl mx-auto">
        <div>
          <img
            className="bg-white border rounded-lg p-5 lg:h-[420px]"
            src={product_image}
            alt=""
          />
        </div>
        <div>
          <div className="flex justify-between gap-16">
            <h3 className="font-bold text-2xl">{product_title}</h3>
            <i onClick={() => navigate(-1)} className="cursor-pointer">
              <FaRegTimesCircle size={35} />
            </i>
          </div>
          <p>Price: ${price}</p>
          <p className={`my-2 inline-block 
            ${availability ? 'border-[#309C08] text-[#309C08]' :'text-red-700 border-red-700'}
            border-2 py-2 px-4 rounded-full`}>
            {availability ? "In Stock" : "Out of stock"}
          </p>
          <p>{description}</p>
          <div className="lg:flex gap-5 justify-between mt-3">
            <div>
              <span className="font-bold">Specifications:</span>
              {specifications.map((specify, i) => (
                <ul key={i} className="flex gap-2">
                  <li className="font-bold">{specify.specification_name}:</li>
                  <li>{specify.specification_value}</li>
                </ul>
              ))}
            </div>
            <div>
              <span className="font-bold">Other Field</span>
              <ol>
                <li>
                  <span className="font-bold">Brand:</span> {other_fields.brand}
                </li>
                <li>
                  <span className="font-bold">Color:</span> {other_fields.color}
                </li>
                <li>
                  <span className="font-bold">Dimensions:</span>{" "}
                  {other_fields.dimensions}
                </li>
                <li>
                  <span className="font-bold">Warrenty:</span>{" "}
                  {other_fields.warranty}
                </li>
              </ol>
            </div>
          </div>
          <div>
            <p className="font-bold">
              Rating: <span className="text-3xl"> ■</span>
            </p>
            <div className="font-medium text-base flex items-center gap-3">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={30}
                activeColor="#ffd700"
              />
              <p className="bg-gray-300 px-2 rounded-full">{star}</p>
            </div>
          </div>
          <div className="flex gap-5 my-4 ">
            <button disabled = {isExsits}
              onClick={() => handleAddToCart(product, price)}
              className={`flex bg-[#9538E2]
                ${isExsits && 'bg-slate-300'}
                items-center rounded-full px-5 gap-2`}
            >
              <p className="font-bold text-white">Add To Cart</p>
              <TiShoppingCart className="text-white " size={25} />
            </button>

            <button disabled = {isExsit}
              onClick={() => handleAddToWishlist(product)}
              className={`border
                ${isExsit && 'bg-slate-100 text-gray-300'}
                p-2 rounded-full`}
            >
              <IoHeartOutline size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
