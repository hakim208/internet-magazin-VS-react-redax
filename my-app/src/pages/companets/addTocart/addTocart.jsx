import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import reducer, { daleteProduct, deleteAll, getAddproduct, incrimetn, Reducer, totaldiscount, totalPrice } from '../../../entities/counter/counterSlece';
import { ChevronUp, ChevronDown } from "lucide-react"
import { Link } from 'react-router';
const AddTocart = () => {
    const getcart = useSelector((state) => state.counter.getCart)
    const totalPrise = useSelector((state) => state.counter.totalprice)
    const totalDiscount = useSelector((state) => state.counter.totalDiscount)
    let dispach = useDispatch()
    let API = import.meta.env.VITE_API_URL

    useEffect(() => {
        dispach(getAddproduct())
        dispach(totalPrice())
        dispach(totaldiscount())
    }, [])

    return (
        <div className='mt-[100px] w-[90%] m-auto mb-[100px] '>
            <h1 className='text-[13px] font-light text-gray-500 '>Home <span className='text-black ml-[10px] '>/ Cart </span> </h1>
            <div className="overflow-x-auto mt-[40px] w-full">
                <table className="min-w-full text-sm text-left text-gray-500 border-t border-gray-200">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">Product</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">Quantity</th>
                            <th scope="col" className="px-6 py-3">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        { getcart && getcart.map((e) => (
                            <tr key={e.id} className="hover:bg-gray-50 transition-all">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={`${API}/images/${e.product.image}`}
                                            alt={e.product.productName}
                                            className="w-16 h-16 object-cover rounded-md border"
                                        />
                                        <span className="font-medium text-gray-900">{e.product.productName}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-900 font-semibold">${e.product.price}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center border rounded-md overflow-hidden w-fit">
                                        <span className="px-4 py-1">{e.quantity}</span>
                                        <div className="flex flex-col border-l">
                                            <button onClick={() => dispach(incrimetn(e.id))} className="px-2 py-1 hover:bg-gray-100">
                                                <ChevronUp className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => dispach(Reducer(e.id))} className="px-2 py-1 hover:bg-gray-100">
                                                <ChevronDown className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="font-semibold text-gray-900">${Math.floor(e.quantity * e.product.price)}</span>
                                        <button onClick={() => dispach(daleteProduct(e.id))} className="text-red-500 hover:text-red-700 transition">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex items-center w-[100%] justify-between mt-[20px] '>
                <div> <button className='p-[10px_20px] md:p-[13px_50px] text-[15px] border-2 rounded-[10px] text-gray-700 '>Return To Shop</button></div>
                <div>  <button onClick={() => dispach(deleteAll())} className='p-[10px_30px] md:p-[13px_50px] text-[15px]  text-red-500 border-2 rounded-[10px] '>Remove all</button></div>
            </div>
            <div className='mt-[40px] md:ml-[70%] w-[100%] md:w-[30%] text-black  border-black border-[1px] rounded-[5px] flex flex-col items-start gap-[10px] p-[10px_20px] '>
                <p className='text-[25px] font-medium '>Cart Total</p>
                <div className=' font-mono flex items-center justify-between w-[100%] '>
                    <p>Subtotal:</p>
                    <p>${totalPrise}</p>
                </div>
                <div className=' font-mono flex items-center justify-between w-[100%] '>
                    <p>Shipping:</p>
                    <p>${totalPrise - totalDiscount}</p>
                </div>
                <div className='flex font-medium items-center justify-between w-[100%] '>
                    <p className=' text-[20px] '>Total:</p>
                    <p>${totalDiscount}</p>
                </div>
                <Link to='/checkout' className='m-auto' >
                    <button className='bg-[#DB4444] md:p-[15px_55px] p-[10px_55px] text-white text-[15px] rounded-[5px] mt-[15px] mb-[20px] '>Procees to checkout</button>
                </Link>
            </div>
        </div>
    )
}

export default AddTocart