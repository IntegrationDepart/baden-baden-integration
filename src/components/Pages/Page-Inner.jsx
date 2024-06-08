'use client'
import {ButtonUI, DropdownBooking, ImageUI, NumberGuests, RoomsSlider, SectionUI} from "@/components";
import {LuBath, LuBedDouble, LuFootprints, LuMaximize, LuSnowflake, LuUsers} from "react-icons/lu";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Grid, Navigation, Thumbs} from 'swiper/modules';
import {useEffect, useState} from "react";
import {GrNext, GrPrevious} from "react-icons/gr";
import moment from "moment/moment";
import DatePicker from "react-datepicker";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {changleEndTimeBooking, changleStartTimeBooking, changleTimeBooking} from "@/slice/booking";
import {BiCoffee} from "react-icons/bi";
import {RiWindyLine} from "react-icons/ri";
import {FaTv} from "react-icons/fa";
import {IoWifi} from "react-icons/io5";
import apiService from "@/service/api";
import {useParams} from "next/navigation";
import {useQuery} from "react-query";
import {langSelect} from "@/helper";
import BeSearchForm from "../be-forms/be-search-form";



// import { useState } from 'react';
// import SwiperCore, { Navigation, Thumbs, FreeMode, Grid } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// import 'swiper/swiper-bundle.min.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
// import { GrNext, GrPrevious } from 'react-icons/gr';

// SwiperCore.use([Navigation, Thumbs, FreeMode, Grid]);
const Page = ({roomCatalog}) => {
    const {t} = useTranslation()
    const {lang} = useSelector(state => state.langSlice)
    const dispatch = useDispatch();
    const {timeBooking, typeBooking, countRoomBooking, countOlderBooking, countChildrenBooking} = useSelector(
        (state) => state.bookingSlice);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
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

    const handleDateChangeStart = (date) => {

        dispatch(changleStartTimeBooking(`${date}`))
        setStartDate(date)
    };
    const handleDateChangeEnd = (date) => {

        dispatch(changleEndTimeBooking(`${date}`))
        setEndDate(date)
    };
    useEffect(() => {
        const thisDay = moment().add(0, 'days').toDate()
        dispatch(changleTimeBooking([`${thisDay}`, `${thisDay}`]))
    }, []);


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
            <SectionUI title={langSelect(lang ,room?.title_ru , room?.title_en ,room?.title_uz )}
            >

            </SectionUI>
            <section className=" mb-7 sm:mb-14 md:mb-20 mt-5 md:mt-10">
                <div className="container space-y-5 md:space-y-10">
                    <SwiperInner images={room?.images} title={langSelect(lang ,room?.title_ru , room?.title_en ,room?.title_uz )}/>
                    <div className="grid grid-cols-1 md:grid-cols-3  gap-5">
                        <div className="col-span-2 flex flex-col gap-5 md:gap-10">
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
                                    {langSelect(lang ,room?.text_ru , room?.text_en ,room?.text_uz )}
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
                                            <li key={included.id}>  {langSelect(lang ,included?.title_ru , included?.title_en ,included?.title_uz )}</li>

                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="flex justify-start w-full gap-1">
                                <ButtonUI content={t('btn.booking')} hrefToPage={`/booking/?room-type=${roomTypes.filter((roomType) => roomType.roomId === id)[0].beRoomType}`}/>
                            </div>
                        </div>
                        {/*<div className="col-span-1">
                            <div className=" border border-first">
                                <div className="flex flex-col items-center p-3 lg:p-5">
                                    <h3 className="font-normal text-currentBlue text-2xl md:text-3xl lg:text-[40px] mb-2">{t('roomInner.bookingTitle')}</h3>
                                    <p className="font-normal text-currentBlue text-base md:text-lg lg:text-2xl"><span>{room?.price} </span>
                                     <span>{t("rooms.priceSymbol")}</span>
                                    </p>
                                    <div
                                        className="flex flex-col gap-[11px] w-full mt-5 text-currentBlack font-jost font-normal">
                                        <DropdownBooking
                                            title={t('index.headerBooking.checkIn')}
                                            subTitle={timeBooking[0] ? moment(timeBooking[0]).format('ll') : t('index.headerBooking.entryDay')}

                                            isInner={true}
                                        >

                                            <DatePicker
                                                selected={null}
                                                onChange={handleDateChangeStart}
                                                startDate={startDate}
                                                dataFormat={'dd/MM/yyyy'}
                                                inline
                                                minDate={moment().add(0, 'days').toDate()}
                                            />
                                        </DropdownBooking>
                                        <DropdownBooking
                                            title={t('index.headerBooking.departure')}
                                            subTitle={timeBooking[1] ? moment(timeBooking[1]).format('ll') : t('index.headerBooking.departureDay')}

                                            isInner={true}
                                        >

                                            <DatePicker
                                                selected={null}
                                                onChange={handleDateChangeEnd}
                                                startDate={endDate}
                                                dataFormat={'dd/MM/yyyy'}
                                                inline
                                                minDate={moment().add(0, 'days').toDate()}
                                            />
                                        </DropdownBooking>
                                        <div className={'grid grid-cols-2 gap-2'}>
                                            <DropdownBooking
                                                title={t('index.headerBooking.adults')}
                                                subTitle={` ${countOlderBooking}  `}
                                                isInner={true}
                                            > <NumberGuests isInner={true} children={false}/>
                                            </DropdownBooking>
                                            <DropdownBooking
                                                title={t('index.headerBooking.children')}
                                                subTitle={` ${countChildrenBooking} `}
                                                isInner={true}
                                            > <NumberGuests isInner={true} adults={false}/>
                                            </DropdownBooking>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 md:gap-[30px] pb-3 lg:pb-5 px-3 lg:px-5">
                                    <ButtonUI content={t('btn.booking')}/>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </section>
            <SectionUI title={t('index.section2.title')} modeBlue={true} isNoContainer={true}>
                <div className={'pb-5 md:pb-10'}>
                    <RoomsSlider room={roomCatalog}/>
                </div>
                <div data-aos={'fade-up'} data-aos-delay={50} className="flex flex-col items-center md:pb-20 pb-10">
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
                                <a href={image.image} className="lightgallery-item" data-src={image.image}>
                                    <ImageUI alt={title} src={image.image} imageStyle={'object-bottom'} />
                                </a>
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


