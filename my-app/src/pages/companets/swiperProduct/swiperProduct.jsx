import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector, useDispatch } from 'react-redux'
import 'swiper/css';
import 'swiper/css/pagination';
import { addTocart, addWishlist, getProduct, infoProduct } from '../../../entities/counter/counterSlece'
import './swiperProduct.css'
import ImgFiveStart from '../../images/Five star.png'
import { Link, useNavigate } from 'react-router';

export default function SwiperProduct() {
    const data = useSelector((state) => state.counter.data)
    let wishlistUser = useSelector((state) => state.counter.wishlist)
    let API = import.meta.env.VITE_API_URL
    let dispach = useDispatch()
    let navigation = useNavigate()

    function info(id) {
        dispach(infoProduct({ id, navigation }))
    }

    useEffect(() => {
        dispach(getProduct())
    }, [])
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                className="salesSwiper"
            >
                <div className=''>
                    {
                        data.length > 0 && data.map((e) => {
                            return (
                                <SwiperSlide>
                                    <div className='contenir-Cart' key={e.id} >
                                        <div className='bg-[#F5F5F5] rounded-[10px] '>
                                            <div className='bg-[#DB4444] absolute text-white p-[5px_15px] rounded-[5px] m-[5px_0px_0px_5px] text-[10px] '>
                                                <p>-34%</p>
                                            </div>
                                            <div className='absolute ml-[65%] md:ml-[99%] flex flex-col items-center gap-[10px]'>
                                                <div onClick={() => dispach(addWishlist(e))} className='p-[3px] rounded-[80px] '>
                                                    <svg style={{ color: wishlistUser.find((el) => el.id == e.id) ? "white" : "red", backgroundColor: wishlistUser.find((el) => el.id == e.id) ? "red" : "white" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 rounded-[50%] ">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                </div>
                                                <div onClick={() => info(e.id)} className='bg-white p-[3px] rounded-[80px] '>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <button className='salesAddProduct' onClick={() => dispach(addTocart(e.id))} >Add To Cart</button>
                                            </div>
                                            <img className='imgSales' src={`${API}/images/${e.image}`} alt="" />
                                        </div>
                                        <p className='text-black font-[600] '>{e.productName}</p>
                                        <p className='text-red-800 font-[400]'>${e.price} <span className='text-gray-400 ml-[15px] line-through '>$120</span> </p>
                                        <div className='flex items-center gap-[10px] '>
                                            <img src={ImgFiveStart} alt="" />
                                            <span className='text-[13px] text-gray-400 '>(98)</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </div>
            </Swiper>
        </>
    );
}
