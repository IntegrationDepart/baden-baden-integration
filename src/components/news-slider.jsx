import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination} from "swiper/modules";
import {NewsCard} from "@/components/index";
import {langSelect} from "@/helper";
import {useSelector} from "react-redux";

const NewsSlider = ({news}) => {
  const {lang} = useSelector(state => state.langSlice)

  return (
      <div className={'relative pb-5'}>
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
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            pagination={{
              clickable: true,
              el: ".my-pagination-cards",
            }}
            loop={true}
            modules={[Pagination]}
            className="w-full  h-full relative mySwiper"
        >
          {
            news?.map(item => (
                <SwiperSlide key={item?.id} className={"h-full pt-[4%]"}>
                  <NewsCard image={item?.image} link={item?.link}
                            title={langSelect(lang, item?.title_ru, item?.title_en, item?.title_uz)}
                            subTitle={langSelect(lang, item?.text_ru, item?.text_en, item?.text_uz)}/>
                </SwiperSlide>
            ))
          }

        </Swiper>
        <div className="relative  w-full flex items-center justify-center  mt-5 gap-x-5">
          <div className="inline-flex items-center gap-x-4 my-pagination-cards pagintaion-slider"></div>
        </div>
      </div>

  );
};

export default NewsSlider;