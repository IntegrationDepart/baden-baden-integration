"use client";
import AOS from 'aos';
import {Footer, Navbar} from "@/components";
import {Client, HydrationProvider} from "react-hydration-provider";
import {Provider} from "react-redux";
import store, {persistor} from "@/store";
import "../localization/i18n";
import {PersistGate} from "redux-persist/integration/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/grid';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import {usePathname} from "next/navigation";
import 'aos/dist/aos.css';
import {useEffect} from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import NextTopLoader from "nextjs-toploader";
const Layout = ({children}) => {


    useEffect(() => {
        AOS.init({
            easing: 'ease', // default easing for AOS animations
            once: true // whether animation should happen only once - while scrolling down
        });
    }, []);
    const queryClient = new QueryClient();

    const router = usePathname()
    return (
        <HydrationProvider>
            <QueryClientProvider client={queryClient}>
                <Client>
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                            <Navbar/>
                            <main className={`min-h-screen ${router === '/' ? "" : "mt-[72px] md:mt-[125px]"} overflow-x-hidden `}>
                                <NextTopLoader />
                                {children}
                            </main>
                            <Footer/>
                        </PersistGate>
                    </Provider>
                </Client>
            </QueryClientProvider>
        </HydrationProvider>

    );
};

export default Layout;