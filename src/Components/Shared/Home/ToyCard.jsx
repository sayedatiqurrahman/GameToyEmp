import React from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import { HiOutlineDocumentText } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const ShopCard = ({ toy }) => {
    const { _id, rating, price, pictureURL, name } = toy;

    return (

        <div className="card w-96  glass rounded-lg shadow-xl">
            <figure><img src={pictureURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <div className='flex flex-wrap '>
                    <p>Ratings: {rating}</p>

                    <Rating className='text-yellow-500'
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar />}
                        fullSymbol={<FaStar />}
                    />
                </div>
                <div className="card-actions justify-end ">
                    <Link to={`/toysDetails/${_id}`} className="relative top-8 fontA text-2xl btn btn-outline w-full rounded-t-full border-b-0 "> <span className='mr-2'>View Details</span> <HiOutlineDocumentText />
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default ShopCard;