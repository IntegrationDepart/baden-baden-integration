'use client'

import {ButtonUI, DropdownBooking, NumberGuests} from "@/components";
import {useState} from "react";
import DatePicker from 'react-datepicker'
import moment from "moment";
import 'moment/locale/uz'
import { useTranslation } from 'react-i18next'
import {useDispatch, useSelector} from "react-redux";
import {changleTimeBooking} from "@/slice/booking";





const HeaderBooking = () => {
  moment.locale('uz')
  const {t} = useTranslation()
  const dispatch = useDispatch();
  const { timeBooking ,typeBooking ,countRoomBooking ,countOlderBooking ,countChildrenBooking} = useSelector(
      (state) => state.bookingSlice);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);



  const handleDateChange = (date) => {
    dispatch(changleTimeBooking([`${date[0]}` ,`${date[1]}`]))
    setStartDate(date[0])
    setEndDate(date[1])
  };

  return (
      <div
          className={' container z-[80]  px-[8%] lg:px-[5%] xl:px-[8%] 2xl:px-[10%]  absolute bottom-28 md:bottom-[80px] left-1/2 -translate-x-1/2    '}>
        <div className={'border   border-white bg-transparent text-white py-2 shadow-xl  lg:py-4 px-5 sm:px-[30px] md:px-[20px]  xl:px-[30px] flex lg:flex-row flex-col items-center justify-center gap-2 md:gap-5  relative w-full h-full  before:content-[\'\'] before:border-white  before:duration-150  before:absolute before:w-[96%] lg:before:w-[98%] xl:before:w-[96%] before:h-[120%] before:-top-[10%] before:left-[2%] lg:before:left-[1%] xl:before:left-[2%] before:border-[0.5px]   before:-z-10 '}>

          <DropdownBooking
              title={t('index.headerBooking.checkIn')}
              subTitle={timeBooking[0] ? moment(timeBooking[0]).format('ll') : t('index.headerBooking.entryDay')}
              titleSecond={t('index.headerBooking.departure')}
              subTitleSecond={timeBooking[1] ? moment(timeBooking[1]).format('ll') : t('index.headerBooking.departureDay')}>
            <DatePicker
                selected={null}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                dataFormat={'dd/MM/yyyy'}
                inline
                monthsShown={2}
                minDate={moment().add(0, 'days').toDate()}
            />
          </DropdownBooking>
          <div className={'bg-white w-full lg:w-[2px] h-full md:h-0.5 lg:h-6 relative z-10'}/>

          <DropdownBooking
              title={t('index.headerBooking.numberOfGuests')}
              subTitle={` ${countOlderBooking} ${t('index.headerBooking.adults')}, ${countChildrenBooking} ${t('index.headerBooking.children')}`}
          >
            <NumberGuests  />
          </DropdownBooking>

          <div >
            <ButtonUI content={t('btn.booking')}  borderBtn={true} borderWhite={true}  />
          </div>
        </div>
      </div>
  )
      ;
};

export default HeaderBooking;
