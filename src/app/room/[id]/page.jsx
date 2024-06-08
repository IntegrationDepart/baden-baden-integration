
import {PageInner} from "@/components/Pages";

async function getHome() {
  // resRoom
  const resRoom = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/index-rooms/`, { cache: 'no-store' })
  const room = await resRoom.json()


  return [room]
}

export const  metadata = {
  title: `Номера | Baden-Baden`,
  description: 'Гости могут насладиться пребыванием в одном из 59 номеров с функциональным и эксклюзивным дизайном.',
  icons:'/image/icon.png',
  openGraph: {
    title:`Номера | Baden-Baden`,
    description: ' Гости могут насладиться пребыванием в одном из 59 номеров с функциональным и эксклюзивным дизайном.',
    type:'website',
    url:'https://baden-baden.uz/',
    siteName:'Baden-Baden'
  }
}

export default async function Page() {
  const [room] = await getHome()
  return <PageInner roomCatalog={room}/>;
};

