import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiperHome/swiper.css';
import ImgSwiper1 from '../../images/Frame 560.png'
import { Autoplay, Pagination } from 'swiper/modules';
import IMgSwiper2 from '../../images/Без названия.jpeg'

export default function SwiperHome() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="homeSwiper"
      >
        <SwiperSlide><img className='imgHome' src={ImgSwiper1} alt="" /></SwiperSlide>
        <SwiperSlide>
          <div className='iphone16pro'>
            <div>
              <p className='iphone16'>iPhone 16 PRO</p>
              <p>UP to 10% off Voucher</p>
            </div>
            <img className='imgHome' src={IMgSwiper2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide><img className='imgHome' src="data:image/jpeg;base64,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" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgHome' src="data:image/jpeg;base64,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" alt="" /></SwiperSlide>
        <SwiperSlide><img className='imgHome' src={ImgSwiper1} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
