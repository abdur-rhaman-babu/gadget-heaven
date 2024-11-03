import banner from '../../assets/image/banner.jpg'
const Banner = () => {
  return (
   <div>
     <div className="bg-[#9538E2] bg-cover rounded-b-2xl -z-50 bg-center text-center text-white pt-5 px-32">
      <h1 className="md:text-5xl text-3xl font-bold text-center my-5">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="px-48 text-center my-5">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="text-xl mb-48 font-bold bg-white text-[#9538E2] py-3 px-5 rounded-full">Shop Now</button>
    </div>
      <img className='h-[400px] w-[700px] mx-auto -mt-36 mb-10 rounded-2xl bg-[rgba(255,255,255,0.3)] p-4 border border-white' src={banner} alt="" />
   </div>
  );
};

export default Banner;
