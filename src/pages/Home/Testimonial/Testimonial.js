import React from 'react';
import author1 from '../../../assets/images/testimonial/client-3.webp';
import author2 from '../../../assets/images/testimonial/client-4.webp';
import author3 from '../../../assets/images/testimonial/client-5.webp';
import testimonialBg from '../../../assets/images/testimonial/testimonial-bg.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css/navigation';
import SingleTestimonial from './SingleTestimonial';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Alan Martinexx",
            img: author1,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit cupiditate, delectus quis enim iusto repellat libero porro perspiciatis consequuntur similique provident quo fugiat quidem. Blanditiis dignissimos ducimus alias nam commodi placeat delectus praesentium ipsum!'
        },
        {
            id: 2,
            name: "Rebecka Filson",
            img: author2,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit cupiditate, delectus quis enim iusto repellat libero porro perspiciatis consequuntur similique provident quo fugiat quidem. Blanditiis dignissimos ducimus alias nam commodi placeat delectus praesentium ipsum!'
        },
        {
            id: 3,
            name: "Rebecka Filson",
            img: author3,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit cupiditate, delectus quis enim iusto repellat libero porro perspiciatis consequuntur similique provident quo fugiat quidem. Blanditiis dignissimos ducimus alias nam commodi placeat delectus praesentium ipsum!'
        },
    ]
    return (
        <div>
            <div className="pt-2" style={{backgroundImage:`url(${testimonialBg})`, height:"400px", backgroundRepeat:"no-repeat"}}>
                <h4 className="text-center px-3 py-2 mx-auto rounded text-white mt-3" style={{width:"200px", backgroundColor: "#e8604c"}}>testimonial</h4>
                <div>
                    <p className="fs-2 text-center text-white">Positive feedbacks from our clients & blogers</p>
                </div>
            </div>
            <div class="mx-auto" style={{marginTop: "-180px", width:"75%"}}>
            <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1
            },
            768: {
                spaceBetween:30,
              slidesPerView: 2
            },
            1024: {
                spaceBetween:50,
              slidesPerView: 2
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {
            testimonials.map(testimonial => <SwiperSlide key={testimonial.id}><SingleTestimonial
              key={testimonial.id}
              testimonial={testimonial}
            ></SingleTestimonial></SwiperSlide>)
          }
        </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;