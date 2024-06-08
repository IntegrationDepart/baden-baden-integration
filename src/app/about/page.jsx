import {AboutContent} from "@/components/Pages";
async function getAbout() {
  // resAboutTitle
  const resAboutTitle = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/about`, { cache: 'no-store' })
  const aboutTitle = await resAboutTitle.json()
  // resAboutFacilities
  const resAboutFacilities = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/about-facilities/`, { cache: 'no-store' })
  const aboutFacilities = await resAboutFacilities.json()

  // resAmenities
  const resAmenities = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/index-service-section/`, { cache: 'no-store' })
  const amenities = await resAmenities.json()

  // resAboutTitle

  const resAboutTitleAmenities= await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/index-content-section/`, { cache: 'no-store' })
  const aboutTitleAmenities = await resAboutTitleAmenities.json()

  return [aboutTitle , aboutFacilities , amenities , aboutTitleAmenities]
}

export const  metadata = {
  title: `Об отеле | Baden-Baden`,
  description: ' Добро пожаловать в отель BADEN-BADEN, ваш идеальный выбор вблизи аэропорта и вокзала. С прекрасным расположением и роскошными удобствами, наш отель предлагает поистине незабываемый опыт для деловых и отдыхающих путешественников. ',
  icons:'/image/icon.png',
  openGraph: {
    title:'Baden-Baden - Создавайте воспоминания на всю жизнь.',
    description: ' Добро пожаловать в отель BADEN-BADEN, ваш идеальный выбор вблизи аэропорта и вокзала. С прекрасным расположением и роскошными удобствами, наш отель предлагает поистине незабываемый опыт для деловых и отдыхающих путешественников. ',
    type:'website',
    url:'https://baden-baden.uz/',
    siteName:'Baden-Baden'
  }
}

export default async function Page  () {
  const [aboutTitle , aboutFacilities , amenities , aboutTitleAmenities] = await getAbout()

  return (
      <AboutContent aboutTitle={aboutTitle} aboutFacilities={aboutFacilities} amenities={amenities} aboutTitleAmenities={aboutTitleAmenities} />
  );
};

