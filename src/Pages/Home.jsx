import React from 'react';
import Banner from '../Components/Shared/Home/Banner';
import Gallery from '../Components/Shared/Home/Gallery';
import Charecter from '../assets/mobile-frame_1.gif'
import ShopByCategory from '../Components/Shared/Home/ShopByCategory';
import gostAni from '../assets/image03.gif';

const Home = () => {
    return (
        <div>
            {/* Header banner */}
            <Banner />
            <div className='relative' >
                <img id='gallery' className='h-96 absolute -top-[290px] lg:-top-[210px] right-20 -z-10' src={Charecter} alt="" />
            </div>
            {/* Gallery section */}
            <div className=' pt-[100px] text-center font-semibold fontA text-3xl space-y-5 '>
                <h1 className='CustomDrop'>Explore Our Gallery Trending Video Games Toys</h1>
                <Gallery />
            </div>


            <div className='flex flex-wrap justify-center gap-6 '>
            <img className='h-[300px] -ml-36 -mt-48' src={gostAni} alt="" />
            <h1 className='fontA text-4xl  '>Find Your Favorite Toys</h1>
           </div>
            <div className='mt-130px'>
                <ShopByCategory />
            </div>
        </div>
    );
};

export default Home;