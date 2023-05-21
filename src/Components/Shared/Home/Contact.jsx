import React from 'react';

const Contact = () => {
    return (
        <div className='flex justify-center items-center lg:flex-row flex-col gap-5 w-full'>
            <div className=" w-full">
                <h1 className='text-3xl font2'>We Can't Wait to Get You <br /> Started</h1>
                <hr className='w-20 border-2 border-gray-500 rounded-full mb-5 ' />

                <form className='text-center'>
                    <div className='flex flex-col gap-4'>

                        <input required className='px-4 h-10 bg-transparent border border-gray-500 rounded-full' type="text" placeholder='Enter Your Name' />


                        <input required className='px-4 h-10 bg-transparent border border-gray-500 rounded-full' type="email" placeholder='Enter Your Email' />
                        <textarea required className='p-4 bg-transparent
border-b-2 
border-gray-500  rounded-lg' type="email" placeholder='Enter Your Message' rows={5} />
                    </div>
                    <button className='btn btn-outline transition-all duration-200 border-2 px-20 rounded-full text-lg font-bold py-2 mt-4 ' type="submit">Submit </button>
                </form>
            </div>
            {/* Map Ifaram */}
            <div className="w-full">
                <iframe className='rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.375036049245!2d90.48755681498035!3d23.698297684615014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b70e624b976f%3A0x2fcf037f37e5ca2a!2z4Kao4KeH4Ka24Ka-4KaW4KeL4KawIOCmquCnjeCmsOCni-Cml-CnjeCmsOCmvuCmruCmvuCmsCBOZXNoYWtob3IgUHJvZ3JhbW1lcg!5e0!3m2!1sbn!2sbd!4v1683115360888!5m2!1sbn!2sbd" width="600" height="450" style={{ width: "100%", height: "500" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Contact;