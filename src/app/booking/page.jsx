import BookingContent from "../../components/Pages/BookingContent";
import {seoContent} from "../../SEO/SEO.config";

export const  metadata = {
  title: 'Бронирование номеров в отеле Baden-Baden, Ташкент - официальный сайт',
  description: 'Бронирование номеров в отеле Baden-Baden, Ташкент - официальный сайт',
  icons:'/image/icon.png',
  openGraph: {
    title:'Baden-Baden - Создавайте воспоминания на всю жизнь.',
    description: ' Добро пожаловать в отель BADEN-BADEN, ваш идеальный выбор вблизи аэропорта и вокзала. С прекрасным расположением и роскошными удобствами, наш отель предлагает поистине незабываемый опыт для деловых и отдыхающих путешественников. ',
    type:'website',
    url:'https://baden-baden.uz/',
    siteName:'Baden-Baden'
  }
}

export default function Page  () {
  return (
      <BookingContent BookingTitle={'Booking'}/>
  );
};

