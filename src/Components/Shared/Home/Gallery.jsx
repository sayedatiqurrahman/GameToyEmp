import React, { useEffect, useState } from 'react';
import SliderOfGallery from './SliderOfGallery';

const Gallery = () => {

    const [gallery, setGallery] = useState([])

    useEffect(() => {
        fetch('https://server-liard-nine.vercel.app/gallery')
            .then(res => res.json()).then(data => setGallery(data))
    }, [])
    const gallery1 = gallery.slice(0, 10)
    const gallery2 = gallery.slice(11, 19)
    return (
        <div className='bg-black rounded-xl'  >

            {/* Gallery slider Showcase */}
            <SliderOfGallery gallery1={gallery1} />
            <div className='-mt-72'>

                <SliderOfGallery gallery2={gallery2} />
            </div>
        </div>
    );
};

export default Gallery;