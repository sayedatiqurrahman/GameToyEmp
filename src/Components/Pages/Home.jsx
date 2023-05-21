import React, { useContext, useEffect } from 'react';
import Banner from '../Shared/Home/Banner';
import Gallery from '../Shared/Home/Gallery';
import Charecter from '../../assets/mobile-frame_1.gif'
import ShopByCategory from '../Shared/Home/ShopByCategory';
import gostAni from '../../assets/image03.gif';
import { useNavigation } from 'react-router-dom';
import Loading from './Loading';
import { AuthContext } from '../Provider/AuthProvider';
import Company from '../Shared/Home/Company';
import Contact from '../Shared/Home/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    AOS.init({
        duration: 1200,
    })
    useEffect(() => {
        document.title = 'GameToyEmporium || Home'
    }, [])
    const { user, loading } = useContext(AuthContext)
    const navigation = useNavigation()
    if (navigation.state === 'loading' || loading) {
        return <Loading />

    }

    return (
        <div>
            {/* Header banner */}
            <Banner />
            <div className='relative' >
                <img id='gallery' className='hidden md:block h-96 absolute -top-[290px] lg:-top-[210px] right-20 -z-10' src={Charecter} alt="" />
            </div>
            {/* Gallery section */}
            <div className=' pt-[100px] text-center font-semibold fontA text-3xl space-y-5 '>
                <h1 className='CustomDrop'>Explore Our Gallery Trending Video Games Toys</h1>
                <Gallery />
            </div>


            <div className='flex flex-wrap justify-center gap-6 '>
                <img className='hidden md:block h-[300px] -ml-36 -mt-48' src={gostAni} alt="" />
                <h1 className='fontA text-4xl  '>Find Your Favorite Toys</h1>
            </div>
            <div className='my-[130px]'>
                <ShopByCategory />
            </div>
            <div data-aos="fade-down" className='my-[130px]'>
                <h1 className='fontA text-center text-4xl  mb-10'>Sponsored Company</h1>
                <Company />
            </div>

            <div className='my-[130px]' data-aos="fade-up">
                <h1 className='fontA text-center text-4xl mb-10 '>Contact Us</h1>
                <Contact />
            </div>

        </div>
    );
};

export default Home;