import React, { useState } from 'react'

const ExploreOurProducts = () => {

    const [inpBrands, setInpBarnds] = useState(null)

    console.log(inpBrands);

    return (
        <div className='mt-[100px] w-[90%] m-auto mb-[100px] '>
            <div className='flex items-start gap-[10px] justify-between md:flex-row flex-col '>
                <p className='text-[15px] text-gray-500 font-light '>Home / <span className='text-black '>Explore Our Products </span></p>
                <div className='md:hidden flex items-center justify-between w-[100%] p-[10px] border-2 text-gray-300 rounded-[7px] '>
                    <input type="text" placeholder='Search' className='text-black border-0 outline-0 ' />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <select className='p-[10px_20px] pr-[50px] md:pr-[70px] rounded-[5px] border-2 '>
                    <option value="" disabled selected>Populary</option>
                    <option value="">Option 2</option>
                    <option value="">Option 3</option>
                </select>
            </div>
            <div>
                <div className='w-[20%] hidden md:flex flex-col items-start gap-[30px] '>
                    <div className='items-start border-t-2 pt-[15px] w-[100%] hidden md:flex text-gray-400 font-semibold flex-col gap-[10px] '>
                        <div className='flex items-center w-[100%] justify-between text-black '>
                            <p className='text-[20px] text-black '> Category</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-black ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                        <p>All products</p>
                        <p>Electronics</p>
                        <p>Home & Lifestyle</p>
                        <p>Medicine</p>
                        <p>Sports & Outdoor</p>
                        <p>See all</p>
                    </div>
                    <div className='items-start border-t-2 pt-[15px] w-[100%] hidden md:flex text-gray-700 font-semibold flex-col gap-[10px] '>
                        <div className='flex items-center w-[100%] justify-between text-black '>
                            <p className='text-[20px] text-black '> Brands</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-black ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                        <div className='flex items-center gap-[15px] '>
                            <input onClick={(e) => setInpBarnds(e.target.value)} type="checkbox" className='size-5' />
                            <p>Samsung</p>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default ExploreOurProducts
