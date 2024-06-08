'use client'
import {SectionUI} from "@/components";
import {FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import {IoMail} from "react-icons/io5";
import {formatPhoneNumber, langSelect} from "@/helper";
import {useSelector} from "react-redux";
import { useTranslation } from "react-i18next";
import BeSearchForm from "../be-forms/be-search-form";

const ContactContent = ({contact}) => {
  const {lang} = useSelector(state => state.langSlice)
  const {t} = useTranslation()
  return (
      <>
        <SectionUI isEmbroidery={true}>
          <BeSearchForm/>
        </SectionUI>
        <SectionUI  title={t('contact.title')}>
          <div className="flex flex-col items-center md:px-[8%] xl:px-[5%]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center mb-10">
              <div data-aos={'fade-up'}  className="gap-1 md:gap-4 flex flex-col items-center text-lg text-text font-jost font-normal group">
                <FaMapMarkerAlt className={'text-xl md:text-3xl text-currentBlue group-hover:text-currentBlue/90 duration-200'} />
                <span className="address "> {langSelect(lang ,contact?.address_ru , contact?.address_en ,contact?.address_uz )} </span>
              </div>
              <a data-aos={'fade-up'} data-aos-delay={50} href={`tel:${contact?.phone1}`}
                 className="gap-1 md:gap-4 flex flex-col items-center text-lg text-text font-jost font-normal group">
                <FaPhoneAlt className={'text-xl md:text-3xl text-currentBlue group-hover:text-currentBlue/90 duration-200'} />
                  <span>{ formatPhoneNumber(contact?.phone1) }</span>
                  <span>{formatPhoneNumber(contact?.phone2)}</span>

              </a>
              <a data-aos={'fade-up'} data-aos-delay={50} href={`mailto:${contact?.email}`} target="_blank"
                 className="gap-1 md:gap-4 flex flex-col items-center text-lg text-text font-jost font-normal group">
                <IoMail className={'text-xl md:text-3xl text-currentBlue group-hover:text-currentBlue/90 duration-200'} />
                <span>{contact?.email1}</span>
                <span>{contact?.email2}</span>

              </a>
            </div>
            <div
                className="w-full md:w-1/2 border-t-[1px] border-light text-first font-jost font-medium gap-6 md:gap-10 flex pt-5 md:pt-10 justify-center text-lg sm:text-xl">
              <a data-aos={'fade-up'} data-aos-delay={70} href={`${contact?.facebook}`} target="_blank" className={'hover:text-currentBlue'}>Facebook</a>
              <a data-aos={'fade-up'} data-aos-delay={90} href={`${contact?.instagram}`} target="_blank"  className={'hover:text-currentBlue'}>Instagram</a>
              <a data-aos={'fade-up'} data-aos-delay={120} href={`${contact?.telegram}`} target="_blank"  className={'hover:text-currentBlue'}>Telegram</a>
            </div>
          </div>
          <section className="mb-10 md:mb-20 mt-5 md:mt-10">
            <div className="container">
              <iframe className="w-full  aspect-[12/10] md:aspect-[12/4]"
                      src={`${contact?.map}`}
                      allowFullScreen="" loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </section>
        </SectionUI>
      </>
  );
};

export default ContactContent;