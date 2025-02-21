import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/styles.css';
import { Navigation, Autoplay } from 'swiper/modules';
import type React from 'react';

export default function App({ sliders }: any) {
  const [smallScreen, setSmallScreen] = useState(false)
  const [mediumScreen, setMediumScreen] = useState(false)
  const handleSmallScreen = () => {
    return window.innerWidth >= 320 && window.innerWidth <= 600 ? setSmallScreen(true) : setSmallScreen(false)
  }
  const handleMediumScreen = () => {
    return window.innerWidth >= 768 && window.innerWidth <= 996  ? setMediumScreen(true) : setMediumScreen(false)
  }
  useEffect(() => {

    handleSmallScreen()
    handleMediumScreen()

    window.addEventListener('resize', () => handleSmallScreen())
    window.addEventListener('resize', () => handleMediumScreen())
  
    return () => {
    window.removeEventListener('resize', () => handleSmallScreen())
    window.removeEventListener('resize', () => handleMediumScreen())
    }
  }, [])

  return (
    <>
      <Swiper
        slidesPerView={smallScreen ? 1 : mediumScreen ? 3 : 4}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="project_sliders"
      >
        {
            sliders?.map((item: any, i: React.Key) => (
                <SwiperSlide key={i}>
                  <div className='w-full md:w-[240px] md:h-[250px] lg:w-[350px] h-[auto] lg:h-[300px] scale-100'>
                    <img src={item?.url} className='w-full h-full rounded-2xl' />
                  </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}