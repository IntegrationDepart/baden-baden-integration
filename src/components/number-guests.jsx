'use client'

import {FiMinus} from "react-icons/fi";
import {FaPlus} from "react-icons/fa6";
import {ButtonUI} from "@/components";
import { useTranslation } from 'react-i18next';
import {useDispatch, useSelector} from "react-redux";
import {
    plusCountRoomBooking,
    minusCountChildrenBooking,
    minusCountOlderBooking,
    minusCountRoomBooking,
    plusCountChildrenBooking,
    plusCountOlderBooking,
    changleCountOlderBooking, changleCountChildrenBooking, changleCountRoomBooking
} from "@/slice/booking";
import {useEffect} from "react";

const NumberGuests = ({isInner=false,adults=true,children=true}) => {

    const {t} = useTranslation()
    const dispatch = useDispatch()
    let {countRoomBooking ,countOlderBooking ,countChildrenBooking} = useSelector(state => state.bookingSlice)


    const handleIncrement=(type)=>{
        if (type==='room'){
            dispatch(plusCountRoomBooking())
        }else if(type==='older'){
            dispatch(plusCountOlderBooking())
        }else if(type==='child'){
            dispatch(plusCountChildrenBooking())
        }
    }
    const handleDecrement=(type)=>{
        if (type==='room' && countRoomBooking>0){
            dispatch(minusCountRoomBooking())
        }else if(type==='older' && countOlderBooking>0){
            dispatch(minusCountOlderBooking())
        }else if(type==='child' && countChildrenBooking>0){
            dispatch(minusCountChildrenBooking())
        }
    }

    useEffect(() => {
        dispatch(changleCountRoomBooking(0))
        dispatch(changleCountOlderBooking(0))
        dispatch(changleCountChildrenBooking(0))
    }, []);
    return (
        <div className={'border shadow-md border-brown'}>
            <div className={`${isInner?"hidden":"flex"}  items-center justify-between   px-3 py-1 bg-currentBlue w-full`}>
                <p className={`font-jost text-white `}>
                    {t('index.headerBooking.roomNumber')}
                </p>
                <div className={'flex items-center gap-2'}>
                    <button className={'  p-2 bg-white  rounded-full'}

                              onClick={()=>handleDecrement('room')}
                    >
                        <FiMinus className={'text-sm text-currentBlack'}/>
                    </button>
                    <p className={`font-jost  text-xl text-white `}>{countRoomBooking}</p>
                    <button className={'p-2 bg-white  rounded-full  '}
                              onClick={()=>handleIncrement('room')}
                    >
                        <FaPlus className={'text-sm text-currentBlack'}/>
                    </button>
                </div>
            </div>
            <div className={`${isInner ? "bg-currentBlue":"bg-currentBlack"}  px-3 py-4`}>

                <div className={`grid  ${adults&&children ? "grid-cols-2":"grid-cols-1"}  gap-3`}>

                    <div className={`${adults? "flex":"hidden"} gap-y-1  flex-col items-center text-white`}>
                        <div className={`flex items-center gap-2   `}>

                            <button className={'p-2  hover:opacity-90'}  onClick={() => handleDecrement('older')} >
                                <FiMinus className={'text-sm '}/>
                            </button>
                            <p className={'font-jost  text-xl '}>{countOlderBooking }</p>


                            <button className={'p-2  hover:opacity-90'} onClick={() => handleIncrement('older')}>
                                <FaPlus
                                    className={'text-sm   '}/>
                            </button>
                        </div>

                        <p className={'font-jost  text-center text-xs'}>
                            {t('index.headerBooking.adults')}
                        </p>
                    </div>
                    <div className={` ${children? "flex":"hidden"} gap-y-1 flex flex-col items-center text-white`}>
                        <div className={`flex items-center gap-2  `}>
                            <button className={'p-2  hover:opacity-90'}
                                    onClick={() => handleDecrement('child')}>
                                <FiMinus className={'text-sm '}/>
                            </button>
                            <p className={'font-jost  text-xl '}>{countChildrenBooking}</p>
                            <button className={'p-2  hover:opacity-90'}
                                    onClick={() => handleIncrement('child')}>
                                <FiMinus className={'text-sm '}/>
                            </button>
                        </div>

                        <p className={'font-jost  text-center text-xs'}>
                            {t('index.headerBooking.forChildren')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberGuests;