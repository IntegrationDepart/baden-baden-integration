import {HeaderBooking, ImageUI} from "@/components";
import BeReputationForm from "./be-forms/be-reputation-form";
const Header = ({title, image}) => {
  return (
      <>
        <section className='relative w-full h-screen overflow-hidden'>
          <div className={`w-full h-full relative z-[0] animate-scale-up-down-100s`}>
            <ImageUI src={image} alt={title} priority={true}
                     imageStyle={'object-center'}
                     card={false}/>

          </div>
          <div className={'absolute top-[30%] md:top-[50%] -translate-y-1/2  left-0 w-full h-fit z-20 flex justify-center'}>
            <div className={'w-[90%] md:w-[70%] lg:w-[40%] text-center'}>
              <BeReputationForm dataFormMobile={true}/>
              <h1 data-aos={'zoom-in'} className={'text-3xl text-balance font-forum text-white md:text-5xl lg:text-6xl'}>
                {title}
              </h1>
            </div>
          </div>
            {/*<HeaderBooking />*/}
        </section>
      </>
  )
}

export default Header