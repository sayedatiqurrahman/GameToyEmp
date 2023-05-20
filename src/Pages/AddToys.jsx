import React from 'react';
import { useForm } from "react-hook-form";

const AddToys = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='w-[90%] font-semibold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mx-auto lg:w-[60%]'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-2 mb-2'>
                    <input placeholder="Type here" className="input input-bordered rounded-full border-2 w-full"  {...register("name")} />
                    <input placeholder="Type here" className="input input-bordered rounded-full border-2 w-full" {...register("sellerName")} />
                </div>
                <div className='flex gap-2 mb-2'>
                    <input placeholder="Type here" className="input input-bordered rounded-full border-2 w-full " {...register("sellerEmail")} />
                    <input placeholder="Type here" className="input input-bordered rounded-full border-2 w-full " {...register("subCategory")} />
                </div>
                <div className='flex gap-2 mb-2 w-full'>
                    <input placeholder="Type here" className="input input-bordered rounded-full border-2 w-full" {...register("availableQuantity")} />
                    <input placeholder="Type here" className="input input-bordered rounded-full border-2 w-full" {...register("price")} />
                    <input placeholder="Type here" className="input input-bordered rounded-full border-2  w-full" {...register("rating")} />
                </div>

                <textarea placeholder="Type here" className="input input-bordered w-full rounded-full pt-6 border-2 h-20" {...register("detailDescription")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddToys;