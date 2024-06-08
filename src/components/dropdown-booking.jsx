import {FaAngleDown} from "react-icons/fa6";
import {CgArrowLongRight} from "react-icons/cg";
import {useEffect, useRef, useState} from "react";


const DropdownBooking = ({title, subTitle, titleSecond, subTitleSecond, children,isInner=false}) => {
    const [isShowDropdown, setIsShowDropdown] = useState(false)
    const dropDownRef=useRef(null)


    const handleDropdown = () => {
        setIsShowDropdown(prevState => !prevState)
    }
    useEffect(() => {
        const handleWindow = () => {
            setIsShowDropdown(false)
        }

        window.addEventListener('click', handleWindow)


        return () => {
            window.removeEventListener('click', handleWindow)
        }


    }, [isShowDropdown]);


    return (
        <div ref={dropDownRef}  onClick={(e)=>e.stopPropagation()} className={`font-jost ${isInner ?"relative":""}`}>

            {
                titleSecond ?
                    <div className={' flex sm:flex-row flex-col items-center gap-3 md:gap-5 lg:gap-7 xl:gap-12'}>
                        <div className={'flex items-center  gap-5 xl:gap-10'}>

                            <h5 className={`${isInner ? "text-currentBlack":"text-white"}   text-sm sm:text-base text-center sm:text-start  ${isInner?"border-[0.5px] border-currentBlue/70 p-[9px_6px]":""} `}>
                                {title}
                            </h5>
                            <button className="py-1 md:py-2  flex items-start gap-2"
                                    onClick={handleDropdown}
                            >
                                <p className={`${isInner ? "text-currentBlack":"text-white"}  text-center sm:text-start text-base `}>
                                    {subTitle}
                                </p>
                                <FaAngleDown className={` text-sm  ${isInner ? "text-currentBlack":"text-white"}  duration-100 flex-shrink-0 mt-1.5`}/>
                            </button>
                        </div>
                        <CgArrowLongRight className={`text-base rotate-90 sm:rotate-0 sm:text-xl lg:text-2xl ${isInner ? "text-currentBlack":"text-white"}  flex-shrink-0`}/>
                        <div className={'flex items-center gap-2 sm:gap-5 xl:gap-10'}>

                            <h5 className={`${isInner ? "text-currentBlack":"text-white"}  text-sm sm:text-base text-center sm:text-start   `}>
                                {titleSecond}
                            </h5>
                            <button className="py-1 md:py-2 flex items-start gap-2"
                                    onClick={handleDropdown}
                            >
                                <p className={`${isInner ? "text-currentBlack":"text-white"}  text-center sm:text-start text-base `}>
                                    {subTitleSecond}
                                </p>
                                <FaAngleDown className={` text-sm  ${isInner ? "text-currentBlack":"text-white"}  duration-100 flex-shrink-0 mt-1.5`}/>
                            </button>
                        </div>
                    </div>
                    :
                    <div className={`flex items-center justify-between gap-2  sm:gap-5 xl:gap-10 ${isInner?"border-[0.5px] border-currentBlue/70 p-[9px_6px]":""}`}>
                        <h5 className={`${isInner ? "text-currentBlack":"text-white"}  text-sm sm:text-base text-center sm:text-start   `}>
                            {title}
                        </h5>
                        <button className="py-2  flex items-start gap-2"
                                onClick={handleDropdown}>
                          <span className={`${isInner ? "text-currentBlack":"text-white"}  text-center sm:text-start text-base`}>
                            {subTitle}
                          </span>
                            <FaAngleDown className={` text-sm  ${isInner ? "text-currentBlack":"text-white"}  duration-100 flex-shrink-0 mt-1.5`}/>
                        </button>
                    </div>
            }
            <div
                className={`${isShowDropdown ? '' : 'hidden'} z-[50] absolute ${isInner ? "top-full":` top-[${dropDownRef?.current?.offsetTop}px]  lg:top-full  max-lg:-translate-x-1/2 max-lg:left-1/2 left-[${dropDownRef?.current?.offsetLeft}px]`}  w-auto`}>
                {children}
            </div>
        </div>
    );
};

export default DropdownBooking;