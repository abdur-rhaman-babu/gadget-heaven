import { Link, NavLink, useParams } from "react-router-dom";

const Categories = ({ categories }) => {

  return (
    <div className="grid grid-cols-2 mb-4 lg:mb-0 md:grid-cols-4 lg:flex flex-col gap-5 bg-gray-200 py-5 rounded-lg">
      <NavLink className={({isActive})=> `${isActive ? 'bg-[#9538e2] py-1 text-white' : ""}`} to='/'><p className="text-base font-bold">All Product</p></NavLink>
      {categories.map((category) => (
        <NavLink className={({isActive})=> `${isActive ? 'bg-[#9538e2] py-1 text-white' : ""}`} key={category.category} to= {`/categories/${category.category}`}>
          <p className="text-base font-bold">{category.category}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
