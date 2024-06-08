import {Swiper, SwiperSlide} from "swiper/react";
import {  Navigation, Pagination} from "swiper/modules";
import {ImageUI} from "@/components/";
import {GrPrevious, GrNext} from "react-icons/gr";

const Slider = ({
                  priority = false,
                   Quality,
                  card, images
                }) => {


  return (

        <Swiper
            loop={true}
            className={` w-full h-full relative room-slider`}
            spaceBetween={30}
            pagination={{
              clickable: true,
              el: ".inner-pagination",
            }}
            navigation={{
              nextEl: ".button-next-btn",
              prevEl: ".button-prev-btn",
            }}
            modules={[  Navigation, Pagination]}
        >

          {
            images?.map(item => (

          <SwiperSlide key={item?.id} className={`w-full h-full`}>
              <div className={`w-full h-full relative`}>
                <ImageUI isBorder={true} src={item?.image} alt={'banner'} quality={Quality} priority={priority}
                         imageStyle={'object-center h-full'}
                         card={card || false}/>

              </div>

          </SwiperSlide>
            ))
          }
            <div className="absolute w-full h-full left-0 top-0 z-20  flex-col justify-between flex p-3">
              <div/>
              <div className={'flex justify-between items-center w-full '}>
                <button className="cursor-pointer text-currentBlue relative z-10 p-2 border border-white hover:bg-currentBlue hover:text-white button-prev-btn bg-white flex justify-center items-center rounded-full ">
                  <GrPrevious className="text-lg"/>
                </button>
                <button className="cursor-pointer text-currentBlue relative z-10 p-2 border border-white bg-white flex justify-center items-center rounded-full hover:bg-currentBlue hover:text-white  button-next-btn ">
                  <GrNext className="text-lg"/>
                </button>
              </div>
              <div className={' flex justify-center !items-center w-full'}>
                <div className="inline-flex items-center gap-x-4 !w-fit inner-pagination"></div>
              </div>
            </div>
        </Swiper>
  );
};

export default Slider;
