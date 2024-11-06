import { useLoaderData } from 'react-router-dom';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from 'recharts';
const Statistics = () => {
  const products = useLoaderData()
  // console.log(products)
 
  return (
    <div>
     <div className="text-center bg-[#9538e2] text-white py-5">
        <h1 className="font-bold text-3xl">Statistics</h1>
        <p className="my-2 lg:px-48 px-5">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
      <h1 className="font-bold text-2xl my-5">Statistics</h1>
        <ComposedChart
          width={1000}
          height={500}
          data={products.slice(0,6)}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="product_title" scale="band" />
          <YAxis dataKey='price' />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="price" barSize={20} fill="#413ea0" />
        </ComposedChart>
    </div>
  );
};

export default Statistics;
