import React from 'react';
import Lottie from 'lottie-react-web';
import animationData from '../../../public/astronauta.json';
import animationData2 from '../../../public/moving-galaxy.json';
import { Link, useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    const { data, status, statusText } = useRouteError()
    return (
        <div className='mx-auto  absolute top-10 lg:-top-32'>
            <Lottie className=""
                options={{
                    animationData: animationData2,
                    loop: true,
                    autoplay: true,
                }}
            />
            <div className=' w-screen h-[calc(100vh-400px)] absolute top-1/2  -translate-y-1/2 mx-auto text-center text-white' >


                <Lottie className=""
                    options={{
                        animationData: animationData,
                        loop: true,
                        autoplay: true,
                    }}
                />
                <h1 className='text-8xl fontB -mt-8'>{status}</h1>
                <h4 className='fontA'>{data || statusText}</h4>
                <hr className='max-w-[450px] w-[90%] border-gray-600 mx-auto my-4' />
                {/* Button */}

                <Link to={'/'} className='btn btn-outline btn-[#fff] rounded-full px-10 text-xl font-semibold uppercase'>BACK TO HOME</Link>
            </div >
        </div>
    );
};

export default ErrorPage;