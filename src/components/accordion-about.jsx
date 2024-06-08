'use client'

import {useEffect, useState} from 'react';

const AccordionAbout = ({title , subTitle  , image ,fristIsOpen = false,openAccordion,checkAccordion,id}) => {

  // const [isOpen , setIsOpen] = useState(false)


  const handleAccount=()=>{

      checkAccordion(image,id)
  }


  return (

        <div
            data-aos={'fade-up'}
          className={'relative'}
            >
          <h2 >
            <button
                onClick={handleAccount}
                type="button"
                    className={`${openAccordion && 'underline underline-offset-2'} font-forum z-[3] relative flex items-start justify-between w-full pt-2 md:pt-5 text-xl md:text-4xl bg-white text-currentBlue text-left`}
                   >
              <p>{title}</p>
            </button>
          </h2>
          <div className={`${openAccordion ? 'opacity-1 relative duration-75 top-0' : 'opacity-0 absolute -top-5 duration-75'}  z-1 duration-200 `}  >
            <div className=" py-1 md:py-3">
              <p className="text-sm md:text-xl font-jost ">{subTitle}</p>
            </div>
          </div>

        </div>

  );
};

export default AccordionAbout;