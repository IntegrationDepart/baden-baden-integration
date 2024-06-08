import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination} from "swiper/modules";
import {FaStar} from "react-icons/fa";
import {ImageUI} from "@/components/index";
const ReviewsSlider = ({feedbacks}) => {

  return (

      <Swiper
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}

          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true,
            el: ".my-pagination-reviews",
          }}
          loop={true}
          modules={[Pagination]}
          className="w-full h-full relative mySwiper"
      >
        {
          feedbacks?.map((card, ind) => (
              <SwiperSlide key={ind}>
                <ReviewsCard title={card.title} descr={card.description} fullName={card.fullname}
                             country={card.country}/>
              </SwiperSlide>
          ))
        }
        <div className="relative  w-full flex items-center justify-center  mt-5 gap-x-5">
          <div className="inline-flex items-center gap-x-4 my-pagination-reviews pagintaion-slider"></div>
        </div>
      </Swiper>

  );
};


const ReviewsCard = ({image, title, descr, fullName, country}) => {
  return (
      <div className={'space-y-3 font-jost border border-currentBlue  p-5 md:p-10'}>
        <div className={'flex gap-2 '}>
          <FaStar className={'text-lg text-[#E77C40]'} />
          <FaStar className={'text-lg text-[#E77C40]'} />
          <FaStar className={'text-lg text-[#E77C40]'} />
          <FaStar className={'text-lg text-[#E77C40]'} />
        </div>
        <h5 className={' text-lg md:text-xl text-currentBlue'}>{title && title} </h5>
        <p className={'text-[#444444]'}>
          {descr && descr}
        </p>
        <div className={'flex gap-x-4'}>
          <div className={'relative w-[43px] h-[43px]  bg-red-300 rounded-full overflow-hidden shrink-0'}>
            {
                image &&
                <ImageUI src={image} />
            }
          </div>
          <div className={' text-sm md:text-base space-y-1'}>
            <h6 className={'text-currentBlue'}>
              {fullName && fullName}
            </h6>
            <p className={'text-sm'}>
              {country && country}
            </p>
          </div>
        </div>

      </div>
  );
};

export default ReviewsSlider;

