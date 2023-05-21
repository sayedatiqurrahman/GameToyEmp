import React from 'react';
import Marquee from 'react-fast-marquee';

const Company = () => {
    return (
        <div>
            <Marquee>
                <img className='h-20 mr-5' src="https://i.ibb.co/hHs6Nj1/image.png" alt="" />
                <img className='h-20 mr-5' src="https://i.ibb.co/Y3JN2fZ/image.png" alt="" />
                <img className='h-20 mr-5' src="https://i.ibb.co/Mc4wsn5/image.png" alt="" />
                <img className='h-20 mr-5' src="https://i.ibb.co/18gSK37/image.png" alt="" />
                <img className='h-20 mr-5' src="https://i.ibb.co/k3xP84v/image.png" alt="" />
            </Marquee>
        </div>
    );
};

export default Company;