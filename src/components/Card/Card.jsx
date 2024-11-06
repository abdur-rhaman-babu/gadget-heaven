import { Link } from "react-router-dom";
const Card = ({ product }) => {
  const { product_image, product_title, price, product_id } = product;
  // console.log(product);
  return (
    <div className="border p-5 rounded-lg text-left bg-gray-100">
      <img
        className="mx-auto bg-white px-16 py-10 rounded-lg h-56 w-full"
        src={product_image}
        alt=""
      />
      <h3 className="font-bold text-xl mt-5">{product_title}</h3>
      <p className="font-medium text-gray-500 mt-2">Price: ${price}</p>
      <Link to={`/product/${product_id}`}>
        <button className="py-3 px-5 rounded-full border border-[#9538E2] text-[#9538E2] font-semibold mt-2">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Card;
