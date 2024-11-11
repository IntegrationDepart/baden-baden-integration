'use client'

import { SectionUI} from "@/components";
import {useTranslation} from "react-i18next";

const ReviewsContent = () => {
    const {t}=useTranslation()
    return (
        <SectionUI title={t('reviews.title')}>
            <div >

            </div>
        </SectionUI>
    );
};

export default ReviewsContent;