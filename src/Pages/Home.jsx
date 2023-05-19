import React from 'react';
import Banner from '../Components/Shared/Home/Banner';
import Gallery from '../Components/Shared/Home/Gallery';


const Home = () => {
    return (
        <div>
            {/* Header banner */}
            <Banner />

            {/* Gallery section */}

            <div className='mt-[200px] text-center font-semibold fontA text-3xl space-y-5'>
                <h1>Explore Our Gallery Trending Video Games Toys</h1>
                <Gallery />
            </div>
        </div>
    );
};

export default Home;