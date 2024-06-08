
import {RoomContent} from "@/components/Pages";

async function getRoom() {
  const resRoom = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`, { cache: 'no-store' })
  const room = await resRoom.json()
  return room
}
export const  metadata = {
  title: 'Номера | Baden-Baden',
  description: 'BADEN-BADEN HOTEL – это княжеское гостеприимство. Международные стандарты, местный колорит.',
  icons:'/image/icon.png',
  openGraph: {
    title:'Номера | Baden-Baden',
    description: ' BADEN-BADEN HOTEL – это княжеское гостеприимство. Международные стандарты, местный колорит.',
    type:'website',
    url:'https://baden-baden.uz/',
    siteName:'Baden-Baden'
  }
}

export default async function Page () {
  const room = await getRoom()

  return (
     <RoomContent room={room} />
  );
};

 Page;