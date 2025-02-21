import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Button } from '../common';
import { CarouselSlideOne, CarouselSlideTwo, CarouselSlideThree, CarouselSlideFour, CarouselSlideFive } from '@assets/images';

const sliders = [CarouselSlideOne, CarouselSlideTwo, CarouselSlideThree, CarouselSlideFour, CarouselSlideFive]
SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination ]);
const carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      style={{ zIndex: 1 }}
    >
      {sliders.map((item, i) => (
        <SwiperSlide key={i}>
            <section 
              className='w-full pt-40 min-h-[150vh] smm:pt-52 sm:min-h-[100vh] bg-no-repeat bg-cover bg-center md:min-h-[80vh] lg:min-h-[110vh] md:pt-44' 
              style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${item})`}}>
                <div className='container w-full mx-auto flex-col flex-wrap items-center justify-center text-center text-white md:w-3/4 md:mt-40 lg:w-2/4 lg:mt-15'>
                    <h6 className="text-xs text-[#fff] font-bold uppercase md:text-xl" data-aos='fade-up' data-aos-offset='100'>Fastcash Global Nigeria</h6>
                    <h1 className=" text-4xl pt-5 font-bold md:text-6xl" data-aos='fade-down' data-aos-offset='100'>Financial Solutions</h1>
                    <h1 className=" text-4xl pt-5 font-bold md:text-6xl" data-aos='fade-down' data-aos-offset='100'>For A Brighter Future</h1>
                    <div className="flex flex-col gap-y-5 justify-center items-center space-x-4 mt-10 md:flex md:flex-row md:gap-y-0" data-aos='fade-up' data-aos-offset='100'>
                        <Button path="https://docs.google.com/forms/d/e/1FAIpQLSe2nvsxuPIdObeks1S6Fa1Tr5IJWZ4n4hqrSWM6GYyDH13Gdg/viewform?usp=preview" className="py-3 px-24 font-bold text-white bg-[#F56B1E] rounded-full baseline hover:text-[#F56B1E] hover:bg-[#F5E9E1]" text="Apply Now" />
                    </div>
                </div>
            </section>
        </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default carousel