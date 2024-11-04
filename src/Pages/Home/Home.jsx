import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

const Home = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <Banner />
      <div className="text-center">
        <h1 className="text-4xl my-5 font-bold text-[#0B0B0B]">
          Explore Cutting-Edge Gadgets
        </h1>
        <div>
          <div></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {products.map((product) => (
              <Card key={product.product_id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
