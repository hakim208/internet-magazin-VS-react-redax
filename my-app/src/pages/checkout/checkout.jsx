import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAll, getAddproduct, totaldiscount, totalPrice } from '../../entities/counter/counterSlece'
import { toast } from "sonner";
import ImgChecout from '../images/basket.png'
import { useNavigate } from 'react-router';

const Checkout = () => {
    const dispach = useDispatch()
    const [name, setName] = useState("")
    const [modal, setmodal] = useState(false)
    const product = useSelector((state) => state.counter.getCart)
    const totalDiscount = useSelector((state) => state.counter.totalDiscount)
    const totalprice = useSelector((state) => state.counter.totalprice)
    let API = import.meta.env.VITE_API_URL
    let navigation = useNavigate()

    function checkout() {
        if (name.length > 0) {
            setmodal(true)
        }
        else {
            toast.success("", {
                description: (
                    <span className="">
                        Shumo Boyad <span className='text-red-500'>Billing Details</span> Pur kuned!
                    </span>
                ),
                duration: 10000,
            });
        }
    }

    function Close() {
        navigation("/")
        toast.success("", {
            description: (
                <span className="">
                Hush omaded!
                </span>
            ),
            duration: 10000,
        });
        dispach(deleteAll())
    }

    useEffect(() => {
        dispach(getAddproduct())
        dispach(totaldiscount())
        dispach(totalPrice())
    }, [])

    return (
        <div className='mt-[130px] mb-[100px] w-[90%] m-auto '>
            <dialog open={modal} className='w-[100%] '>
                <div className='m-auto ml-[40%] mt-[205%] md:ml-[50%] md:mt-[15%] pb-[30%] md:pb-[20%] '>
                    <img src={ImgChecout} alt="" />
                    <button onClick={Close} className='bg-red-500 rounded-[10px] p-[5px_25px] text-white '>close</button>
                </div>
            </dialog>
            <p>Product /View Cart / <span>CheckOut</span> </p>
            <div className='  flex flex-col md:flex-row items-center mt-[50px] justify-between gap-[20px] '>
                <div className='md:w-[32%] w-[100%] '>
                    <p className='text-[30px] md:text-[40px] font-medium mb-[20px] '>Billing Details</p>
                    <div className='flex flex-col gap-[10px] items-start shadow-2xl p-[20px] '>
                        <input value={name} onChange={(e) => setName(e.target.value)} className='md:pr-[200px] border-2 rounded-[5px] p-[10px_120px_10px_10px] ' type="text" placeholder='First name' />
                        <input className='md:pr-[200px] border-2 rounded-[5px] p-[10px_120px_10px_10px] ' type="text" placeholder='Last name' />
                        <input className='md:pr-[200px] border-2 rounded-[5px] p-[10px_120px_10px_10px] ' type="text" placeholder='Street address' />
                        <input className='md:pr-[200px] border-2 rounded-[5px] p-[10px_120px_10px_10px] ' type="text" placeholder='Apartment, floor, etc. (optional)' />
                        <input className='md:pr-[200px] border-2 rounded-[5px] p-[10px_120px_10px_10px] ' type="text" placeholder='Town/City' />
                        <input className='md:pr-[200px] border-2 rounded-[5px] p-[10px_120px_10px_10px] ' type="text" placeholder='Phone number' />
                        <input className='md:pr-[200px] border-2 rounded-[5px] p-[10px_120px_10px_10px] ' type="text" placeholder='Email address' />
                        <div className='flex items-center gap-[10px] '>
                            <input className='size-[20px]' type="checkbox" />
                            <p className='text-[13px] '>Save this information for faster check-out next time</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-[40%] w-[100%] flex flex-col items-start'>
                    <div className=" flex flex-col gap-[20px] h-[200px] w-full overflow-y-auto transition duration-300">
                        {
                          product && product.map((e) => {
                                return (
                                    <div key={e.id} className='flex items-center  justify-between ' >
                                        <div className='flex items-center gap-[10px] '>
                                            <img className='w-[50px] ' src={`${API}/images/${e.product.image}`} alt="" />
                                            <p className='font-medium'>{e.product.productName}</p>
                                        </div>
                                        <p className='font-serif'>${e.product.price}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex flex-col gap-[10px] items-start w-[100%] '>
                        <div className='flex items-center justify-between w-[100%] '>
                            <p>Subtotal:</p>
                            <p>${totalprice}</p>
                        </div>
                        <div className='flex items-center justify-between w-[100%] '>
                            <p>Shipping:</p>
                            <p>${totalprice - totalDiscount}</p>
                        </div>
                        <div className='border-t-2 pt-[10px] flex items-center justify-between w-[100%] '>
                            <p className='text-[20px] font-medium '>Total:</p>
                            <p className='text-[25px] font-medium '>${totalDiscount}</p>
                        </div>
                        <button className='bg-[#DB4444] p-[10px_30px] rounded-[5px] text-white mt-[40px] ' onClick={checkout}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
