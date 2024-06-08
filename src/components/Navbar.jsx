'use client'
import React, {useCallback, useEffect, useState} from 'react';
import ImageUi from "@/components/image-ui";
import Link from "next/link";
import {LuAlignLeft} from "react-icons/lu";
import {nav, navLink} from "@/constants/routeConfig";
import {useTranslation} from 'react-i18next';
import {usePathname} from "next/navigation";
import {formatPhoneNumber, langSelect} from "@/helper";
import {useDispatch, useSelector} from "react-redux";
import {changleLang} from "@/slice/lang";
import {useQuery} from "react-query";
import apiService from "@/service/api";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const [isScroll, setIsScroll] = useState(false)
    const router = usePathname()

    const handleBurger = () => {
        setSidebar(!sidebar)
    }

    const onScroll = useCallback(event => {
        const {scrollY} = window;
        if (scrollY > 20) {
            setIsScroll(true)
        } else {
            setIsScroll(false)
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);


    const {data: contact, refetch: contactRefetch,} = useQuery("getContact", () =>
        apiService.getData('/about/contact'), {enabled: false}
    );
    useEffect(() => {
        contactRefetch()
    }, [])

    const {t} = useTranslation()
    const {lang} = useSelector(state => state.langSlice)

    return (
        <nav
            className={`${router === '/' ? isScroll ? "bg-currentBlue bg-[url('/image/bg-noise.jpg')] " : "bg-transparent " : "bg-currentBlue bg-[url('/image/bg-noise.jpg')] "} ${isScroll ? "md:-translate-y-10 border-b border-white" : ""} duration-300 top-0 fixed  left-0 z-[100] w-full`}>
            <div className={`relative w-full z-20 py-[10px] border-b-[0.5px] border-navBorder opacity-70  hidden md:block `}>
                <div className="container">
                    <div
                        className="flex text-white font-jost text-xs lg:text-sm justify-between items-center font-normal">
                        <div className="flex gap-2 lg:gap-[34px] items-center">
                            <a href={`tel:${contact?.phone1}`}>{formatPhoneNumber(contact?.phone1)}</a>
                            <a href={`tel:${contact?.phone2}`}>{formatPhoneNumber(contact?.phone2)}</a>
                            <DropdownLang/>
                        </div>
                        <div className="whitespace-nowrap">
                            <p>{langSelect(lang, contact?.address_ru, contact?.address_en, contact?.address_uz)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" relative z-10 w-full">
                <div className="container">
                    <div
                        className="flex items-center  py-4 md:py-8 text-white font-normal justify-between text-lg font-jost   ">
                        <div className={'w-10 block md:hidden'}>

                            <LuAlignLeft className={'text-white text-xl  cursor-pointer'}
                                         onClick={handleBurger}/>
                        </div>
                        <div
                             className={`  duration-700 z-[100] top-[70px] ${sidebar ? 'left-0' : '-left-full'} !box-border fixed w-full md:w-[80%] bg-[url('/image/bg-noise.jpg')] bg-currentBlue   p-5 h-[calc(100vh-70px)] flex flex-col justify-between border border-currentBlue  md:hidden`}>
                            <ul className={'flex flex-col gap-4 lg:gap-7 items-center '}>
                                {
                                    navLink.map((link, ind) => {
                                        const active = router === link.link
                                        return (
                                            <li key={ind} onClick={()=>setSidebar(false)}><Link href={link.link}
                                                                className={`${active ? 'border-b border-b-white pb-[1px]' : "border border-transparent px-1.5 py-0.5"}`}
                                            >
                                                {t(`${link.text}`)}
                                            </Link>
                                            </li>

                                        )
                                    })
                                }
                            </ul>
                            <div
                                className="flex mt-5 flex-col  border-t border-white pt-5 text-white font-jost  gap-2 md:gap-5 text-sm items-center font-normal">
                                <div className="flex gap-4 lg:gap-[34px] items-center">
                                    <a href={`tel:${contact?.phone2}`}>{formatPhoneNumber(contact?.phone2)}</a>
                                    <a href={`tel:${contact?.phone2}`}>{formatPhoneNumber(contact?.phone2)}</a>
                                </div>
                                <div className="text-center">
                                    <p>{langSelect(lang, contact?.address_ru, contact?.address_en, contact?.address_uz)}</p>
                                </div>
                            </div>
                        </div>
                        <ul className="md:flex justify-between items-center w-1/3 hidden relative z-10">
                            {
                                navLink.slice(0, 3).map((link, ind) => {
                                        const active = router === link.link

                                        return (
                                            <li key={ind}><Link href={link.link} className={`${active ? 'border-b border-b-white pb-[1px]' : "border border-transparent px-1.5 py-0.5"}`}>{t(`${link.text}`)} </Link></li>
                                        )
                                    }
                                )
                            }

                        </ul>
                        <Link href="/"
                              className="  block static md:absolute left-1/2 top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                            <div className={' w-[200px] h-[50px] md:w-[240px] md:h-[60px] flex gap-3 items-center'}>
                                <div className={'relative  w-[90px] h-[50px] md:w-[100px] md:h-[60px]'}>
                                    <ImageUi
                                        alt={'baden baden logo'}
                                        src="/image/baden-baden-logo-white 1.png"
                                        objectFitContain={true}/>
                                </div>
                                <div className={'relative  w-[90px]  md:w-[100px] h-[20px]'}>
                                    <ImageUi
                                        alt={'baden baden logo'}
                                        src="/image/hotel-pro.svg"
                                        objectFitContain={true}/>
                                </div>

                            </div>

                        </Link>
                        <ul className="md:flex justify-between items-center w-1/3 hidden">
                            {
                                navLink.slice(3, 6).map((link, ind) => {
                                    const active = router === link.link

                                    return (
                                        <li key={ind}><Link href={link.link}
                                                            className={`${active ? 'border-b border-b-white pb-[1px]' : "border border-transparent px-1.5 py-0.5"}`}>{t(`${link.text}`)} </Link></li>
                                    )
                                    }
                                )
                            }

                        </ul>
                        <div className="md:hidden">
                            <DropdownLang/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

const DropdownLang = () => {
    const {t, i18n} = useTranslation()
    const dispatch = useDispatch()
    const langList = [
        {
            title: t('lang.ru'),
            value: 'ru',
            id: 1
        },
        {
            title: t('lang.en'),
            value: 'en',
            id: 2
        },
        {
            title: t('lang.uz'),
            value: 'uz',
            id: 3
        }
    ]
    const [dropdown, setDropdown] = useState(false)


    const opendropdown = (e) => {
        e.stopPropagation()

        setDropdown(prevstate => !prevstate)
    }

    const handleLang = (lang) => {
        i18n.changeLanguage(lang.value)
        dispatch(changleLang(lang.value))
        setDropdown(false)
    }

    useEffect(() => {
        const scrollDrop = () => {
            if (window.scrollY > 0) {
                setDropdown(false)
            }

        }
        window.addEventListener('scroll', scrollDrop)

        return () => {
            window.removeEventListener('scroll', scrollDrop)

        }
    }, []);


    useEffect(() => {
        const handleCLoseNav = () => {
            setDropdown(false)
        }
        window.addEventListener('click', handleCLoseNav)

        return () => {
            window.removeEventListener('click', handleCLoseNav)
        }
    }, [dropdown])

    return (
        <>
            <div className="relative">
                <p className=" cursor-pointer text-white font-jost text-center" onClick={opendropdown}>{t('lang.defualt')}</p>
                <div
                    className={`grid w-24 ${dropdown ? "grid-rows-[1fr]" : 'grid-rows-[0fr]'} absolute top-[30px]  z-[150] md:left-0 max-md:right-0 duration-200 transition-all ease  bg-currentBlue `}>
                    <div
                        onClick={e => e.stopPropagation()}
                        className={`overflow-x-hidden bg-currentBlue flex flex-col   ${dropdown ? "border-b border-x border-white " : ''} rounded-b`}>
                        {
                            langList.map((item) => (
                                <div
                                    onClick={() => handleLang(item)}
                                    key={item.id}
                                    className="hover:bg-black/10 px-3 py-1   flex items-center gap-2 cursor-pointer">
                                    <span>{item.title}</span>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}