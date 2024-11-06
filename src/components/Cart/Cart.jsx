import { TiDeleteOutline } from "react-icons/ti";
import Dynamictitle from "../DynamicTitle/Dynamictitle";
const Cart = ({ product, handleRemoveFromCart }) => {
  const { product_image, product_title, price, product_id, description } =
    product;

  return (
    <div className="md:flex gap-5 border p-5 rounded-lg text-left bg-gray-100 relative">
      <img
        className=" bg-white lg:px-16 lg:py-10 rounded-lg h-48 w-full lg:w-2/6"
        src={product_image}
        alt=""
      />
      <div className="">
        <h3 className="font-bold text-xl mt-5">{product_title}</h3>
        <p className="mt-5">{description}</p>
        <p className="font-medium text-gray-500 mt-2">Price: ${price}</p>
      </div>
      <button
        onClick={() => handleRemoveFromCart(product_id, price)}
        className="absolute top-4 right-4"
      >
        <TiDeleteOutline size={25} />
      </button>
      <Dynamictitle title='dashboard-cart'/>
    </div>
  );
};

export default Cart;
