import { Link, NavLink, useParams } from "react-router-dom";

const Categories = ({ categories }) => {
  // console.log(categories)

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:flex flex-col">
      {categories.map((category) => (
        <NavLink key={category.category} to= {`/categories/${category.category}`}>
          <p className="text-xl font-bold">{category.category}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
