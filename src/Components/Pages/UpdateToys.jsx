import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateToys = () => {
    const toy = useLoaderData()
    const { _id, sellerName, subCategory, sellerEmail, rating, price, pictureURL, name, detailDescription, availableQuantity } = useLoaderData()

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch(`https://server-liard-nine.vercel.app/update/${data._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)

        }).then(response => response.json()).then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
                toast.success('Your Toy is Updated Successfully')
            }
            if (data.modifiedCount === 0) {
                toast.error('All data is up to date.')
            }
        });

    };

    return (

        <div className='w-[90%] font-semibold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mx-auto lg:w-[60%] text-center'>
            <div className='text-left'>
                <h1 className='text-5xl fontB '>Welcome</h1>
                <p className='fontA'>_to Update Toy Page</p>
            </div>

            <h1 className='text-3xl text-center fontA mb-3'>
                Update your Toy
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input required value={_id} type='text' className="hidden"  {...register("_id")} />
                <div className='flex gap-2 mb-2'>
                    <input required defaultValue={name} type='text' placeholder="Enter Toys Name..." className="input input-bordered rounded-full border-2 w-full"  {...register("name")} />
                    <input required value={sellerName} type='text' placeholder="Enter Seller Name..." className="input input-bordered rounded-full border-2 w-full" {...register("sellerName")} />
                </div>
                <div className='flex gap-2 mb-2'>
                    <input required value={sellerEmail} type='email' placeholder="Enter Seller Email..." className="input input-bordered rounded-full border-2 w-full " {...register("sellerEmail")} />
                    <input required defaultValue={subCategory} type='text' placeholder="Enter Sub-Category..." className="input input-bordered rounded-full border-2 w-full " {...register("subCategory")} />
                </div>
                <div className='flex gap-2 mb-2 w-full'>
                    <input type='tel' defaultValue={availableQuantity} placeholder="Available Quantity..." className="input input-bordered rounded-full border-2 w-full" {...register("availableQuantity")} />
                    <input required defaultValue={price} type='tel' placeholder="Enter Toy's Price" className="input input-bordered rounded-full border-2 w-full" {...register("price")} />
                    <input required defaultValue={rating} type='tel' placeholder="Toy's Rating Number" className="input input-bordered rounded-full border-2  w-full" {...register("rating")} />
                </div>
                <div className='flex gap-2 mb-2'>
                    <input required type='url' defaultValue={pictureURL} placeholder="Enter Toy's Picture URL" className="input input-bordered rounded-full border-2  w-full" {...register("pictureURL")} />

                    <input required type='date' defaultValue={pictureURL} placeholder="Enter Release Date" className="input input-bordered rounded-full border-2  w-full" {...register("releaseDate")} />
                </div>
                <input required defaultValue={detailDescription} placeholder="Enter Toy's Description" className=" px-5 text-center py-4 input resize-none input-bordered w-full rounded-full  border-2 h-20" {...register("detailDescription")} />

                <input className='mt-2 btn btn-outline border-2 w-[90%] md:w-1/2 rounded-full text-xl fontA ' value='Update Toy' type="submit" />
            </form>
        </div>

    );
};

export default UpdateToys;