import {ImageUI} from "@/components/index";

const HotelAmenitiesCard = ({title , image , id}) => {
  return (
      <div data-aos={'fade-up'} data-aos-delay={id*100} className={'flex flex-col items-center gap-2 md:gap-4 text-white text-center border-[0.2px] border-white p-5 md:p-10'}>
        <div className={'relative w-14 h-14'}>
          <ImageUI  src={image} objectFitContain={true} alt={title}/>
        </div>
        <span className={'w-[0.5px] h-8 bg-white'} ></span>
        <h3 className={'md:text-2xl  font-forum' }>
          {title}
        </h3>
      </div>
  );
};

export default HotelAmenitiesCard;