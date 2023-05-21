import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';

import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from './Loading';
import { toast } from 'react-hot-toast';

const MyToys = () => {
    useEffect(() => {
        document.title = 'GameToyEmporium || My Toys'
    }, [])
    const { user, loading } = useContext(AuthContext)
    const navigation = useNavigation()
    const [toys, setToys] = useState()
    const [deleteData, setDelete] = useState(false)
    const email = user?.email;
    useEffect(() => {
        fetch(`https://server-liard-nine.vercel.app/myToys/${email}`).then(res => res.json()).then(data => setToys(data))
    }, [email, loading, deleteData]);

    if (!user) {
        return <Loading />
    }
    if (navigation.state === 'loading') {
        return <Loading />

    }
    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete this')
        if (proceed) {
            fetch(`https://server-liard-nine.vercel.app/deleteToy/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify({ id })
            }).then(res => res.json).then(data => {
                console.log(data);
                setDelete(!deleteData)
                if (deletedCount > 0) {
                    toast.success('Successfully deleted')
                }
            }).catch(err => console.log(err.message))
        }

    }

    return (
        <div>

            <div className='text-left mt-20'>
                <h1 className='text-7xl fontB '>Welcome</h1>
                <p className='fontA'>_to My Toys Page</p>
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
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='rounded-full relative'>
                    {/* row 1 */}
                    {/* const { _id, sellerName, subCategory, sellerEmail, rating, price, pictureURL, name, detailDescription, availableQuantity } = toy */}

                    {
                        toys ? toys.map((toy, idx) =>
                            <tr key={toy._id}>
                                <th>{idx + 1}</th>
                                <td className='flex gap-2 items-center'> <img className='h-14 w-14 rounded-full' src={toy.pictureURL} alt="" /> {toy.sellerName}</td>
                                <td>{toy.name}</td>
                                <td>{toy.subCategory}</td>
                                <td >${toy.price}</td>
                                <td className='text-center'>{toy.availableQuantity}</td>

                                <td>
                                    <Link to={`/toysDetails/${toy._id}`} className="tooltip tooltip-top text-xl    rounded-full " data-tip="View Details"> <HiOutlineDocumentText />
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/updateToy/${toy._id}`} className="tooltip tooltip-top text-xl rounded-full" data-tip="Update Toys"> <FaRegEdit />
                                    </Link>

                                </td>

                                <td>
                                    <Link onClick={() => handleDelete(toy._id)} className="tooltip  tooltip-top text-xl    rounded-full " data-tip="Delete"> <AiOutlineDelete />
                                    </Link>
                                </td>
                            </tr>
                        ) : <div className='absolute left-1/2 -translate-x-1/2 '><Loading /></div>
                    }



                </tbody>
            </table>




        </div >
    );
};

export default MyToys;