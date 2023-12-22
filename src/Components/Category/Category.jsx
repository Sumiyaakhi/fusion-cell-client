import React from "react";
import img1 from '../../assets/images/Google.jpg'
import img2 from '../../assets/images/iPhone.jpg'
import img3 from '../../assets/images/Huwawei.jpg'
import img4 from '../../assets/images/Samsung.jpg'
import { Link } from "react-router-dom";
const Category = () => {
  

  return (
    <div className="pt-20 ">
     <h1 className="text-xl md:text-4xl text-center font-bold pb-10">Let's introduce some amazing brands category!</h1>
     
     <div>
{/* IPhone */}
  <div className="hero-content flex-col lg:flex-row">
    <img src={img2} className="max-w-3xl rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold ps-8">Brand Name: Apple</h1>
      <p className="py-6 ps-8">The iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates.</p>
      <button className="btn btn-outline mt-5 border-0 border-b-4  text-xl font-serif ms-8">Learn More</button>
    </div>
  </div>
 
 {/* Samsung */}
 <div className="grid grid-cols-1 md:grid-cols-2">
  <div>
  <h1 className="text-4xl font-bold ps-8 mt-12">Brand Name: Samsung</h1>
  <p className="py-6 ps-8">Samsung, South Korean company that is one of the world's largest producers of electronic devices. Samsung specializes in the production of a wide variety of consumer and industry electronics, including appliances, digital media devices, semiconductors, memory chips, and integrated systems.</p>
  <button className="btn btn-outline mt-5 border-0 border-b-4  text-xl font-serif ms-8">Learn More</button>
  </div>
 <img className="w-[768px] h-[432px]  rounded-lg shadow-2xl" src={img4} alt="" />

 </div>
 <div className="hero-content flex-col lg:flex-row">
    <img className="w-[768px] h-[432px]  rounded-lg shadow-2xl" src={img3}  />
    <div>
      <h1 className="text-4xl font-bold ps-8">Brand Name: Huwaei</h1>
      <p className="py-6 ps-8">With the continuous evolution of smart devices, a seamless experience across all scenarios will become the foundation of an intelligent life. Using AI, cloud, and big data technologies, businesses can better understand their customers’ needs and innovate with greater agility to craft a more personalized experience. Coordination and collaboration across industries will drive innovation at scale.</p>
      <button className="btn btn-outline mt-5 border-0 border-b-4  text-xl font-serif ms-8">Learn More</button>
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2">
  <div>
  <h1 className="text-4xl font-bold ps-8 mt-12">Brand Name: Google</h1>
  <p className="py-6 ps-8">Google Pixel is a brand of portable consumer electronic devices developed by Google that run either ChromeOS or the Android operating system.Google's Pixel phones are known for their quality cameras and distinctive designs, but it's the software that really sets them apart from other Android phones.</p>
  <Link to=''><button className="btn btn-outline mt-5 border-0 border-b-4  text-xl font-serif ms-8">Learn More</button></Link>
  </div>
 <img className="w-[768px] h-[432px]  rounded-lg shadow-2xl" src={img1} alt="" />

 </div>
</div>
     </div>
   
  );
};

export default Category;
