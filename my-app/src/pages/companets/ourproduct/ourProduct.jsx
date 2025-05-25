import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart, addWishlist, getProduct, infoProduct } from '../../../entities/counter/counterSlece'
import './ourProduct.css'
import ImgFiveStart from '../../images/Five star.png'
import { Link, useNavigate } from 'react-router'

const OurProduct = () => {
    const data = useSelector((state) => state.counter.data)
    let wishlistUser = useSelector((state) => state.counter.wishlist)
    let API = import.meta.env.VITE_API_URL
    let dispach = useDispatch()
    const navigation = useNavigate()

    function info(id) {
        dispach(infoProduct({ id, navigation }))
    }
    useEffect(() => {
        dispach(getProduct())
    }, [])

    const random = useMemo(() => {
        if (!data || data === 0) { return [] }
        return [...data].sort(() => 0.5 - Math.random()).slice(0, 10)
    }, [data])

    return (
        <div className='w-[90%] m-auto mt-[100px] mb-[150px] '>
            <div className='flex flex-col items-start gap-[10px] '>
                <div className='flex items-center gap-[10px] '>
                    <div className='w-[20px] h-[40px] rounded-[5px] bg-[#DB4444] '></div>
                    <p className='text-[#DB4444] text-[20px] '>Our Products</p>
                </div>
                <p className='text-[25px] font-[500] md:text-[45px] '>Explore Our Products</p>
            </div>
            <div className='flex gap-[30px] md:gap-[80px] items-center flex-wrap'>
                {
                    random.map((e) => {
                        return (
                            <div key={e.id}>
                                <div className='boxCart'>
                                    <div className='absolute ml-[115px] md:ml-[165px] mt-[12px]  flex flex-col items-center gap-[10px]'>
                                        <div onClick={() => dispach(addWishlist(e))} className=' p-[3px] rounded-[80px] '>
                                            <svg style={{ color: wishlistUser.find((el) => el.id == e.id) ? "white" : "red" ,backgroundColor:wishlistUser.find((el) => el.id == e.id) ? "red" : "white" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 rounded-[50%] ">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        </div>
                                        <div onClick={() => info(e.id)} className='bg-white p-[3px] rounded-[80px] '>
                                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='Cart' onClick={() => dispach(addTocart(e.id))}>Add To Cart</button>
                                    </div>
                                    <img className='w-[230px] h-[180px] ' src={`${API}/images/${e.image}`} alt="" />
                                    <p className='text-[15px] font-[500] md:text-[20px] text-black '>{e.productName}</p>
                                    <div className='flex items-center gap-[10px] '>
                                        <p className='text-[10px] text-red-600 md:text-[15px] '>${e.price}</p>
                                        <img src={ImgFiveStart} alt="" />
                                        <p className='text-gray-400 text-[10px] md:text--[15px] '>(78)</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Link to='/explorProduct'>
                <button className='bg-[#DB4444] p-[15px_50px] rounded-[5px] text-white md:ml-[43%] ml-[20%] m-[50px_0px] '>View All Products</button>
            </Link>
        </div>
    )
}

export default OurProduct
