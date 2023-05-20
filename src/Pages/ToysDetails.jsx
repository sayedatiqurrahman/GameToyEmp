import Lottie from 'lottie-react-web';
import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import animationData from "../../public/man.json"
import toast from 'react-hot-toast';
const ToysDetails = () => {
    const { _id, sellerName, subCategory, sellerEmail, rating, price, pictureURL, name, detailDescription, availableQuantity } = useLoaderData()

    const [disable, setDisable] = useState(false)
    return (
        <div className=' min-h-[1000px] lg:min-h-fit '>

            <div className="absolute w-[90%] lg:w-[65%] top-20 xl:top-1/2  left-1/2 -translate-x-1/2 xl:-translate-y-1/2  glass rounded-lg">
                <div className=" flex justify-center gap-10 p-5 items-center flex-col xl:flex-row">
                    <img className=' xl:w-[300px] border-2 border-slate-600 rounded-lg' src={pictureURL} />
                    <div className="divider divider-horizontal"></div>
                    <div className=' -space-y-6'>
                        <h1 className="text-5xl font-bold fontA ">{name}</h1>
                        <div className='-space-y-11'>
                            <p className="py-6"><b>Category:</b> {subCategory}</p>
                            <p className="py-6"><b>Seller Name:</b> {sellerName}</p>
                            <p className="py-6"><b>Seller Email:</b> {sellerEmail}</p>
                            <div className='flex flex-wrap gap-7 items-center'>
                                <p className="py-6"><b>Price: </b> ${price}</p>
                                <div className="py-6 "> <b>Ratings: </b>
                                    <Rating className='text-yellow-500'
                                        placeholderRating={rating}
                                        readonly
                                        emptySymbol={<FaRegStar />}
                                        placeholderSymbol={<FaStar />}
                                        fullSymbol={<FaStar />}
                                    />
                                    <span className='ml-2'>{rating}</span>
                                </div>
                            </div>
                            <p className="py-6"><b>Available Quantity:</b> 0{availableQuantity}</p>
                        </div>
                        <p className="py-6">{detailDescription}</p>
                        <button onClick={() => {
                            setDisable(true)
                            toast.success('You Already ordered this.')
                        }} disabled={disable} className="btn hover:pt-2 w-full btn-outline rounded-full fontA text-xl uppercase">{disable ? 'Ordered' : 'Order Now'}</button>
                    </div>
                </div>
            </div>
            <div className='absolute w-[400px] hidden lg:block -z-10 top-20 -left-10'>
                <Lottie
                    options={{
                        animationData: animationData,

                    }}
                />
            </div>
        </div >
    );
};

export default ToysDetails;