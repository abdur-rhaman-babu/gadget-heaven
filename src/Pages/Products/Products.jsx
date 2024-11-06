import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { useLoaderData, useParams } from "react-router-dom";
import Dynamictitle from './../../components/DynamicTitle/Dynamictitle';

const Products = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  const { category } = useParams();

  useEffect(() => {
    if(category){
      const divideByCategory = [...data].filter(
        (product) => product.category === category);
        setProducts(divideByCategory);
    }else{
      setProducts(data)
    }
  }, [data, category]);

  return (
    <div>
      <h1 className="font-bold text-2xl bg-gray-200 py-3 rounded-lg">
        {category ? category : 'All Product'}
        </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {products.map((product) => (
          <Card key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
