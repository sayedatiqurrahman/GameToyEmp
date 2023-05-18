import React from 'react';
import Lottie from 'lottie-react-web';
import animationData from '../../public/404-page-blue-variation.json';
const ErrorPage = () => {
    return (
        <div className=' w-full h-screen overflow-y-hidden '>
            <Lottie className=" bg-cover h-full mx-auto border-2 border-white w-screen"
                options={{
                    animationData: animationData,
                    loop: true,
                    autoplay: true,
                }}
            />
        </div>
    );
};

export default ErrorPage;