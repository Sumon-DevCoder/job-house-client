// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Aos from "aos";
import { useEffect } from "react";

const FeatuesCompany = () => {
  // aos animation
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-200 to-slate-900 p-10  ">
      <div
        className="text-center text-xl  md:text-3xl font-bold"
        data-aos="fade-left"
      >
        More than <span className="font-bold">50k recruiters</span> from leading
        tech companies are hiring
      </div>
      <div className="mt-10 container m-auto ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-md"
        >
          <SwiperSlide data-aos-offset="500" data-aos-duration="500">
            <div className="grid grid-cols-3 md:grid-cols-6  gap-5 md:gap-10   container m-auto px-20">
              <div>
                <img src="/images/brand_logo/1.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/2.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/3.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/4.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/5.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/6.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/7.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/8.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/9.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/10.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/11.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/12.png" alt="brand logo" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-5 md:gap-10 container m-auto px-20">
              <div>
                <img src="/images/brand_logo/13.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/14.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/15.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/16.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/17.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/18.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/19.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/20.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/21.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/22.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/23.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/24.png" alt="brand logo" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-5 md:gap-10 container m-auto px-20">
              <div>
                <img src="/images/brand_logo/25.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/26.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/27.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/28.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/29.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/30.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/31.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/32.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/1.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/5.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/3.png" alt="brand logo" />
              </div>
              <div>
                <img src="/images/brand_logo/12.png" alt="brand logo" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FeatuesCompany;
