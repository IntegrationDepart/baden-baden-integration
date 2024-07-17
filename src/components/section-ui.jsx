'use client'
import {ImageUI, SectionTitle} from "@/components/index";

const SectionUI = ({children , subTitle , title ,modeBlue =false  , cityBg , isNoContainer ,isFalsePadding = false , isEmbroidery = false }) => {
  return (
      // bg-[url('/image/bg-noise.jpg')]
      <section

          className={`${isFalsePadding ? '' : 'pt-[50px] md:pt-20'}  ${modeBlue ? "bg-currentBlue" : 'bg-white'} relative `}>
        {
            cityBg &&
            <div className={" h-[400px] sm:h-[500px] left-0 md:left-[-10%] bottom-0 absolute w-full lg:w-[50%] "}>
              <ImageUI src={'/image/uzb-img.png'} objectFitContain={true} alt={'sectoin image'} imageStyle={'object-bottom'}/>
            </div>
        }
        {
          isEmbroidery &&
            <>

        <div className={'absolute left-0 top-0'}>
          <div className={` relative top-0 left-0
          before:content-[''] before:absolute before:top-0 before:left-0 before:hidden before:md:block before:w-[250px] before:h-[70px] before:border before:border-currentBlue
          
          after:hidden after:md:block after:content-[''] after:absolute after:top-0 after:left-0 after:w-[230px] after:h-[90px] after:border after:border-currentBlue
          `}></div>
        </div>
        <div className={'absolute right-0 top-0 hidden md:block'}>
          <div className={` relative
          before:content-[''] before:absolute before:-top-1 before:right-0 before:w-[70px] before:h-[150px] before:border-[0.5px] before:border-currentBlue
          after:content-[''] after:absolute after:-top-1 after:right-0 after:w-[90px] after:h-[130px] after:border-[0.5px] after:border-currentBlue
          
          `}></div>
        </div>
            </>
        }
        <div className={'space-y-5 md:space-y-10'}>
          {
              title &&
              <div className={'container'}>
                <SectionTitle subTitle={subTitle} title={title} modeBlue={modeBlue}/>
              </div>
          }
          <div className={`${isNoContainer ? '' : 'container'}  `}>

            {children}
          </div>
        </div>
      </section>
  );
};

export default SectionUI;