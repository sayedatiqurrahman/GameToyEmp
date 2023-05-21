import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';

const AddToys = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('https://server-liard-nine.vercel.app/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)

        }).then(response => response.json()).then(data => {
            console.log(data)
            if (data.insertedId) {
                toast.success('Toys Added Successfully')
            }
        });
        reset()
    };
    return (
        <div className='w-[90%] font-semibold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mx-auto lg:w-[60%] text-center'>
            <div className='text-left'>
                <h1 className='text-5xl fontB '>Welcome</h1>
                <p className='fontA'>_to add Toy Page</p>
            </div>

            <h1 className='text-3xl text-center fontA mb-3'>
                Add your Toys
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-2 mb-2'>
                    <input required type='text' placeholder="Enter Toys Name..." className="input input-bordered rounded-full border-2 w-full"  {...register("name")} />
                    <input required type='text' placeholder="Enter Seller Name..." className="input input-bordered rounded-full border-2 w-full" {...register("sellerName")} />
                </div>
                <div className='flex gap-2 mb-2'>
                    <input required type='email' placeholder="Enter Seller Email..." className="input input-bordered rounded-full border-2 w-full " {...register("sellerEmail")} />
                    <input required type='text' placeholder="Enter Sub-Category..." className="input input-bordered rounded-full border-2 w-full " {...register("subCategory")} />
                </div>
                <div className='flex gap-2 mb-2 w-full'>
                    <input type='tel' placeholder="Available Quantity..." className="input input-bordered rounded-full border-2 w-full" {...register("availableQuantity")} />
                    <input required type='tel' placeholder="Enter Toy's Price" className="input input-bordered rounded-full border-2 w-full" {...register("price")} />
                    <input required type='tel' placeholder="Toy's Rating Number" className="input input-bordered rounded-full border-2  w-full" {...register("rating")} />
                </div>
                <input required type='url' placeholder="Enter Toy's Picture URL" className="input mb-2 input-bordered rounded-full border-2  w-full" {...register("pictureURL")} />
                <input required placeholder="Enter Toy's Description" className=" px-5 text-center py-4 input resize-none input-bordered w-full rounded-full  border-2 h-20" {...register("detailDescription")} />

                <input className='mt-2 btn btn-outline border-2 w-[90%] md:w-1/2 rounded-full text-xl fontA ' type="submit" />
            </form>
        </div>
    );
};

export default AddToys;