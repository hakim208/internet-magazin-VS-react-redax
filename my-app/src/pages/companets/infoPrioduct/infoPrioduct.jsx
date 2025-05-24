import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { infoProduct } from '../../../entities/counter/counterSlece'
import ImgFive from '../../images/Five star.png'
import ImgDeliv from '../../images/icon-delivery.png'
import { SwiperProduct } from '../../lazy'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useNavigate, useParams } from 'react-router-dom'

function ThumbnailPlugin(mainRef) {
    return (slider) => {
        function removeActive() {
            slider.slides.forEach((slide) => {
                slide.classList.remove("active")
            })
        }
        function addActive(idx) {
            slider.slides[idx].classList.add("active")
        }

        function addClickEvents() {
            slider.slides.forEach((slide, idx) => {
                slide.addEventListener("click", () => {
                    if (mainRef.current) mainRef.current.moveToIdx(idx)
                })
            })
        }

        slider.on("created", () => {
            if (!mainRef.current) return
            addActive(slider.track.details.rel)
            addClickEvents()
            mainRef.current.on("animationStarted", (main) => {
                removeActive()
                const next = main.animator.targetIdx || 0
                addActive(main.track.absToRel(next))
                slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
            })
        })
    }
}
const InfoProduct = () => {
    const info = useSelector((state) => state.counter.info)
    let API = import.meta.env.VITE_API_URL
    const dispach = useDispatch()
    let navigation = useNavigate()
    const { id } = useParams()


    useEffect(() => {
        dispach(infoProduct({ id, navigation }))
    }, [])

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
    })
    const [thumbnailRef] = useKeenSlider(
        {
            initial: 0,
            slides: {
                perView: 4,
                spacing: 10,
            },
        },
        [ThumbnailPlugin(instanceRef)])


    return (
        <div className='mt-[100px] w-[90%] m-auto mb-[100px] '>
            <div className='flex md:flex-row flex-col gap-[50px] '>
                <div className='flex flex-col w-[100%] md:w-[65%] '>
                    <div ref={sliderRef} className="keen-slider">
                        {info.images && info.images.map((e) => (
                            <div className="keen-slider__slide number-slide1 w-[70%] " key={e.id} >
                                <img
                                    className="w-[100%] md:h-[400px] "
                                    src={`${API}/images/${e.images}`}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                    <div ref={thumbnailRef} className="keen-slider flex gap-2 mt-4 h-[90px] ">
                        { info.images && info.images.map((e, i) => (
                            <div key={i} className="keen-slider__slide cursor-pointer border-2 border-transparent rounded hover:border-red-500 transition-all duration-300">
                                <img src={`${API}/images/${e.images}`} alt="" className="w-[100%] h-[100%] object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-[100%] flex flex-col items-start gap-[10px] md:w-[35%] '>
                    <p className='text-[20px] font-medium '>{info.productName}</p>
                    <div className='flex items-center gap-[10px] '>
                        <img src={ImgFive} alt="" />
                        <p className='text-gray-400 text-[10px] '>(150 Reviews)</p>
                        <p className='text-green-500'>{info.hasDiscount ? "In Stock" : "Stock"}</p>
                    </div>
                    <p className='text-[25px] font-medium '>${info.price}</p>
                    <p className='text-gray-400  '>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    <p className='text-[15px] font-medium '>Colours: <span className={`text-[10px]`}>{info.color}</span> </p>
                    <div className='flex items-center gap-[10px] '>
                        <p className='font-medium mr-[10px] '>Size:</p>
                        <button className='w-[30px] h-[30px] rounded-[5px] hover:bg-[#DB4444] hover:text-white border-gray-400 border-2 hover:border-white '>XS</button>
                        <button className='w-[30px] h-[30px] rounded-[5px] hover:bg-[#DB4444] hover:text-white border-gray-400 border-2 hover:border-white '>S</button>
                        <button className='w-[30px] h-[30px] rounded-[5px] hover:bg-[#DB4444] hover:text-white border-gray-400 border-2 hover:border-white '>M</button>
                        <button className='w-[30px] h-[30px] rounded-[5px] hover:bg-[#DB4444] hover:text-white border-gray-400 border-2 hover:border-white '>L</button>
                        <button className='w-[30px] h-[30px] rounded-[5px] hover:bg-[#DB4444] hover:text-white border-gray-400 border-2 hover:border-white '>XL</button>
                    </div>
                    <div className='flex items-center justify-between w-[100%] '>
                        <div className='flex items-center border-2 w-[153px] rounded-[5px] '>
                            <button className='w-[40px] h-[40px] rounded-l-[5px] border-gray-400 border-[1px] hover:bg-[#DB4444] hover:text-white  hover:border-white '>-</button>
                            <button className='w-[70px] h-[40px]'>2</button>
                            <button className='w-[40px] h-[40px] rounded-r-[5px] border-gray-400 border-[1px] hover:bg-[#DB4444] hover:text-white  hover:border-white '>+</button>
                        </div>
                        <button className='bg-[#DB4444] hidden md:block text-white rounded-[5px] w-[150px] h-[40px] '>Buy Now</button>
                        <div className='p-[7px] hover:text-white hover:bg-red-500 hover:border-white rounded-[5px] border-2 ] '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>
                    </div>
                    <div className='w-[100%] mt-[20px] border-2 rounded-[10px] '>
                        <div>
                            <div className='flex items-center gap-[10px] p-[10px] border-b-2 w-[100%] '>
                                <img src={ImgDeliv} alt="" />
                                <div>
                                    <p>Free Delivery</p>
                                    <p>Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-[30px] p-[10px]  w-[100%] '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                                <div>
                                    <p>Return Delivery</p>
                                    <p>Free 30 Days Delivery Returns. Details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default InfoProduct