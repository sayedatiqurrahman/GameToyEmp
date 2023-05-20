import React from 'react';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const toys = useLoaderData()
    return (



        <div className="overflow-x-auto mt-10 ">


            <div className='my-[130px] w-full max-w-xs mx-auto relative'>
                <input type="text" placeholder="Type here..." className="input input-bordered border-2 border-slate-500 w-full max-w-xs rounded-full" />
                <input className='btn btn-outline bg-slate-300 text-black px-8 rounded-full text-lg absolute top-0 right-0' type="submit" name="" id="" value={'Search'} />
            </div>
            <table className="table table-zebra w-full rounded-full">
                {/* head */}
                <thead >

                    <tr className='rounded-full'>
                        <th></th>
                        <th>Sellers Name</th>
                        <th>Toys Name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='rounded-full'>
                    {/* row 1 */}
                    {/* const { _id, sellerName, subCategory, sellerEmail, rating, price, pictureURL, name, detailDescription, availableQuantity } = toy */}

                    {
                        toys.map((toy, idx) =>
                            <tr key={toy._id}>
                                <th>{idx + 1}</th>
                                <td>{toy.sellerName}</td>
                                <td>{toy.name}</td>
                                <td>{toy.subCategory}</td>
                                <td >${toy.price}</td>
                                <td className='text-center'>{toy.availableQuantity}</td>
                                <td> <Link to={`/toysDetails/${toy._id}`} className="fontA  btn btn-outline  rounded-full "> <span className='mr-2'>View Details</span> <HiOutlineDocumentText />
                                </Link></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllToys;