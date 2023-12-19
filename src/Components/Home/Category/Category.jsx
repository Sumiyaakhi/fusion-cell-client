import React from 'react';

const Category = () => {
    const mobileBrands = [
        {
            id: 1,
            brandName: "Apple",
            image: "https://i.ibb.co/K2ft8FY/l-intro-1650830667.jpg"
        },
        {
            id: 2,
            brandName: "Samsung",
            image: "https://i.ibb.co/tZtzdcw/samsung-image.jpg"
        },
        {
            id: 3,
            brandName: "Huawei",
            image: "https://i.ibb.co/936q7mf/images-1.jpg"
        },
        {
            id: 4,
            brandName: "Google",
            image: "https://i.ibb.co/y4kpbZQ/images.jpg"
        }
    ];
    
    return (
        <div className='mb-12'>
           <h1 className='text-center text-3xl font-bold py-3 font-serif'>Let's see some category</h1>
           <p className='text-center font-bold pb-5'>--------------------------------------------------------------------------------------</p>
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 lg:ms-20 md:ms-12'>
            {
                mobileBrands.map(singleBrand =>  <>
                <div 
                key="singleBrand.id"
                className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='w-full' src={singleBrand.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold ">{singleBrand.brandName} Brand Phone's</h2>
    <p className='text-xl'>Latest brands with latest item...!!!</p>
    <div className="card-actions justify-end">
    <button className="btn btn-outline mt-5 border-0 border-l-4 border-r-4 text-xl font-serif ms-8">See Shop</button>
    </div>
  </div>
</div></>
                    
                )
            }
           </div>
        </div>
    );
};

export default Category;