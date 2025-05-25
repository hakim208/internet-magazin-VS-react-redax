import React, { useEffect, useState } from 'react'
import { CategoriesBySales, CategoriProduct, FlashSalesTimer, OurProduct, SellingProduct, SwiperHome, SwiperProduct } from './lazy'
import ImgPs5 from './images/ps5-slim-goedkope-playstation_large 1.png'
import ImgWoman from './images/attractive-woman-wearing-hat-posing-black-background 1.png'
import ImgUjl from './images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png'
import ImgParfium from './images/652e82cd70aa6522dd785109a455904c.png'
import { Link } from 'react-router'

const Home = () => {
    const targetDate = new Date(Date.now() + 1000 * 60 * 1000)
    return (
        <div className='border-t-2t text-gray-700 mt-[100px] '>
            <div className='md:hidden flex items-center justify-between w-[90%] m-auto p-[10px] border-2 text-gray-300 rounded-[7px] mb-[20px] '>
                <input type="text" placeholder='Search' className='text-black border-0 outline-0 ' />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-black ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <div className='flex items-center w-[90%] m-auto justify-between md:flex-row flex-col '>
                <div className=' flex flex-wrap md:flex-col items-start gap-[7px] text-[15px] font-[500] md:border-r-2 pr-[50px] '>
                    <div className='p-[5px] hover:rounded-[5px] hover:bg-[#dddada] flex items-center gap-[20px]'>
                        <button>Woman’s Fashion</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-black ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <div className='p-[5px] hover:rounded-[5px] hover:bg-[#dddada] flex items-center gap-[20px]'>
                        <button>Men’s Fashion</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-black ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <button className='p-[5px] hover:rounded-[5px] hover:bg-[#dddada]'>Electronics</button>
                    <button className='p-[5px] hover:rounded-[5px] hover:bg-[#dddada]'>Home & Lifestyle</button>
                    <button className='p-[5px] hover:rounded-[5px] hover:bg-[#dddada]'>Medicine</button>
                    <button className='p-[5px] hover:rounded-[5px] hover:bg-[#dddada]'>Sports & Outdoor</button>
                    <button className='p-[5px] hover:rounded-[5px] hover:bg-[#dddada]'>Baby’s & Toys</button>
                    <button className='p-[5px] hover:rounded-[5px] hover:bg-[#dddada]'>Groceries & Pets</button>
                    <button className='p-[5px] hover:rounded-[5px] hover:bg-[#dddada]'>Health & Beauty</button>
                </div>
                <SwiperHome />
            </div>
            <div className='w-[90%] m-auto mt-[20px] mb-[40px] '>
                <div className='flex items-center gap-[10px] '>
                    <div className='w-[20px] h-[40px] rounded-[5px] bg-[#DB4444] '></div>
                    <p className='text-[#DB4444] text-[20px] '>Today’s</p>
                </div>
                <FlashSalesTimer targetDate={targetDate} onComplete={() => alert('Флэш-распродажа завершена!')} className />
            </div>
            <SwiperProduct />
            <Link to='/explorProduct'>
                <button className='bg-[#DB4444] p-[15px_50px] rounded-[5px] text-white md:ml-[43%] ml-[20%] m-[50px_0px] '>View All Products</button>
            </Link>
            <CategoriProduct />
            <hr className='w-[90%] m-auto mt-[30px] mb-[30px] ' />
            <SellingProduct />
            <CategoriesBySales />
            <OurProduct />
            <div className='w-[90%] m-auto '>
                <div className='flex items-center gap-[10px] '>
                    <div className='w-[20px] h-[40px] rounded-[5px] bg-[#DB4444] '></div>
                    <p className='text-[#DB4444] text-[20px] '>Featured</p>
                </div>
                <p className='text-[25px] font-[500] md:text-[40px]'>New Arrival</p>
                <div className='flex gap-[20px] m-[50px_0px] flex-col md:flex-row'>
                    <div className='bg-[#000000] p-[40px_0px_0px_0px] '>
                        <img src={ImgPs5} alt="" />
                        <div className='absolute flex flex-col items-start gap-[10px] mt-[-160px] ml-[30px] text-white '>
                            <p className='text-[30px] md:text-[40px] font-[500] '>PlayStation 5</p>
                            <p className='text-[10px] text-gray-300 '>Black and White version of the PS5 <br /> coming out on sale.</p>
                            <p className='font-[500] '>Shop Now</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[20px] '>
                        <div className='bg-[#000000] p-[40px_40px_0px_40px] flex flex-col md:flex-row items-end gap-[50px]'>
                            <div className='flex flex-col items-start gap-[10px] mb-[40px] text-white '>
                                <p className='text-[30px] md:text-[40px] font-[500] '>Women’s Collections 5</p>
                                <p className='text-[10px] text-gray-300 '>Featured woman collections that <br /> give you another vibe.</p>
                                <p className='font-[500] '>Shop Now</p>
                            </div>
                            <img className='mt-[-80px] md:mt-[0px] ' src={ImgWoman} alt="" />
                        </div>
                        <div className='flex flex-col md:flex-row gap-[20px] '>
                            <div className='bg-[#000000] md:w-[50%] p-[20px_50px_0px_20px] '>
                                <img src={ImgUjl} className='ml-[40%]' alt="" />
                                <div className='absolute mb-[20px] flex flex-col items-start gap-[10px] mt-[-160px] ml-[30px] text-white '>
                                    <p className='text-[30px] md:text-[40px] font-[500] '>Speakers 5</p>
                                    <p className='text-[10px] text-gray-300 '>Amazon wireless speakers</p>
                                    <p className='font-[500] '>Shop Now</p>
                                </div>
                            </div>
                            <div className='bg-[#000000] md:w-[50%] p-[20px_50px_0px_20px] '>
                                <img src={ImgParfium} className='ml-[40%]' alt="" />
                                <div className='absolute mb-[20px] flex flex-col items-start gap-[10px] mt-[-160px] ml-[30px] text-white '>
                                    <p className='text-[30px] md:text-[40px] font-[500] '>Speakers 5</p>
                                    <p className='text-[10px] text-gray-300 '>Amazon wireless speakers</p>
                                    <p className='font-[500] '>Shop Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[90%] md:w-[80%] mt-[100px] mb-[180px] m-auto flex flex-col gap-[30px] md:flex-row items-center justify-between '>
                    <div className='flex flex-col items-center gap-[10px] '>
                        <div className='bg-[#C1C1C1] p-[10px] rounded-[50%] '>
                            <div className='bg-[#000000] p-[10px] rounded-[50%] '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                            </div>
                        </div>
                        <p className='text-black font-[500] text-[20px] md:text-[25px] '>FREE AND FAST DELIVERY</p>
                        <p className='text-black '>Free delivery for all orders over $140</p>
                    </div>
                    <div className='flex flex-col items-center gap-[10px] '>
                        <div className='bg-[#C1C1C1] p-[10px] rounded-[50%] '>
                            <div className='bg-[#000000] p-[10px] rounded-[50%] '>
                                <svg xmlns="http://www.w3.org/2000/svg" width={40} color='white' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headset-icon lucide-headset"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" /><path d="M21 16v2a4 4 0 0 1-4 4h-5" /></svg>
                            </div>
                        </div>
                        <p className='text-black font-[500] text-[20px] md:text-[25px] '>FREE AND FAST DELIVERY</p>
                        <p className='text-black '>Free delivery for all orders over $140</p>
                    </div>
                    <div className='flex flex-col items-center gap-[10px] '>
                        <div className='bg-[#C1C1C1] p-[10px] rounded-[50%] '>
                            <div className='bg-[#000000] p-[10px] rounded-[50%] '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                </svg>
                            </div>
                        </div>
                        <p className='text-black font-[500] text-[20px] md:text-[25px] '>FREE AND FAST DELIVERY</p>
                        <p className='text-black '>Free delivery for all orders over $140</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
