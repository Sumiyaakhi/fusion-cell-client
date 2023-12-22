import React from 'react';
import { FaMobileScreen } from "react-icons/fa6";
import Category from '../Category/Category';

const Home = () => {
    const backgroundImageStyle = {
        backgroundImage: 'url("https://i.ibb.co/rcr15hc/seller-man-mobile-phone-professional-consultant-tech-store-shop.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', 
    };

    return (
        <>
        <div style={backgroundImageStyle}>
            <h1 className='text-2xl lg:text-5xl md:text-4xl font-serif font-bold lg:pt-64 md:pt-56 pt-48 ps-3 lg:ps-10'>Click the best offer !!</h1>
            <div className='flex items-center'>
            <h1 className='text-xl md:text-2xl lg:text-3xl lg:ps-10 font-serif font-semibold ps-3 pe-2'>From Fusion Cell Phone </h1>
           <div> <FaMobileScreen className='h-8 '></FaMobileScreen></div>
            </div>
            <div>
            <button className="btn btn-outline mt-5 border-0 border-b-4 text-xl font-serif lg:ms-36">Shop Now</button>
            <button className="btn btn-outline mt-5 border-0 border-l-4 border-r-4 text-xl font-serif ms-8">Learn More</button>
            </div>
            <div>
                <input className='w-56 md:w-[450px] h-8 ms-5 md:ms-20 ps-3 rounded-xl mt-5 border-0 bg-opacity-50' type="search" placeholder='search any mobile here' name="" id="" />
            </div>
        </div>
        
        </>
    );
};

export default Home;
