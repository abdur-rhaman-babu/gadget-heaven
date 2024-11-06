import service_banner from '../../assets/image/service banner.webp'
import repair from '../../assets/image/laptop.png'
import build from '../../assets/image/dextop.png'
import upgrade from '../../assets/image/motherboard.png'
import support from '../../assets/image/support.png'
const Service = () => {
  return (
    <div>
      <div className="text-center bg-[#9538e2] text-white py-5">
        <h1 className="font-bold text-3xl">Service which you want</h1>
        <p className="my-2 lg:px-48 px-5">
          You can get any service for your divice issue. Happy nice service that is waiting for you. Every service will be neat and clean by our skilled persons.
        </p>
      </div>
      <div className='bg-gray-200'>
      <div className="lg:flex items-center gap-5 lg:p-10 rounded-2xl justify-between my-5">
        <div className="bg-white mb-5 md:mb-0 lg:p-10 rounded-2xl space-y-7 lg:w-5/12">
            <h1 className="font-bold text-gray-500 text-2xl">Gadget Service Center</h1>
            <h3 className="font-bold text-5xl">Every electric divice Repair,Builds,and Support</h3>
            <div className="flex items-center gap-3">
                <button className="py-2 px-5 bg-[#9538e2] rounded-lg font-bold text-white">SHCEDULE NOW</button>
                <button className="py-2 px-5 bg-black rounded-lg font-bold text-white">CHACK STATUS</button>
            </div>
        </div>
        <img className='lg:w-7/12 rounded-2xl h-[400px]' src={service_banner} alt="" />
      </div>
      <div className='lg:flex items-center justify-between gap-5 lg:p-10'>
            <div className='lg:w-5/12'>
                <h1 className='font-medium text-3xl mb-5'>Our Service</h1>
                <p>Our OEM and A+ Certified Technicians can help with any computer repair or service need. Repairs are completed in each store, giving you peace of mind and a quick turnaround. Walk-ins are welcome at any one of our nationwide locations, or schedule a service appointment.</p>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-5 items-center lg:w-7/12'>
                <div className='text-center'>
                    <img className='w-96 h-56' src={repair} alt="" />
                    <p className='text-blue-600 font-semibold'>Repair</p>
                </div>
                <div className='text-center'>
                    <img className='w-64 h-56' src={build} alt="" />
                    <p className='text-blue-600 font-semibold'>Build</p>
                </div>
                <div className='text-center'>
                    <img className='w-64 h-56' src={upgrade} alt="" />
                    <p className='text-blue-600 font-semibold'>Upgrade</p>
                </div>
                <div className='text-center'>
                    <img className='w-96 h-56' src={support} alt="" />
                    <p className='text-blue-600 font-semibold'>Repair</p>
                </div>
            </div>
      </div>
      <div>
        <h1 className='font-bold text-3xl lg:p-10'>Feature Service</h1>
            <div className='grid md:grid-cols-2 gap-5 lg:grid-cols-4 lg:p-10 p-5'>
                <div className='p-5 bg-white rounded-lg space-y-5 text-center flex flex-col'>
                    <img className='mx-auto w-full h-48' src='https://i.postimg.cc/02Jn5sjz/computer.jpg' alt="" />
                    <h3 className='font-bold text-xl'>Comprehensive Computer Diagnostic</h3>
                    <p className='flex-grow'>Our expert technicians can assist you in troubleshooting the problem to determine how best to fix your device.</p>
                    <button className="py-2 px-5 bg-[#9538e2] rounded-lg font-bold text-white">SHCEDULE NOW</button>
                </div>
                <div className='p-5 bg-white rounded-lg space-y-5 text-center flex flex-col'>
                    <img className='mx-auto w-full h-48' src='https://i.postimg.cc/T2sQXwd8/free.jpg' alt="" />
                    <h3 className='font-bold text-xl'>Free Consultation</h3>
                    <p className='flex-grow'>Our free consultations are designed to help you better understand what's going on with your computer and offer some options for moving forward.</p>
                    <button className="py-2 px-5 bg-[#9538e2] rounded-lg font-bold text-white">SHCEDULE NOW</button>
                </div>
                <div className='p-5 bg-white rounded-lg space-y-5 text-center flex flex-col'>
                    <img className='mx-auto w-full h-48' src='https://i.postimg.cc/YCK3hsLb/screen.jpg' alt="" />
                    <h3 className='font-bold text-xl'>Laptop Screen Replacement</h3>
                    <p className='flex-grow'>We will remove the damaged laptop screen, install the new one, and perform multiple tests to make sure everything is working as it should.</p>
                    <button className="py-2 px-5 bg-[#9538e2] rounded-lg font-bold text-white">SHCEDULE NOW</button>
                </div>
                <div className='p-5 bg-white rounded-lg space-y-5 text-center flex flex-col'>
                    <img className='mx-auto w-full h-48' src='https://i.postimg.cc/2ygxdHcj/battary.webp' alt="" />
                    <h3 className='font-bold text-xl'>Laptop Battery Replacement</h3>
                    <p>Our expert A+ and OEM certified service technicians can install an internal laptop battery for you the same-day if we have your battery in stock</p>
                    <button className="py-2 px-5 bg-[#9538e2] rounded-lg font-bold text-white">SHCEDULE NOW</button>
                </div>
                
            </div>
      </div>
      </div>
    </div>
  );
};

export default Service;
