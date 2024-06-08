
import {GalleryContent} from "@/components/Pages";

export const  metadata = {
  title: 'Фотогалерея | Baden-Baden',
  description: ' BADEN-BADEN HOTEL — Это отель роскошные номера, высокий уровень камфорта и самое главное высочайший уровень обслуживания.',
  icons:'/image/icon.png',
  openGraph: {
    title:'Фотогалерея | Baden-Baden',
    description: ' BADEN-BADEN HOTEL — Это отель роскошные номера, высокий уровень камфорта и самое главное высочайший уровень обслуживания.',
    type:'website',
    url:'https://baden-baden.uz/',
    siteName:'Baden-Baden'
  }
}

const Page = () => {
  return (
      <>
      <GalleryContent />
      </>
  );
};

export default Page;