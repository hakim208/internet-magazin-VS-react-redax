import React from 'react'
import ImgBySales from '../../images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png'

const CategoriesBySales = () => {
  return (
    <div className='w-[90%] m-auto mb-[70px] '>
      <div className='bg-[#000000] flex flex-col items-center gap-[40px] p-[30px_10px] md:p-[50px_100px] md:flex-row  '>
        <div className='flex flex-col gap-[10px] items-start '>
            <p className='text-[#00FF66] text-[15px] font-[500] '>Categories</p>
            <p className='text-[35px] text-white md:text-[50px] '>Enhance Your Music Experience</p>
            <button className='bg-[#00FF66] p-[13px_35px] md:p-[17px_50px] rounded-[3px] text-black font-[400] hover:bg-red-400 hover:text-white '>Buy Now!</button>
        </div>
        <img className='w-[80%] md:w-[50%] ' src={ImgBySales} alt="" />
      </div>
    </div>
  )
}

export default CategoriesBySales
