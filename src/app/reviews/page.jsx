import React from 'react';
import {ReviewsContent} from "@/components/Pages";

export const metadata = {
    title: 'Отзывы | Baden-Baden',
    description: 'Узнайте, что говорят гости о гостинице BADEN-BADEN.',
    icons: '/image/icon.png',
    openGraph: {
        title: 'Отзывы | Baden-Baden',
        description: 'Узнайте, что говорят гости о гостинице BADEN-BADEN.',
        type: 'website',
        url: 'https://baden-baden.uz/reviews',
        siteName: 'Baden-Baden'
    }
}

const Page = () => {
    return <ReviewsContent/>;
};

export default Page;