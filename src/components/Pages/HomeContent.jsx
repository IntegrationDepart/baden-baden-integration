'use client'
import {
  AdditionalServicesCard,
  ButtonUI,
  GallerySection,
  Header,
  HotelAmenitiesCard,
  RoomsSlider,
  SectionUI, NewsSlider, ImageUI, ReviewsSlider,
} from "@/components";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {langSelect} from "@/helper";
import {indexSEO} from "@/SEO/SEO.config";
import SEO from "@/SEO/SEO";
import BeSearchForm from "../be-forms/be-search-form";

const HomeContent = ({
                         banner,
                         aboutTitle,
                         additionalServices,
                         aboutTitleAmenities,
                         amenities,
                         landmarkcategories,
                         gallery,
                         news,
                         newsTitle,
                         room,
                         feedback,
                         feedbackTitle
                     }) => {
    const {t} = useTranslation()
    const {lang} = useSelector(state => state.langSlice)

  return (
      <>

        <Header title={langSelect(lang ,banner?.title_ru , banner?.title_en ,banner?.title_uz )} image={banner?.image} />
        <SectionUI>
          <BeSearchForm dataFormMain={true}/>
        </SectionUI>
        <SectionUI title={langSelect(lang ,aboutTitle?.title_ru , aboutTitle?.title_en ,aboutTitle?.title_uz )}
                   subTitle={langSelect(lang ,aboutTitle?.sub_title_ru , aboutTitle?.sub_title_en ,aboutTitle?.sub_title_uz )}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-5 md:gap-x-[20%] pb-[50px] md:pb-20 ">
            <div data-aos={'fade-up'}>
              <AdditionalServicesCard title={langSelect(lang , additionalServices[0]?.title_ru , additionalServices[0]?.title_en , additionalServices[0]?.title_uz )} image={additionalServices[0]?.index_image.image}  />
            </div>
            <div data-aos={'fade-up'} data-aos-delay={100} className={' md:mt-[50%]'}>
              <AdditionalServicesCard title={langSelect(lang , additionalServices[1]?.title_ru , additionalServices[1]?.title_en ,additionalServices[1]?.title_uz )} image={additionalServices[1]?.index_image.image} />
            </div>
            <div data-aos={'fade-up'} className={'flex items-center justify-center col-span-1 md:col-span-2'}>
              <ButtonUI content={t('btn.more')}  hrefToPage={'/about'} borderBtn />
            </div>
          </div>
        </SectionUI>
        <SectionUI isFalsePadding={true} modeBlue={true} isNoContainer={true} >
          <div className={'w-full h-[300px] md:h-[500px] lg:h-[700px] overflow-hidden'}>
            <video className="object-cover w-full h-full" autoPlay loop muted>
              <source
                  className="w-full"
                  src={`${aboutTitleAmenities?.video}`}
                  type="video/mp4"
              />
            </video>
          </div>
        </SectionUI>
        <SectionUI title={t('index.section2.title')} modeBlue={true} isNoContainer={true}>
          <div className={'pb-5 md:pb-10'}>
            <RoomsSlider room={room}/>
          </div>
          <div data-aos={'fade-up'} data-aos-delay={50} className="flex flex-col items-center pb-2">
            <ButtonUI borderBtn borderWhite content={t('btn.moreAll')} hrefToPage={'/room'}/>
          </div>
        </SectionUI>
        <SectionUI title={langSelect(lang ,aboutTitleAmenities?.title_ru , aboutTitleAmenities?.title_en ,aboutTitleAmenities?.title_uz )}
                   subTitle={langSelect(lang ,aboutTitleAmenities?.sub_title_ru , aboutTitleAmenities?.sub_title_en ,aboutTitleAmenities?.sub_title_uz )}modeBlue={true}  >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5  ">
            {
              amenities?.map((item , id) => (
                    <HotelAmenitiesCard id={id} key={item?.id} image={item?.image} title={langSelect(lang ,item?.title_ru , item?.title_en ,item?.title_uz )}/>

              ))
            }
          </div>
        </SectionUI>
        <SectionUI title={t('index.section4.title')} modeBlue={true} cityBg={true} >
          <div className={'relative'}>
            <div className="grid grid-cols-1 lg:grid-cols-2   pb-[60px] lg:pb-20">
              <div className={'hidden lg:block'}>

              </div>
              <div className={'grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 md:gap-y-[30px]'}>
                {
                  landmarkcategories?.map((item , id) => (
                      <LocationInfos key={item?.id}  data-aos-delay={id*100} image={item?.image} title={langSelect(lang ,item?.title_ru , item?.title_en ,item?.title_uz )} landmark={item?.landmarks}/>
                  ))
                }
              </div>
            </div>
          </div>


        </SectionUI>

        <SectionUI title={langSelect(lang ,gallery?.title_ru , gallery?.title_en ,gallery?.title_uz )}>
          <GallerySection gallery={gallery?.images} isForIndex={true} isGalleryPage={true} />
          <div data-aos={'fade-up'} data-aos-delay={100} className="flex flex-col items-center pb-1.5 pt-5 md:pt-10">
            <ButtonUI content={t('btn.moreAll')} hrefToPage={'/gallery'} borderBtn />
          </div>
        </SectionUI>
        <SectionUI title={langSelect(lang ,newsTitle?.title_ru , newsTitle?.title_en ,newsTitle?.title_uz )}
                   subTitle={langSelect(lang ,newsTitle?.sub_title_ru , newsTitle?.sub_title_en ,newsTitle?.sub_title_uz )}
        >
            <NewsSlider news={news}/>
        </SectionUI>
        <SectionUI title={langSelect(lang ,feedbackTitle?.title_ru , feedbackTitle?.title_en ,feedbackTitle?.title_uz )}
                   subTitle={langSelect(lang ,feedbackTitle?.text_ru , feedbackTitle?.text_en ,feedbackTitle?.text_uz )}
        >
          <div className={'md:pb-20 pb-10 flex gap-10'}>
            <ReviewsSlider feedbacks={feedback && feedback}/>
          </div>
        </SectionUI>
      </>
  );
};


export default HomeContent;

const LocationInfos = ({ image ,title ,landmark , id}) => {
    const {t} = useTranslation()

  const {lang} = useSelector(state => state.langSlice)
  return (
      <div data-aos={'fade-up'} data-aos-delay={id*50}  className='text-white space-y-1'>
        <div data-aos='fade-up' className='flex items-center gap-x-3 md:gap-x-5 pb-[10px] '>
          <div className="w-6 h-6 relative shrink-0">
            <ImageUI src={image} alt={title} objectFitContain={true}/>
          </div>
          <h3 className='text-base md:text-xl font-medium font-jost leading-none'>{title}</h3>
        </div>
        <ul data-aos='fade-up' data-aos-delay={300} className='space-y-[5px] md:space-y-[10px]  font-jost'>
          {
            landmark?.map(item => (
                <li key={item?.id} className='flex justify-between text-base gap-4 md:gap-10 font-thin'>
                  <p>{langSelect(lang ,item?.title_ru , item?.title_en ,item?.title_uz )}</p>
                  <p className="shrink-0 text-[12px] lg:text-base"><span>{item?.distance}</span>
                    <span>{item?.distance_type === 'm' ? t('index.section4.m'):t('index.section4.km') }</span></p>
                </li>
            ))
          }


        </ul>
      </div>
  );
};
