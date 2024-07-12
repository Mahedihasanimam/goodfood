"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const testimonials = [
  {
    name: "Anjelina",
    role: "Student",
    message: "Thank you for all, your service was soo good and safe, I will suggest my friends about your fantastic services.",
    image: "https://i.ibb.co/4JyZHCj/profile-pic-7.png"
  },
  {
    name: "John Doe",
    role: "Teacher",
    message: "The support team was excellent and very responsive. I highly recommend this service to everyone.",
    image: "https://i.ibb.co/s1my3rx/photo-1438761681033-6461ffad8d80.jpg"
  },
  {
    name: "Mary Smith",
    role: "Engineer",
    message: "An outstanding experience from start to finish. The team was professional and efficient.",
    image: "https://i.ibb.co/JH6jVDR/photo-1603415526960-f7e0328c63b1.jpg"
  },
  {
    name: "Michael Brown",
    role: "Designer",
    message: "I'm very pleased with the service. It was exactly what I needed and exceeded my expectations.",
    image: "https://i.ibb.co/JvV4gBF/istockphoto-587218174-170667a.webp"
  }
];

const Testimonials = () => {
  return (
    <div className="container mx-auto my-12 px-4">
      <h3 className="text-4xl text-center my-8 font-semibold">Feedbacks</h3>
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
          1024: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="shadow-md rounded-lg p-6 mb-4 flex items-center min-h-60 bg-[#F7F7F7] py-12 border">
              <Image
                height={64}
                width={64}
                className="w-16 h-16 rounded-full mr-4"
                src={item.image}
                alt={item.name}
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-yellow-500">{item.role}</p>
                <p className="text-gray-600 mt-2">{item.message}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
  );
};

export default Testimonials;