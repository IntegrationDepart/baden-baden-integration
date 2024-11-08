
import {HomeContent} from "@/components/Pages";
async function getHome() {

  // ResBanner
  const resBanner = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/banner/`, { cache: 'no-store' })
  const banner = await resBanner.json()
  // About Title
  const resAboutTitle = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/index-about-section/`, { cache: 'no-store' })
  const aboutTitle = await resAboutTitle.json()
  //resAdditionalServices
  const resAdditionalServices = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/index-about-facilities/`, { cache: 'no-store' })
  const additionalServices = await resAdditionalServices.json()

  // resAboutFacilities
  // const resAboutFacilities = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/about-facilities/`, { cache: 'no-store' })
  // const aboutFacilities = await resAboutFacilities.json()

  // resAboutTitle

  const resAboutTitleAmenities= await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/index-content-section/`, { cache: 'no-store' })
  const aboutTitleAmenities = await resAboutTitleAmenities.json()


  // resAmenities
  const resAmenities = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/index-service-section/`, { cache: 'no-store' })
  const amenities = await resAmenities.json()


  // resAmenities
  const resLandmarkcategories = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/landmarkcategories/`, { cache: 'no-store' })
  const landmarkcategories = await resLandmarkcategories.json()

  // resGallery
  const resGallery = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery/`, { cache: 'no-store' })
  const gallery = await resGallery.json()

  // resNews
  const resNews = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/news/?page=1&page_size=6`, { cache: 'no-store' })
  const news = await resNews.json()
  // resNewsTitle
  const resNewsTitle = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/index-news-section/`, { cache: 'no-store' })
  const newsTitle = await resNewsTitle.json()

  // resRoom
  const resRoom = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/index-rooms/`, { cache: 'no-store' })
  const room = await resRoom.json()

   // resFeedback
   // const resFeedback = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback-index/`, { cache: 'no-store' })
   // const feedback = await resFeedback.json()


  // resFeedbackTitle
  // const resFeedbackTitle = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback-section-title/`, { cache: 'no-store' })
  // const feedbackTitle = await resFeedbackTitle.json()


  return [banner , aboutTitle, additionalServices ,aboutTitleAmenities , amenities , landmarkcategories , gallery ,news ,newsTitle ,room ]
}

export const  metadata = {
  title: 'Baden-Baden, Ташкент - официальный сайт | Создавайте воспоминания на всю жизнь.',
  description: ' Будьте вкурсе всех новостей гостиницы BADEN-BADEN.',
  icons:'/image/icon.png',
  openGraph: {
    title:'Baden-Baden - Создавайте воспоминания на всю жизнь.',
    description: ' Будьте вкурсе всех новостей гостиницы BADEN-BADEN.',
    type:'website',
    url:'https://baden-baden.uz/',
    siteName:'Baden-Baden'
  }
}

export default async function Home() {
  const [banner , aboutTitle , additionalServices , aboutTitleAmenities ,amenities ,landmarkcategories ,gallery ,news , newsTitle ,room] = await getHome()
  return (
      <HomeContent banner={banner} aboutTitle={aboutTitle} additionalServices={additionalServices} aboutTitleAmenities={aboutTitleAmenities} amenities={amenities} landmarkcategories={landmarkcategories} gallery={gallery} news={news?.results}  newsTitle={newsTitle} room={room}  />
  );
}



