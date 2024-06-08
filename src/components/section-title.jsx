
const SectionTitle = ({title  , subTitle , modeBlue}) => {
  return (
      <div className={`${modeBlue ? 'gap-2 md:gap-5'  :'gap-y-6 md:gap-y-10' }   flex flex-col items-center  `}>
        <h2 data-aos="fade-up" className={`text-3xl md:text-5xl font-forum inline-block  font-normal relative text-center
        ${modeBlue ? 'text-white content-none' : "text-currentBlue before:content-[''] before:absolute before:w-[90%] before:h-[1px] before:bg-currentBlue before:-bottom-1 md:before:-bottom-2  before:left-[5%] after:content-[''] after:absolute after:w-[60%] after:h-[1px] after:bg-currentBlue after:-bottom-3  md:after:-bottom-5  after:left-[20%]" }
         `}>
          {
            title
          }
        </h2>
        {
          subTitle &&
        <p data-aos="fade-up" data-aos-delay={50} className={`text-sm md:text-base lg:text-lg ${modeBlue ? 'text-white' :'text-currentBlack'} font-jost  w-full md:w-[90%] text-center font-normal`}>
          {subTitle}
        </p>
        }
      </div>
  );
};

export default SectionTitle;