import React from 'react';
import { FaMobileScreen } from "react-icons/fa6";

const Home = () => {
    const backgroundImageStyle = {
        backgroundImage: 'url("https://i.ibb.co/rcr15hc/seller-man-mobile-phone-professional-consultant-tech-store-shop.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Set the height according to your design
        // You can add more styles as needed
    };

    return (
        <div style={backgroundImageStyle}>
            <h1 className='text-5xl font-serif font-bold lg:pt-64 ps-10'>Click the best offer !!</h1>
            <div className='flex items-center'>
            <h1 className='text-3xl ps-10 font-serif font-semibold pe-2'>From Fusion Cell Phone Shop </h1>
           <div> <FaMobileScreen className='h-8 '></FaMobileScreen></div>
            </div>
            <div>
            <button className="btn btn-outline mt-5 border-0 border-b-4 text-xl font-serif ms-36">Shop Now</button>
            <button className="btn btn-outline mt-5 border-0 border-l-4 border-r-4 text-xl font-serif ms-8">Learn More</button>
            </div>
            
        </div>
    );
};

export default Home;
