import {FaStar} from "react-icons/fa";
import {ImageUI} from "@/components/index";

const ReviewsCard = ({image}) => {
  return (
      <div className={'space-y-3 font-jost border boder-currentBlue p-10'}>
        <div className={'flex gap-2 '}>
          <FaStar className={'text-lg text-[#E77C40]'} />
          <FaStar className={'text-lg text-[#E77C40]'} />
          <FaStar className={'text-lg text-[#E77C40]'} />
          <FaStar className={'text-lg text-[#E77C40]'} />
        </div>
        <h5 className={' text-lg md:text-xl text-currentBlue'}> Один из любимых отелей в Ташкенте! </h5>
        <p className={'text-currentBlack'}>
          «Красивый отель! Великолепный завтрак! Отличное расположение! Просторные комфортные номера! Вежливый персонал!»
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
              Svetlana
            </h6>
            <p className={'text-sm'}>
              Россия
            </p>
          </div>
        </div>

      </div>
  );
};

export default ReviewsCard;