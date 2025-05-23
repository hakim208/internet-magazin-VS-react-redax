import React from 'react'
import ImgEmail from '../images/icon-send.png'
import ImgSeti from '../images/Frame 741.png'

const Footer = () => {
  return (
    <div className='bg-[#000000] text-white font-[600] p-[50px_0px] '>
      <div className='w-[90%] m-auto flex flex-wrap gap-[20px] md:flex-row items-start  justify-between '>
        <div className='flex flex-col gap-[20px]'>
          <p className='text-[25px]'>Exclusive</p>
          <p>Subscribe</p>
          <p className='text-gray-300'>Get 10% off your first order</p>
          <div className='flex p-[3px] rounded-[4px] border-2 w-[67%] md:w-[100%] '>
            <input className='text-gray border-0 outline-0  ' type="text" placeholder='Enter your email' />
            <img src={ImgEmail} alt="" />
          </div>
        </div>
        <div className='flex flex-col gap-[20px]'>
          <p className='text-[25px]'>Support</p>
          <p className='text-gray-300'>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</p>
          <p className='text-gray-300'>exclusive@gmail.com</p>
          <p className='text-gray-300'>+88015-88888-9999</p>
        </div>
        <div className='flex flex-col gap-[20px]'>
          <p className='text-[25px]'>Account</p>
          <p className='text-gray-300'>My Account</p>
          <p className='text-gray-300'>Cart</p>
          <p className='text-gray-300'>Wishlist</p>
          <p className='text-gray-300'>Shop</p>
        </div>
        <div className='flex flex-col gap-[20px]'>
          <p className='text-[25px]'>Quick Link</p>
          <p className='text-gray-300'></p>Privacy Policy
          <p className='text-gray-300'>Terms Of Use</p>
          <p className='text-gray-300'>FAQ</p>
          <p className='text-gray-300'>Contact</p>
        </div>
        <div className='flex flex-col gap-[20px]'>
          <p className='text-[25px]'>Social </p>
          <img src={ImgSeti} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
