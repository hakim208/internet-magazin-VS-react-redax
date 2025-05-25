import React, { useEffect } from 'react'
import './wishlist.css'
import { addTocart, addWishlist, deleteWishlis, infoProduct } from '../../entities/counter/counterSlece'
import { useDispatch } from 'react-redux'
import { data, useNavigate } from 'react-router'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperProduct from '../companets/swiperProduct/swiperProduct'
import axios from 'axios'

const Wishlist = () => {
  let wishlistUser = JSON.parse(localStorage.getItem('wishlist')) || []
  let API = import.meta.env.VITE_API_URL
  const dispach = useDispatch()
  const navigation = useNavigate()

  function info(id) {
    dispach(infoProduct({ id, navigation }))
  }

  return (
    <div className='mt-[100px] mb-[70px]'>
      <div className='flex items-center justify-between mb-[40px] w-[90%] m-auto '>
        <p>Wishlist (<span>{wishlistUser.length}</span>)</p>
        <button className='p-[10px_20px] md:p-[12px_30px] md:text-[14px] rounded-[5px] border-black border-2'>
          Move All To Bag
        </button>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
        className="w-[90%] m-auto mb-[70px] "
      >
        <div className=''>
          {wishlistUser.map((e) => (
            <SwiperSlide key={e.id}>
              <div className='flex flex-col items-start gap-[10px] w-[250px]'>
                <div className='BoxCart relative'>
                  <div className='absolute top-2 right-2 flex gap-2'>
                    <button
                      onClick={() => dispach(deleteWishlis(e))}
                      className='bg-white p-1 rounded-full shadow'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>

                    <button
                      onClick={() => info(e.id)}
                      className='bg-white p-1 rounded-full shadow'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 
                        7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 
                        7.178.07.207.07.431 0 .639C20.577 16.49 
                        16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      </svg>
                    </button>
                  </div>

                  <button className='addtoCart' onClick={() => dispach(addTocart(e.id))}>
                    Add To Cart
                  </button>

                  <img className='w-[250px] h-[200px]' src={`${API}/images/${e.image}`} alt={e.productName} />
                </div>

                <p className='text-[20px] font-bold text-black'>{e.productName}</p>
                <p className='text-[12px] font-[500] text-red-500'>
                  ${e.price} <span className='line-through ml-[10px] text-gray-400'>$145</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <SwiperProduct />
    </div>
  )
}

export default Wishlist
