import React, { useEffect } from 'react'
import Imgheder from '../images/Group 1116606595.png'
import { Link, NavLink } from 'react-router'
import ImgSearch from '../images/Component 2.png'
import ImgLike from '../images/Wishlist.png'
import ImgKarzina from '../images/Cart1.png'
import ImgUser from '../images/user (1).png'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useDispatch, useSelector } from 'react-redux'
import { totalproduct } from '../../entities/counter/counterSlece'

const Heder = () => {
    const totalP = useSelector((state) => state.counter.totalP)
    let wishlistUser = useSelector((state) => state.counter.wishlist)
    let token = localStorage.getItem("token")

    const dispach = useDispatch()

    function deleteToken() {
        localStorage.removeItem("token")
        window.location = "/"
    }
    useEffect(() => {
        dispach(totalproduct())
    }, [])
    return (
        <div className='fixed top-0 left-0 w-full z-50  shadow-[0px_0px_5px_gray] bg-[#FFFFFF]'>
            <div className=' p-[10px_10px] flex items-center justify-between w-[92%] m-auto '>
                <img className='hidden md:flex ' src={Imgheder} alt="" />
                <div className='flex items-center gap-[20px] '>
                    <Sheet asChild>
                        <SheetTrigger><p className='block md:hidden text-[30px] font-bold '>≡</p></SheetTrigger>
                        <SheetContent side="left" className="w-[50%]">
                            <SheetHeader>
                                <SheetTitle><img src={Imgheder} className='w-[120px] mb-[20px] ' alt="" /></SheetTitle>
                                <SheetDescription>
                                    <div className='flex flex-col gap-[10px] '>
                                        <NavLink to='/'>
                                            <div className='flex border-2 text-gray-100 items-center gap-[10px] p-[10px] rounded-[5px] hover:bg-gray-100 '>
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24"
                                                    strokeWidth="1.5" stroke="currentColor"
                                                    className="w-6 h-6 text-blue-600">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M3 9.75L12 3l9 6.75V19.5a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 19.5V9.75z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M9 22V12h6v10" />
                                                </svg>
                                                <p className='text-[20px] text-black font-[500] '>Home</p>
                                            </div>
                                        </NavLink>
                                        <NavLink to='contact'>
                                            <div className='flex border-2 text-gray-100 items-center gap-[10px] p-[10px] rounded-[5px] hover:bg-gray-100 '>
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24"
                                                    strokeWidth="1.5" stroke="currentColor"
                                                    className="w-6 h-6 text-red-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75m19.5 0H2.25" />
                                                </svg>
                                                <p className='text-[20px] text-black font-[500] '>Contact</p>
                                            </div>
                                        </NavLink>
                                        <NavLink to='abaut'>
                                            <div className='flex border-2 text-gray-100 items-center gap-[10px] p-[10px] rounded-[5px] hover:bg-gray-100 '>
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24"
                                                    strokeWidth="1.5" stroke="currentColor"
                                                    className="w-6 h-6 text-purple-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                </svg>
                                                <p className='text-[20px] text-black font-[500] '>Abaut</p>
                                            </div>
                                        </NavLink>
                                        <NavLink to='signup'>
                                            <div className='flex border-2 text-gray-100 items-center gap-[10px] p-[10px] rounded-[5px] hover:bg-gray-100 '>
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    fill="none" viewBox="0 0 24 24"
                                                    strokeWidth="1.5" stroke="currentColor"
                                                    className="w-6 h-6 text-green-600">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M4.501 20.118a7.5 7.5 0 0114.998 0" />
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3" />
                                                </svg>
                                                <p className='text-[20px] text-black font-[500] '>Sigin Up</p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                    <p className='block md:hidden text-[30px] font-bold  '>Exclusive</p>
                </div>
                <div className='hidden md:flex gap-[40px]'>
                    <NavLink to="/"
                        className={({ isActive }) =>
                            isActive ? "border-b-2 text-[#DB4444] font-[600] " : "border-0"
                        } >
                        Home
                    </NavLink>
                    <NavLink to='contact' className={({ isActive }) => isActive ? "border-b-2 text-[#DB4444] font-[600] " : "border-0"} >
                        Contact
                    </NavLink>
                    <NavLink to='abaut' className={({ isActive }) => isActive ? "border-b-2 text-[#DB4444] font-[600] " : "border-0"} >
                        Abaut
                    </NavLink>
                    <NavLink to='signup' className={({ isActive }) => isActive ? "border-b-2 text-[#DB4444] font-[600] " : "border-0"} >
                        Sign Up
                    </NavLink>
                </div>
                <div className='md:flex items-center gap-[20px]'>
                    <div className=' bg-[#F5F5F5] hidden md:flex items-center gap-[20px] p-[5px_10px] rounded-[7px] '>
                        <input type="text" placeholder='What are you looking for?' className='text-[13px] border-0 outline-0 ' />
                        <img src={ImgSearch} alt="" className='w-[17px]' />
                    </div>
                    <div className='flex items-center gap-[10px] '>
                        <NavLink to='wshlist'>
                            <div>
                                {wishlistUser.length > 0 ? <p className='bg-red-500 text-[10px] hidden md:block w-[15px] h-[15px] absolute ml-[15px] mt-[-5px] rounded-[50%] text-white text-center '>{wishlistUser.length}</p> : <p></p>}
                                <img className='w-[25px] hidden md:flex' src={ImgLike} alt="" />
                            </div>
                        </NavLink>
                        {
                            token && <NavLink to='addtocart'>
                                <div>
                                    {totalP > 0 ? <p className='bg-red-500 text-[10px] w-[15px] h-[15px] absolute ml-[15px] mt-[-5px] rounded-[50%] text-white text-center '>{totalP}</p> : <p></p>}
                                    <img className='w-[25px] ' src={ImgKarzina} alt="" />
                                </div>
                            </NavLink>
                        }
                        <Popover>
                            <div className='md:block hidden '>
                                <div className=''>
                                    {
                                        token && <PopoverTrigger asChild>
                                            <img className='w-[25px] ' src={ImgUser} alt="" />
                                        </PopoverTrigger>
                                    }
                                </div>
                                <PopoverContent>
                                    <div className='flex flex-col gap-[10px] '>
                                        {
                                            token && <Link to='/account'>
                                                <div className='flex gap-[10px] items-center '>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                                    </svg>
                                                    <p>Account</p>
                                                </div>
                                            </Link>
                                        }
                                        <Link to='/order'>
                                            <div className='flex items-center gap-[10px] '>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                                </svg>
                                                <p>My Order</p>
                                            </div>
                                        </Link>
                                        <Link to='/wshlist' >
                                            <div className='flex items-center gap-[10px] md:hidden'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                </svg>
                                                <p>Wishlist</p>
                                            </div>
                                        </Link>
                                        {
                                            token && <div onClick={deleteToken} className='flex items-center gap-[10px] '>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                                </svg>
                                                <p>Logout</p>
                                            </div>
                                        }
                                    </div>
                                </PopoverContent>
                            </div>
                        </Popover>
                        <Popover>
                            <div className='md:hidden block '>
                                <PopoverTrigger asChild>
                                    <img className='w-[25px] ' src={ImgUser} alt="" />
                                </PopoverTrigger>
                                <PopoverContent>
                                    <div className='flex flex-col gap-[10px] '>
                                        {
                                            token && <Link to='/account'>
                                                <div className='flex gap-[10px] items-center '>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                                    </svg>
                                                    <p>Account</p>
                                                </div>
                                            </Link>
                                        }
                                        <Link to='/order'>
                                            <div className='flex items-center gap-[10px] '>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                                </svg>
                                                <p>My Order</p>
                                            </div>
                                        </Link>
                                        <Link to='/wshlist' >
                                            <div className='flex items-center gap-[10px] md:hidden'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                </svg>
                                                <p>Wishlist</p>
                                            </div>
                                        </Link>
                                        {
                                            token && <div onClick={deleteToken} className='flex items-center gap-[10px] '>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                                </svg>
                                                <p>Logout</p>
                                            </div>
                                        }
                                    </div>
                                </PopoverContent>
                            </div>
                        </Popover>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Heder
