import "./globals.css";
import "./be-style.css";
import "react-datepicker/dist/react-datepicker.css";
import { Jost, Forum} from "next/font/google";
import Layout from "@/Layout/Layout";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
const jost = Jost({
        subsets: ["latin", "cyrillic"],
        weight: ['100', '200','400' ,'500' , "600" , "700" , '800' ],
        variable: "--font-jost",
        display:'swap'

    }
);
const forum = Forum({
    subsets: ["latin", "cyrillic"],
    weight: '400',
    variable: "--font-forum",
    display:'swap'
});


export const  metadata = {
  title: 'Baden-Baden - Создавайте воспоминания на всю жизнь.',
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

export default function RootLayout({children}) {
    return (
        <html lang="en" className={`font-jost ${jost.variable} ${forum.variable} overflow-x-hidden`}>
        <body>
        <Layout>
            {children}
        </Layout>
        </body>
        </html>
    );
}
