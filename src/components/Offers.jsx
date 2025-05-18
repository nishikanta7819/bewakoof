import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../css/offers.css";

const Offers = () => {
  return (
    <>
      <div className="offers">
        <div className="offers-title">
          <p>offers</p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://images.bewakoof.com/uploads/grid/app/1x1-winterwear-com-1736597790.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.bewakoof.com/uploads/grid/app/1x1-joggers-common--1--1736597788.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Buy-2-OS-999-Common-1x1-HC-Banner--1--1736597682.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Pants-edit-60-Off-Common-1x1-HC-Banner-1736598366.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Offers;
