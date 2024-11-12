'use client'

import {SectionUI} from "@/components";
import BeReviewsForm from "../be-forms/be-reviews-form";
import {useTranslation} from "react-i18next";

const ReviewsContent = () => {
    const {t} = useTranslation()

    return (
        <SectionUI title={t('reviews.title')}>
            <div className={`w-full pb-[30px]`}>
                <BeReviewsForm/>
            </div>
        </SectionUI>
    );
};

export default ReviewsContent;