import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      <Banner />
      <div className="text-center">
        <h1 className="text-4xl my-5 font-bold text-[#0B0B0B]">
          Explore Cutting-Edge Gadgets
        </h1>

        <div className="lg:flex gap-5 justify-center">
          <div>
              <Categories categories={categories}/>
          </div>
          <div>
              <Outlet/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
