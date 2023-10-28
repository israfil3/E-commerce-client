import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bag from '../../../assets/saliderImg/bags.png' ;
import bicycle from '../../../assets/saliderImg/bicycle.jpg' ;
import bottle from '../../../assets/saliderImg/bottpl2.jpg' ;
import electronic from '../../../assets/saliderImg/electronic.jpg' ;
import jaket from '../../../assets/saliderImg/jaket.jpg' ;
import Mobile from '../../../assets/saliderImg/Mobile-phones-1.jpg' ;
import motorChikle from '../../../assets/saliderImg/motorChikle.png' ;
import watch from '../../../assets/saliderImg/watch.jpg' 

import "./Slider.css"



const Slider = () => {
    return (
        <div className='w-[60%]  mx-auto my-10 rounded'>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{  delay: 3500,disableOnInteraction: false,}} pagination={{ clickable: true, }} navigation={true}modules={[Autoplay, Pagination, Navigation]} className="mySwiper rounded">
              <SwiperSlide className='bt'>
                    <img src={Mobile} alt="" />
                </SwiperSlide>
                <SwiperSlide className='bt'>
                    <img src={bicycle} alt="" />
                </SwiperSlide>
                <SwiperSlide className='bt'>
                    <img src={bottle} alt="" />
                </SwiperSlide>
                <SwiperSlide className='bt'>
                    <img src={electronic} alt="" />
                </SwiperSlide>
                <SwiperSlide className='bt'>
                    <img src={jaket} alt="" />
                </SwiperSlide>
                <SwiperSlide className='bt'>
                    <img src={motorChikle} alt="" />
                </SwiperSlide>
                <SwiperSlide className='bt'>
                    <img src={watch} alt="" />
                </SwiperSlide>
                <SwiperSlide className='bt'>
                    <img src={bag} alt="" />
                </SwiperSlide>
            </Swiper>
     </div>
    );
};

export default Slider;