import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react-web';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import animationData from '../../../public/login-orange.json';
const SignUp = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => { console.log(data); }
    return (
        <div>
            <div className='text-left mt-10'>
                <h1 className='text-5xl fontB '>Welcome</h1>
                <p className='fontA'>_to Registration Page</p>
            </div>
            <div className='w-[90%] flex items-center  gap-5 lg:gap-10 flex-col md:flex-row  font-semibold absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mx-auto lg:w-[60%] text-center'>
                <div className='w-full'>
                    <div className="h-[200px]">
                        <Lottie
                            options={{
                                animationData: animationData,
                                loop: true,
                                autoplay: true,
                            }} />
                    </div>
                    <h3 className='text-3xl text-center fontA'>"Start with something simple and small, then expand over time. If people call it a 'toy' you're definitely onto something."</h3>
                    <p className='fontB text-xl text-right mr-3 mt-3'>_Aaron Levie</p>
                </div>
                <form className='w-full' onSubmit={handleSubmit(onSubmit)}>

                    <div className='flex flex-col gap-2 mb-2'>
                        <input required type='name' placeholder="Enter Your Name..." className="input input-bordered rounded-full border-2 w-full " {...register("name")} />
                        <input required type='email' placeholder="Enter Your Email..." className="input input-bordered rounded-full border-2 w-full " {...register("email")} />
                        <input required type='password' placeholder="Enter Your Password..." className="input input-bordered rounded-full border-2 w-full " {...register("password")} />
                        <input required type='url' placeholder="Enter Your Photo URL..." className="input input-bordered rounded-full border-2 w-full " {...register("img")} />
                    </div>

                    <input className='mt-2 btn btn-outline border-2 w-[90%] md:w-1/2 rounded-full text-xl fontA ' type="submit" value={'Register'} />

                    <div className='mt-4 '>
                        <p className='fontA '>Login With / <Link className='underline text-yellow-600' to={'/login'}>Login</Link></p>

                        <FcGoogle className='mt-2 btn btn-outline border-2 w-[90%] bg-slate-900 md:w-1/2 rounded-full text-lg py-2' />

                    </div>

                </form>

            </div>
        </div>
    );
};

export default SignUp;