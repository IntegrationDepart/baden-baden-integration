'use client'
import {AccordionAbout, HotelAmenitiesCard, ImageUI, SectionUI} from "@/components";
import {langSelect} from "@/helper";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import BeSearchForm from "../be-forms/be-search-form";

const AboutContent = ({aboutTitle ,aboutFacilities , amenities ,aboutTitleAmenities}) => {
  const {lang} = useSelector(state => state.langSlice)
  const [facilitesImage ,setFacilitesImage] = useState('')

    const [openAccordion, setOpenAccordion] = useState(0)

    const checkAccordion=(image,id)=>{
        setOpenAccordion(id)
        setFacilitesImage(image)
    }

    useEffect(()=>{
        setFacilitesImage(aboutFacilities[0]?.inner_image?.image)

    },[])

  return (
      <>
        <SectionUI isEmbroidery={true}>
            <BeSearchForm/>
        </SectionUI>
        <SectionUI title={langSelect(lang ,aboutTitle?.title_ru , aboutTitle?.title_en ,aboutTitle?.title_uz )}
                   subTitle={langSelect(lang ,aboutTitle?.sub_title_ru , aboutTitle?.sub_title_en ,aboutTitle?.sub_title_uz )}>
          <div className={`w-full aspect-video md:aspect-[5/2] relative`}>
            <ImageUI src={aboutTitle?.image} alt={'banner'} priority={true} data-aos={'zoom-in'} data-aos-delay={50}
                     imageStyle={'object-center'}
                     card={false}/>
          </div>
        </SectionUI>
        <SectionUI>
          <div className={'grid  md:grid-cols-11 gap-5 md:gap-16 lg:gap-[100px] pb-10 md:pb-20'}>
            <div className=" relative w-full md:col-span-5 h-[300px] md:h-[450px] lg:h-[500px] order-2 md:order-1">
              <ImageUI data-aos={'fade-up'} isBorder={true} src={facilitesImage} alt={'banner'} priority={true} card={false}/>
            </div>
            <div className={'order-1 md:order-2 py-0 md:py-20 md:col-span-6'}>
              {
                aboutFacilities?.map((facilites, ind ) => (
                    <AccordionAbout
                        key={facilites?.id}
                        openAccordion={openAccordion===ind}
                        checkAccordion={checkAccordion}
                        fristIsOpen={ind === 0}
                        image={facilites?.inner_image?.image}
                        title={langSelect(lang ,facilites?.title_ru , facilites?.title_en ,facilites?.title_uz )}

                        subTitle={langSelect(lang ,facilites?.sub_title_ru , facilites?.sub_title_en ,facilites?.sub_title_uz )}
                        id={ind}
                    />
                ))
              }
            </div>
          </div>
        </SectionUI>
        <SectionUI isFalsePadding={true} modeBlue={true} isNoContainer={true}>
          <div className={'w-full h-[300px] md:h-[500px] lg:h-[700px]'}>
            <video className="object-cover w-full h-full" autoPlay loop muted>
              <source
                  className="w-full"
                  src={`${aboutTitleAmenities?.video}`}
                  type="video/mp4"
              />
            </video>
          </div>
        </SectionUI>
        <SectionUI title={langSelect(lang ,aboutTitleAmenities?.title_ru , aboutTitleAmenities?.title_en ,aboutTitleAmenities?.title_uz )}
                   subTitle={langSelect(lang ,aboutTitleAmenities?.sub_title_ru , aboutTitleAmenities?.sub_title_en ,aboutTitleAmenities?.sub_title_uz )}
                   modeBlue={true}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5  md:pb-20 pb-10">
            {
              amenities?.map((item ,id ) => (
                    <HotelAmenitiesCard key={item.id} id={id} image={item?.image} title={langSelect(lang ,item?.title_ru , item?.title_en ,item?.title_uz )}/>
              ))
            }
          </div>
        </SectionUI>
      </>
  );
};

export default AboutContent;