import React from 'react';
// import animation
import animationData from '../../../../public/playing-video-games.json'
import animationData2 from '../../../../public/galaxy-upload.json'
import animationData3 from '../../../../public/moving-galaxy.json'
import scroll from '../../../../public/scroll.json'
import Lottie from 'lottie-react-web';
import mainAnimation from '../../../assets/mobile-frame_1.gif'
import controllGame from '../../../../public/game-controler.json'
import controllGame2 from '../../../../public/speed-up-the-game.json'
const Banner = () => {
    return (
        <div className='mb-[450px]'>

            <div className='flex flex-col-reverse items-center md:flex-row justify-center mx-auto z-10'>
                <div className='max-w-[600px] lg:pl-20 space-y-4'>
                    <h1 className='text-4xl fontB'>Discover the Perfect Video Games Toys to Fuel Your Gaming Obsession!</h1>
                    <p className='fontA'>Game Toys Galore - Your Ultimate Destination for Video Game Collectibles! Explore our vast selection of video game toys and accessories. From action figures to keychains, we've got it all. Level up your collection and bring your favorite gaming characters to life. Shop now and embark on an epic gaming adventure!</p>

                    <div className="h-[150px] absolute">
                        {/* video player */}
                        <Lottie
                            options={{
                                animationData: animationData2,
                                loop: true,
                                autoplay: true,
                            }}
                        />
                    </div>
                </div>
                <div >

                    <img className='h-[500px]' src={mainAnimation} alt="" />
                </div>
            </div>
            <div className='absolute top-0 left-0 -z-10'>
                {/* Circle animation galaxy */}
                <Lottie
                    options={{
                        animationData: animationData3,
                        loop: true,
                        autoplay: true,
                    }}
                />
            </div>
            <div className='absolute bottom-7 right-3 -z-10 h-[150px]'>
                {/* Circle animation galaxy */}
                <Lottie
                    options={{
                        animationData: controllGame,
                        loop: true,
                        autoplay: true,
                    }}
                />
            </div>
            <div className='absolute top-1/2 left-10 -z-10 h-[150px]'>
                {/* Circle animation galaxy */}
                <Lottie
                    options={{
                        animationData: controllGame2,
                        loop: true,
                        autoplay: true,
                    }}
                />
            </div>
            <a href='#gallery' className='h-[150px] absolute bottom-2  left-1/2 -translate-x-1/2'>
                {/* Scrollbar */}
                <Lottie
                    options={{
                        animationData: scroll,
                        loop: true,
                        autoplay: true,
                    }}
                />
            </a>
        </div>
    );
};

export default Banner;