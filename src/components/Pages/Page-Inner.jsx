'use client'
import {ButtonUI,  ImageUI,  RoomsSlider, SectionUI} from "@/components";
import {LuBath, LuBedDouble, LuFootprints, LuMaximize, LuSnowflake, LuUsers} from "react-icons/lu";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Grid, Navigation, Thumbs} from 'swiper/modules';
import {useEffect, useState} from "react";
import {GrNext, GrPrevious} from "react-icons/gr";
import {useTranslation} from "react-i18next";
import {BiCoffee} from "react-icons/bi";
import {RiWindyLine} from "react-icons/ri";
import {FaTv} from "react-icons/fa";
import {IoWifi} from "react-icons/io5";
import apiService from "@/service/api";
import {useParams} from "next/navigation";
import {useQuery} from "react-query";
import {langSelect} from "@/helper";
import BeSearchForm from "../be-forms/be-search-form";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

const Page = ({roomCatalog}) => {
    const {t , i18n} = useTranslation()
    const {id} = useParams()
    const {data: room, refetch: refetchRoom, isLoading: isLoadingRoom} = useQuery(["room", id], () =>
        apiService.getDataByID('/rooms', id), {enabled: false}
    );

    const roomComforts = [
        {
            id: 1,
            icon: <LuBath className={'text-currentBlack text-2xl'}/>,
            text: t('roomInner.services.service1')
        },
        {
            id: 2,
            icon: <img className={'w-6 h-6'} src={'/image/baden-icons/breakfast.svg'} alt={'icon breakfast'}/>,
            text: t('roomInner.services.service2')
        },
        {
            id: 3,
            icon: <BiCoffee className={'text-currentBlack text-2xl'}/>,
            text: t('roomInner.services.service3')
        },
        {
            id: 4,
            icon: <LuFootprints className={'text-currentBlack text-2xl'}/>,
            text: t('roomInner.services.service4')
        },
        {
            id: 5,
            icon: <RiWindyLine className={'text-currentBlack text-2xl'}/>,
            text: t('roomInner.services.service5')
        },
        {
            id: 6,
            icon: <LuSnowflake className={'text-currentBlack text-2xl'}/>,
            text: t('roomInner.services.service6')
        },
        {
            id: 7,
            icon: <FaTv className={'text-currentBlack text-2xl'}/>,
            text: t('roomInner.services.service7')
        },
        {
            id: 8,
            icon: <IoWifi className={'text-currentBlack text-2xl'}/>,
            text: t('roomInner.services.service8')
        },

    ]

    const roomTypes = [
        {
            roomId: 'family-suite-double',
            beRoomType: '5027372'
        },
        {
            roomId: 'terrace-suite-double',
            beRoomType: '5027373'
        },
        {
            roomId: 'standard-twin',
            beRoomType: '5027371'
        },
        {
            roomId: 'nomer-standard-double',
            beRoomType: '5027370'
        }
    ]

    // const handleDateChangeStart = (date) => {
    //
    //     dispatch(changleStartTimeBooking(`${date}`))
    //     setStartDate(date)
    // };
    // const handleDateChangeEnd = (date) => {
    //
    //     dispatch(changleEndTimeBooking(`${date}`))
    //     setEndDate(date)
    // };
    // useEffect(() => {
    //     const thisDay = moment().add(0, 'days').toDate()
    //     dispatch(changleTimeBooking([`${thisDay}`, `${thisDay}`]))
    // }, []);


    useEffect(() => {
        if (id) {
            refetchRoom()
        }
    }, [id])
    return (
        <>
            <SectionUI isEmbroidery={true}>
                <BeSearchForm/>
            </SectionUI>
            <SectionUI title={langSelect(i18n.language ,room?.title_ru , room?.title_en ,room?.title_uz )}
            >

            </SectionUI>
            <section className=" mb-7 sm:mb-14 md:mb-20 mt-5 md:mt-10">
                <div className="container space-y-5 md:space-y-10">
                    <SwiperInner images={room?.images} title={langSelect(i18n.language ,room?.title_ru , room?.title_en ,room?.title_uz )}/>
                    <div className="grid grid-cols-1  gap-5">
                        <div className="col-span-1 flex flex-col gap-5 md:gap-10">
                            <div className="flex flex-col gap-3 md:gap-5">
                                <h2 className="font-normal text-currentBlue text-2xl md:text-3xl lg:text-[40px] font-forum  ">{t('roomInner.descr')}</h2>
                                <div
                                    className="flex whitespace-nowrap font-forum gap-5 md:gap-[50px] text-currentBlue text-lg  md:text-2xl  items-center">
                                    <div className="flex gap-3 md:gap-6 items-center">
                                        <LuMaximize className="text-xl md:text-3xl"/>
                                        <span>{room?.capacity} <span> {t('roomInner.areaSymbol')} </span></span>
                                    </div>
                                    <div className="flex gap-3 md:gap-6 items-center">
                                        <LuUsers className="text-xl md:text-3xl"/>
                                        <span>{room?.num_people} <span> {t('roomInner.humenSymbol')} </span></span>
                                    </div>
                                    <div className="flex gap-3 md:gap-6 items-center">
                                        <LuBedDouble className="text-xl md:text-3xl"/>
                                        <span>{room?.num_bedrooms} <span> {t('roomInner.bedromSymbol')} </span></span>
                                    </div>
                                </div>
                                <p className="text-currentBlack font-jost  md:text-lg text-start">
                                    {langSelect(i18n.language ,room?.text_ru , room?.text_en ,room?.text_uz )}
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-6 font-forum">
                                <h2 className="font-normal text-currentBlue text-2xl md:text-3xl lg:text-[40px]">{t('roomInner.comfortsTitle')}</h2>
                                <div
                                    className="grid grid-rows-4 grid-flow-col gap-3 md:gap-6">
                                    {
                                        roomComforts.map(room => (
                                            <li key={room.id} className="flex items-center gap-3.5 text-currentBlack">
                                                {room.icon}
                                                {room.text}
                                            </li>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-5">
                                <h3 className="font-normal text-currentBlue text-2xl md:text-3xl lg:text-[40px] font-forum">{t("roomInner.infosTitle")}</h3>
                                <ul className="list-disc text-currentBlack font-jost font-normal   md:text-lg ml-5">
                                    {
                                        room?.included_facilities?.map(included=>(
                                            <li key={included.id}>  {langSelect(i18n.language ,included?.title_ru , included?.title_en ,included?.title_uz )}</li>

                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="flex justify-start w-full gap-1">
                                <ButtonUI content={t('btn.booking')} hrefToPage={`/booking/?room-type=${roomTypes.filter((roomType) => roomType.roomId === id)[0].beRoomType}`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionUI title={t('index.section2.title')} modeBlue={true} isNoContainer={true}>
                <div className={'pb-5 md:pb-10'}>
                    <RoomsSlider room={roomCatalog}/>
                </div>
                <div  className="flex flex-col items-center md:pb-20 pb-10">
                    <ButtonUI borderBtn borderWhite content={t('btn.moreAll')} hrefToPage={'/room'}/>
                </div>
            </SectionUI>
        </>
    );
};

export default Page;


const SwiperInner = ({ images , title }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className={'w-full grid grid-cols-1 lg:grid-cols-3 gap-2.5 lg:gap-4 xl:gap-5'}>
            <div className={'col-span-1 lg:col-span-2'}>
                <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    elementClassNames={'w-full '}
                    selector=".lightgallery-item"
                >
                    <Swiper
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2 h-[220px] sm:h-[300px] lg:h-[450px] xl:h-[520px]  w-full"
                    >
                        {images?.map((image) => (
                            <SwiperSlide key={image?.id} className={'relative w-full h-full'}>
                                <div  className="lightgallery-item" data-src={image.image}>
                                    <ImageUI alt={title} src={image.image} imageStyle={'object-bottom'} />
                                </div>
                            </SwiperSlide>
                        ))}

                        <button
                            className="hidden lg:block  absolute left-5 top-[50%] cursor-pointer  border rounded-full border-white p-2  swipper-button-prev z-[12]  bg-white text-currentBlue"
                        >
                            <GrPrevious className="text-lg" />
                        </button>
                        <button
                            className="hidden lg:block absolute right-5 top-[50%] cursor-pointer  border rounded-full border-white p-2 z-20 swipper-button-next bg-white text-currentBlue"
                        >
                            <GrNext className="text-lg" />
                        </button>
                    </Swiper>
                </LightGallery>
            </div>

<div className={'col-span-1 '}>
    <Swiper
        breakpoints={{
            0: {
                slidesPerView: 4,
                spaceBetween: 10,
                grid: {
                    rows: 1,
                },
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 10,
                grid: {
                    rows: 1,
                },
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 10,
                grid: {
                    rows: 1,
                },
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 10,
                grid: {
                    rows: 2,
                },
            },
            1280: {
                slidesPerView: 2,
                spaceBetween: 16,
                grid: {
                    rows: 2,
                },
            },
        }}
        onSwiper={setThumbsSwiper}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Grid, Navigation, Thumbs]}
        className="mySwiper h-[100px] lg:h-[450px] xl:h-[520px] "
    >
        {images?.map((image) => (
            <SwiperSlide key={image?.id} className={'relative w-full h-full'}>
                <ImageUI alt={'inner image'} src={image.image} />
            </SwiperSlide>
        ))}
    </Swiper>
</div>

        </div>
    );
};


