import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import Loading from './Loading';

const AllToys = () => {
    useEffect(() => {
        document.title = 'GameToyEmporium || All Toys'
    }, [])
    const { user } = useContext(AuthContext);
    const navigation = useNavigation()
    const loadedDataToys = useLoaderData()
    const [toys, setToys] = useState(loadedDataToys)
    const handleSearch = (e) => {
        e.preventDefault()
        const form = e.target;
        const searchText = form.text.value;
        if (searchText === '' || searchText === ' ') {
            setToys(loadedDataToys)
        }

        fetch(`https://server-liard-nine.vercel.app/search/${searchText}`).then(res => res.json()).then(data => {
            setToys(data)
            console.log(data);
        })

        form.reset()
    }

    const handleChangeSearch = (e) => {
        const searchText = e.target.value;

        if (searchText === '' || searchText === ' ') {
            setToys(loadedDataToys)
        }

        fetch(`https://server-liard-nine.vercel.app/search/${searchText}`).then(res => res.json()).then(data => {
            setToys(data)
            console.log(data);
        })
    }
    if (navigation.state === 'loading') {
        return <Loading />
    }
    const handleDetails = () => {
        if (!user) {
            toast.error("Please sign in to view details");

        }
    };
    return (



        <div className="overflow-x-auto mt-10 ">
            <div className='text-left'>
                <h1 className='text-7xl fontB '>Welcome</h1>
                <p className='fontA'>_to All Toys Page</p>
            </div>

            <form onSubmit={handleSearch} className='my-[130px] w-full max-w-xs mx-auto relative'>
                <input onChange={handleChangeSearch} type="text" name='text' placeholder="Type here..." className="input input-bordered border-2 border-slate-500 w-full max-w-xs rounded-full" />

                <input className='btn btn-outline bg-slate-300 text-black px-8 rounded-full text-lg absolute top-0 right-0' type="submit" name="search" id="" value={'Search'} />
            </form>
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
                                <td className='flex gap-2 items-center'> <img className='h-14 w-14 rounded-full' src={toy.pictureURL} alt="" /> {toy.sellerName}</td>
                                <td>{toy.name}</td>
                                <td>{toy.subCategory}</td>
                                <td >${toy.price}</td>
                                <td className='text-center'>{toy.availableQuantity}</td>
                                <td> <Link onClick={handleDetails} to={`/toysDetails/${toy._id}`} className="fontA  btn btn-outline  rounded-full "> <span className='mr-2'>View Details</span> <HiOutlineDocumentText />
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