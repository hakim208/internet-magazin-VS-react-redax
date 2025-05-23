import React from 'react'
import ImgSlide from '../images/Side Image.png'
import ImgUser1 from '../images/Frame 874.png'
import ImgUser2 from '../images/Frame 875.png'
import ImgUser3 from '../images/Frame 876.png'
import ImgInstagram from '../images/Frame 877.png'

const About = () => {
  return (
    <div className='mt-[100px] w-[90%] m-auto mb-[100px] '>
      <p className='font-mono text-gray-300 '>Home / <span className='text-black '>About</span></p>
      <div className='mt-[60px] flex flex-col md:flex-row items-center justify-between gap-[20px] '>
        <div className='flex flex-col items-start gap-[30px] md:w-[50%] w-[100%] '>
          <p className='text-[30px] font-[500] md:text-[70px] '>Our Story</p>
          <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <img src={ImgSlide} alt="" />
      </div>
      <div className='mt-[70px] flex flex-col md:flex-row justify-between gap-[30px] '>
        <div className='hover:bg-[#DB4444] hover:text-white w-[100%] md:w-[23%] text-center border-2 rounded-[6px] flex flex-col items-center gap-[10px] p-[20px_0px] '>
          <div className='hover:bg-[#E67C7C]  p-[10px] bg-[#C1C1C1] w-[92px] rounded-[50%] m-auto '>
            <div className='hover:bg-white hover:text-black p-[10px] bg-black text-white w-[70px] rounded-[50%] '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
            </div>
          </div>
          <p className='text-[40px] font-medium '>10.5k </p>
          <p>Sallers active our site</p>
        </div>
        <div className='hover:bg-[#DB4444] hover:text-white w-[100%] md:w-[23%] text-center border-2 rounded-[6px] flex flex-col items-center gap-[10px] p-[20px_0px] '>
          <div className='p-[10px] bg-[#C1C1C1] hover:bg-[#E67C7C] w-[92px] rounded-[50%] m-auto '>
            <div className='p-[10px] bg-black hover:bg-white hover:text-black text-white w-[70px] rounded-[50%] '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-13">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
          </div>
          <p className='text-[40px] font-medium '>33k</p>
          <p>Mopnthly Produduct Sale</p>
        </div>
        <div className='hover:bg-[#DB4444] hover:text-white w-[100%] md:w-[23%] text-center border-2 rounded-[6px] flex flex-col items-center gap-[10px] p-[20px_0px] '>
          <div className='hover:bg-[#E67C7C]  p-[10px] bg-[#C1C1C1] w-[92px] rounded-[50%] m-auto '>
            <div className='hover:bg-white hover:text-black p-[10px] bg-black text-white w-[70px] rounded-[50%] '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </div>
          </div>
          <p className='text-[40px] font-medium '>45.5k </p>
          <p>Customer active in our site</p>
        </div>
        <div className='hover:bg-[#DB4444] hover:text-white w-[100%] md:w-[23%] text-center border-2 rounded-[6px] flex flex-col items-center gap-[10px] p-[20px_0px] '>
          <div className='hover:bg-[#E67C7C]  p-[10px] bg-[#C1C1C1] w-[92px] rounded-[50%] m-auto '>
            <div className='hover:bg-white hover:text-black p-[10px] bg-black text-white w-[70px] rounded-[50%] '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-13">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
              </svg>
            </div>
          </div>
          <p className='text-[40px] font-medium '>25k </p>
          <p>Anual gross sale in our site</p>
        </div>
      </div>
      <div className='mt-[60px] flex flex-col md:flex-row items-center justify-between gap-[30px] '>
        <div className='flex flex-col gap-[10px] items-start '>
          <img src={ImgUser1} alt="" />
          <p className='text-[30px] font-bold '>Tom Cruise</p>
          <p>Founder & Chairman</p>
          <img src={ImgInstagram} alt="" />
        </div>
        <div className='flex flex-col gap-[10px] items-start '>
          <img src={ImgUser2} alt="" />
          <p className='text-[30px] font-bold '>Emma Watson</p>
          <p>Managing Director</p>
          <img src={ImgInstagram} alt="" />
        </div>
        <div className='flex flex-col gap-[10px] items-start '>
          <img src={ImgUser3} alt="" />
          <p className='text-[30px] font-bold '>Will Smith</p>
          <p>Product Designer</p>
          <img src={ImgInstagram} alt="" />
        </div>
      </div>
      <div className='w-[90%] md:w-[80%] mt-[100px] mb-[180px] m-auto flex flex-col gap-[30px] md:flex-row items-center justify-between '>
                    <div className='flex flex-col items-center gap-[10px] '>
                        <div className='bg-[#C1C1C1] p-[10px] rounded-[50%] '>
                            <div className='bg-[#000000] p-[10px] rounded-[50%] '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                            </div>
                        </div>
                        <p className='text-black font-[500] text-[20px] md:text-[25px] '>FREE AND FAST DELIVERY</p>
                        <p className='text-black '>Free delivery for all orders over $140</p>
                    </div>
                    <div className='flex flex-col items-center gap-[10px] '>
                        <div className='bg-[#C1C1C1] p-[10px] rounded-[50%] '>
                            <div className='bg-[#000000] p-[10px] rounded-[50%] '>
                                <svg xmlns="http://www.w3.org/2000/svg" width={40} color='white' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headset-icon lucide-headset"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" /><path d="M21 16v2a4 4 0 0 1-4 4h-5" /></svg>
                            </div>
                        </div>
                        <p className='text-black font-[500] text-[20px] md:text-[25px] '>FREE AND FAST DELIVERY</p>
                        <p className='text-black '>Free delivery for all orders over $140</p>
                    </div>
                    <div className='flex flex-col items-center gap-[10px] '>
                        <div className='bg-[#C1C1C1] p-[10px] rounded-[50%] '>
                            <div className='bg-[#000000] p-[10px] rounded-[50%] '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                </svg>
                            </div>
                        </div>
                        <p className='text-black font-[500] text-[20px] md:text-[25px] '>FREE AND FAST DELIVERY</p>
                        <p className='text-black '>Free delivery for all orders over $140</p>
                    </div>
                </div>
    </div>
  )
}

export default About
