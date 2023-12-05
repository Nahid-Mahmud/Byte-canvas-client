
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div className=''>
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full max-h-[80vh]' src="https://i.ibb.co/RNHHWLh/sale3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full max-h-[80vh]' src="https://i.ibb.co/5vR842Y/sale2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full max-h-[80vh]' src="https://i.ibb.co/RgTkWTw/sale1.jpg" alt="" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Slider;


// https://i.ibb.co/RNHHWLh/sale3.jpg
// https://i.ibb.co/5vR842Y/sale2.jpg
// https://i.ibb.co/RgTkWTw/sale1.jpg