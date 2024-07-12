"use client"
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import MenuCard from "./MenuCard";

const TrandingMen = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json'); 
      const data = await res.json();
      setMenuItems(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2
        id="why-simply-good-food"
        className="text-3xl text-center leading-9 font-extrabold text-gray-900 mb-6"
      >
        New & Trending Menu
      </h2>

      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
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
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {menuItems.map((item) => (
          <SwiperSlide key={item.id}>
            <MenuCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrandingMen;
