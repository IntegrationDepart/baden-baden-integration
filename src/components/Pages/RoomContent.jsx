'use client'
import {RoomCard, SectionUI} from "@/components";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {langSelect} from "@/helper";
import BeSearchForm from "../be-forms/be-search-form";

const RoomContent = ({room}) => {
  const {t} = useTranslation()
  const {lang} = useSelector(state => state.langSlice)

  return (
      <>
          <SectionUI isEmbroidery={true}>
              <BeSearchForm/>
          </SectionUI>
          <SectionUI title={t('rooms.title')}>
              <div className="flex flex-col md:pb-20 pb-10 pt-10  gap-10 md:gap-[60px]">
                  {
                      room?.map(( item , id) => (
                          <RoomCard key={id} id={id} isLeftImage={id % 2 !== 0} price={item?.price} title={langSelect(lang ,item?.title_ru , item?.title_en ,item?.title_uz )} subTitle={langSelect(lang ,item?.sub_title_ru , item?.sub_title_en ,item?.sub_title_uz )} person={item?.num_people} bedrooms={item?.num_bedrooms} capacity={item?.capacity} images={item?.images} slug={item?.slug} />
                      ))
                  }
              </div>
          </SectionUI>
      </>
  );
};

export default RoomContent;