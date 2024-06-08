import {NewContent} from "@/components/Pages";
async function getRoom() {
  const resTitleNew = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/index-news-section/`, { cache: 'no-store' })
  const titleNew = await resTitleNew.json()
  return titleNew
}
export const  metadata = {
  title: 'Новости | Baden-Baden',
  description: 'Будьте вкурсе всех новостей гостиницы BADEN-BADEN.',
  icons:'/image/icon.png',
  openGraph: {
    title:'Новости | Baden-Baden',
    description: ' Будьте вкурсе всех новостей гостиницы BADEN-BADEN.',
    type:'website',
    url:'https://baden-baden.uz/',
    siteName:'Baden-Baden'
  }
}
export default async function Page () {

  const titleNew = await getRoom()
  return (
      <NewContent titleNew={titleNew}  />
  );
};

