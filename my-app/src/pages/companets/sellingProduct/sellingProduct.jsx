import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart, addWishlist, getProduct, infoProduct } from '../../../entities/counter/counterSlece'
import ImgFiveStart from '../../images/Five star.png'
import "./sellingProduct.css"
import { useNavigate } from 'react-router'

const SellingProduct = () => {
    const data = useSelector((state) => state.counter.data)
    let wishlistUser = useSelector((state) => state.counter.wishlist)
    let dispach = useDispatch()
    let API = import.meta.env.VITE_API_URL
    const navigation = useNavigate()

    function info(id) {
        dispach(infoProduct({ id, navigation }))
    }

    const random = useMemo(() => {
        if (!data || data.length === 0) { return [] }
        return [...data].sort(() => 0.5 - Math.random()).slice(0, 4)
    }, [data])

    useEffect(() => {
        dispach(getProduct())
    }, [])
    return (
        <div className='w-[90%] m-auto mt-[60px] mb-[100px] '>
            <div className='flex gap-[20px] md:items-end justify-between md:flex-row flex-col mb-[25px] '>
                <div className='flex flex-col gap-[10px] items-start '>
                    <div className='flex items-center gap-[10px] '>
                        <div className='w-[20px] h-[40px] rounded-[5px] bg-[#DB4444] '></div>
                        <p className='text-[#DB4444] text-[20px] '>This Month</p>
                    </div>
                    <p className='text-[25px] md:text-[45px] font-[500]'>Best Selling Products</p>
                </div>
                <div>
                    <button className='bg-[#DB4444] p-[10px_20px] md:p-[15px_45px] text-[15px] text-white rounded-[5px]'>View All</button>
                </div>
            </div>
            <div className='flex items-center md:flex-row flex-col gap-[30px] justify-between'>
                {
                    random.map((e) => {
                        return (
                            <div key={e.id}>
                                <div className='flex flex-col items-start gap-[10px] w-[250px] '>
                                    <div className='BoxCart'>
                                        <div className='absolute pl-[55%] md:pl-[14%] flex flex-col items-center gap-[10px]  ' >
                                            <div style={{color:wishlistUser.find((el)=>el.id==e.id) ? "red" : "white"}} onClick={() => dispach(addWishlist(e))} className=' p-[3px] rounded-[80px] '>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
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
                                            <button className='addtoCart' onClick={() => dispach(addTocart(e.id))}>Add To Cart</button>
                                        </div>
                                        <img className='w-[250px] h-[200px] ' src={`${API}/images/${e.image}`} alt="" />
                                    </div>
                                    <p className='text-[20px] font-bold text-black  '>{e.productName}</p>
                                    <p className='text-[12px] font-[500] text-red-500 '>${e.price} <span className='line-through ml-[10px] text-gray-400 '>$145</span> </p>
                                    <div className='flex items-center gap-[10px] '>
                                        <img src={ImgFiveStart} alt="" />
                                        <p className='text-gray-400 text-[12px] '>(67)</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default SellingProduct