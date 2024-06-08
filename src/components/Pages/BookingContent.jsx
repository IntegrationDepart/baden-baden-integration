'use client'
import {SectionUI} from "@/components";
import BeBookingForm from "../be-forms/be-booking-form";
import { useTranslation } from "react-i18next";

const BookingContent = () => {
  const {t} = useTranslation()

  return (
      <>
        <SectionUI title={t('booking.headerTitle')} isEmbroidery={true}>
          <div className={`w-full pb-[30px]`}>
            <BeBookingForm/>
          </div>
        </SectionUI>
      </>
  );
};

export default BookingContent;