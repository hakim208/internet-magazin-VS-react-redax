import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ImgFiveStart from '../../images/Five star.png'
import { addTocart, addWishlist, getProduct, infoProduct, newData } from '../../../entities/counter/counterSlece';
import { useDispatch, useSelector } from 'react-redux';
import "./explorProduct.css"
import { useNavigate } from 'react-router';

const ExploreOurProducts = () => {
    let API = import.meta.env.VITE_API_URL
    const [inpBrands, setInpBarnds] = useState(null)
    let wishlistUser = useSelector((state) => state.counter.wishlist)
    const data = useSelector((state) => state.counter.data)

    const [filCategory, setfilCategory] = useState("")
    const [filName, setfilName] = useState("")
    const [filmin, setfilmin] = useState("")
    const [filmax, setfilmax] = useState("")

    const dispach = useDispatch()
    const navigation = useNavigate()

    async function Apply() {
        try {
            let { data:data1 } = await axios.get(API + `/Product/get-products?MinPrice=${filmin}&MaxPrice=${filmax}&BrandId=${filName}`)
            console.log(data1.data);
            dispach(newData(data1.data.products))
            console.log(data);
            
            return data1
        } catch (error) {
            console.error(error);
        }
    }
    function info(id) {
        dispach(infoProduct({ id, navigation }))
    }
    console.log(inpBrands);
    useEffect(() => {
        dispach(getProduct())
    }, [])

    return (
        <div className='mt-[100px] w-[90%] m-auto mb-[100px] '>
            <div className='flex items-start mb-[20px] gap-[10px] justify-between md:flex-row flex-col '>
                <p className='text-[15px] text-gray-500 font-light '>Home / <span className='text-black '>Explore Our Products </span></p>
                <div className='md:hidden flex items-center justify-between w-[100%] p-[10px] border-2 text-gray-300 rounded-[7px] '>
                    <input type="text" placeholder='Search' className='text-black border-0 outline-0 ' />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start gap-[70px]  '>
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
                            <input name='searchByName' value={filName} onChange={(e) => setfilName(e.target.value)} type="radio" className='size-3' />
                            <p>Samsung</p>
                        </div>
                        <div className='flex items-center gap-[15px] '>
                            <input name='searchByName' value={filName} onChange={(e) => setfilName(e.target.value)} type="radio" className='size-3' />
                            <p>Apple</p>
                        </div>
                        <div className='flex items-center gap-[15px] '>
                            <input name='searchByName' value={filName} onChange={(e) => setfilName(e.target.value)} type="radio" className='size-3' />
                            <p>Huawei</p>
                        </div>
                        <div className='flex items-center gap-[15px] '>
                            <input name='searchByName' value={filName} onChange={(e) => setfilName(e.target.value)} type="radio" className='size-3' />
                            <p>Pocco</p>
                        </div>
                        <div className='flex items-center gap-[15px] '>
                            <input name='searchByName' value={filName} onChange={(e) => setfilName(e.target.value)} type="radio" className='size-3' />
                            <p>Lenovo</p>
                        </div>
                    </div>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '80px' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField value={filmin} onChange={(e) => setfilmin(e.target.value)} id="outlined-basic" label="Min" variant="outlined" />
                        <TextField value={filmax} onChange={(e) => setfilmax(e.target.value)} id="outlined-basic" label="Max" variant="outlined" />
                    </Box>
                    <button onClick={Apply} className='border-[#DB4444] border-[1px] text-[#DB4444] p-[10px] w-[100%] rounded-[5px] ' >Apply</button>
                </div>
                <div className='flex w-[80%] flex-wrap gap-[50px] md:gap-[40px] '>
                    {
                        data.length > 0 && data.map((e) => {
                            return (
                                <div className=' flex flex-col w-[41%] md:w-[200px] h-[200px] md:h-[300px] ' key={e.id} >
                                    <div className='box'>
                                        <div className='bg-[#F5F5F5] rounded-[10px] w-[100%] '>
                                            <div className='absolute md:ml-[11%] ml-[30%]  flex flex-col items-center gap-[10px]'>
                                                <div onClick={() => dispach(addWishlist(e))} className='p-[3px] rounded-[80px] '>
                                                    <svg style={{ color: wishlistUser.find((el) => el.id == e.id) ? "white" : "red", backgroundColor: wishlistUser.find((el) => el.id == e.id) ? "red" : "white" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-6 rounded-[50%] ">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                </div>
                                                <div onClick={() => info(e.id)} className='bg-white p-[3px] rounded-[80px] '>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 md:size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <button className='add' onClick={() => dispach(addTocart(e.id))} >Add To Cart</button>
                                            </div>
                                            <img className=' w-[100%]  md:h-[150px] h-[130px] ' src={`${API}/images/${e.image}`} alt="" />
                                        </div>
                                    </div>
                                    <p className='text-black font-[600] '>{e.productName}</p>
                                    <p className='text-red-800 font-[400]'>${e.price} <span className='text-gray-400 ml-[15px] line-through '>$120</span> </p>
                                    <div className='flex items-center gap-[10px] '>
                                        <img src={ImgFiveStart} alt="" />
                                        <span className='text-[13px] text-gray-400 '>(98)</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ExploreOurProducts
