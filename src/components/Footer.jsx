import Link from "next/link";
import {navLink} from "@/constants/routeConfig";
import {FaFacebookF} from "react-icons/fa";
import {RiInstagramLine} from "react-icons/ri";
import {LuPhone} from "react-icons/lu";
import {MdOutlineMailOutline} from "react-icons/md";
import {SlLocationPin} from "react-icons/sl";
import { useTranslation } from "react-i18next";
import {formatPhoneNumber, langSelect} from "@/helper";
import {useSelector} from "react-redux";
import {BiLogoTelegram} from "react-icons/bi";
import {useQuery} from "react-query";
import apiService from "@/service/api";
import {usePathname} from "next/navigation";
import {useEffect} from "react";

const Footer = () => {
    const {t} = useTranslation()
    const {lang} = useSelector(state => state.langSlice)
    const router = usePathname()
    const { data: contact  , refetch: contactRefetch,  } = useQuery("getContact", () =>
        apiService.getData( '/about/contact') , { enabled: false}
    );

    useEffect(() => {
        contactRefetch()
    } , [])
    return (
        // bg-[url('/image/bg-noise.jpg')]
        <footer className="w-full bg-currentBlue ">
            <div className="container">
                <div className=" py-6 md:py-10 flex lg:flex-row flex-col gap-10 lg:gap-20 xl:gap-24 2xl:gap-32 items-center lg:items-start  font-jost">
                    <Link href="/" className="w-44 h-auto  md:w-60 flex-shrink-0  block relative">
                        <img src="/image/hotel-pro-white.png" alt="hotel-pro" className="w-full h-full object-contain"/>
                    </Link>
                    <div
                        className="grid grid-cols-3 sm:grid-cols-6  gap-x-6  sm:gap-x-10 md:gap-x-12 lg:gap-x-24 xl:gap-x-36 text-white font-jost">
                        <ul className="col-span-2 flex flex-col gap-5 order-1  text-sm">
                            <li>
                                <a href={`tel:${contact?.phone1}`} className="flex gap-2 items-center">
                                    <LuPhone className={'text-xl shrink-0'}/>

                                    <span
                                        className={'hover:border-b hover:border-white border-b border-transparent duration-300'}>
                                    {formatPhoneNumber(contact?.phone1)}
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${contact?.email1}`} className="flex gap-2 items-center">
                                    <MdOutlineMailOutline className={'text-xl shrink-0'}/>
                                    <span
                                        className={'hover:border-b hover:border-white border-b border-transparent duration-300 break-all'}>
                                    {contact?.email1}
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${contact?.email2}`} className="flex gap-2 items-center">
                                    <MdOutlineMailOutline className={'text-xl shrink-0'}/>
                                    <span
                                        className={'hover:border-b hover:border-white border-b border-transparent duration-300 break-all'}>
                                    {contact?.email2}
                                    </span>
                                </a>
                            </li>
                            <li>
                                <p className="flex gap-2 items-center">
                                    <SlLocationPin className={'text-xl shrink-0'}/>
                                    <span>{langSelect(lang, contact?.address_ru, contact?.address_en, contact?.address_uz)}</span>
                                </p>
                            </li>
                        </ul>
                        <ul className=" whitespace-nowrap flex flex-col gap-5 min-[360px]:mb-2 md:mb-0 order-2 font-medium ">
                            {
                                navLink.slice(0, 3).map((link, ind) => (
                                        <li key={ind}><Link href={link.link}
                                                            className={'hover:border-b hover:border-white border-b border-transparent duration-300'}>{t(`${link.text}`)} </Link>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                        <ul className=" whitespace-nowrap flex flex-col gap-5 order-4 sm:order-3 font-medium font-jost">
                            {
                                navLink.slice(3, 6).map((link, ind) => (
                                        <li key={ind}><Link href={link.link} className={'hover:border-b hover:border-white border-b border-transparent duration-300'}>{t(`${link.text}`)} </Link></li>
                                    )
                                )
                            }

                        </ul>
                        {/*{router !== '/booking' &&*/}
                        <div className="col-span-2 flex flex-col gap-4 order-3 sm:order-4 mt-5 sm:mt-0 lg:text-start sm:text-center">
                            <p>{t('footer.ourSocials')}</p>
                            <div className="flex items-center lg:justify-start sm:justify-center gap-4 lg:gap-[30px]">
                                <a target="_blank"  href={`${contact?.instagram}`}
                                   className="bg-bgSocial  p-[7.5px] rounded-full flex-shrink-0">
                                    <RiInstagramLine className={'text-currentBlue text-base'}/>
                                </a>
                                <a href={`${contact?.facebook}`} target="_blank"
                                   className="bg-bgSocial p-[7.5px] rounded-full flex-shrink-0">
                                    <FaFacebookF className={'text-currentBlue text-base'}/>
                                </a>
                                <a href={`${contact?.telegram}`} target="_blank"
                                   className="bg-bgSocial p-[7.5px] rounded-full flex-shrink-0">
                                    <BiLogoTelegram   className={'text-currentBlue text-base'}/>
                                    </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className=" w-full border-t-[1px] border-light border-b-0  py-2 md:p-0">
                <div className="container">
                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between text-white">
                        <p className="text-light font-jost text-xs ">©{new Date().getFullYear()}. {t('footer.miniFooter.allrights')}</p>
                        <div className="flex items-center gap-[10px] text-white">
                            <p className="font-light font-roboto text-xs">{t('footer.miniFooter.siteCreated')}</p>
                            <a href="https://abduganiev.uz/" target="_blank"
                               className="flex group items-center gap-2 relative w-[80px] md:w-[100px] h-[50px] overflow-hidden">
                                <img src="/image/logo.png" alt="Abduganiev Logo"
                                     className="w-8 max-md:hidden h-8 object-cover duration-200 group-hover:scale-50 group-hover:opacity-0 group-hover:-translate-x-10"/>
                                <img src="/image/abduganiev.png" alt="Abduganiev Logo"
                                     className="shrink-0  duration-300  md:opacity-0 md:translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 md:absolute left-0 object-contain w-full h-full"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;