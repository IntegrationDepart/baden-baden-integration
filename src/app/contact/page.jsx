
import {ContactContent} from "@/components/Pages";
async function getContact() {
  const res = await  fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/contact`, { cache: 'no-store' })
  const contact = await res.json()
  return contact
}

export const  metadata = {
  title: 'Контакты | Baden-Baden',
  description: 'Создавайте воспоминания на всю жизнь',
  icons:'/image/icon.png',
  openGraph: {
    title:'Контакты %s | Baden-Baden',
    description: ' Создавайте воспоминания на всю жизнь',
    type:'website',
    url:'https://baden-baden.uz/',
    siteName:'Baden-Baden'
  }
}


export default async function Page  () {
  const contact = await getContact()
  return (
      <ContactContent contact={contact} />     )
}

