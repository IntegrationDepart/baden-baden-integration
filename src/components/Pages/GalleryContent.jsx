
'use client'

import {GallerySection, SectionUI} from "@/components";
import { useTranslation } from "react-i18next";
import {useQuery} from "react-query";
import apiService from "@/service/api";
import {useEffect, useState} from "react";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import InfiniteScroll from "react-infinite-scroll-component";
import BeSearchForm from "../be-forms/be-search-form";

const GalleryContent = () => {
  const {t} = useTranslation()
  const [page, setPage] = useState(1)
  const [productInfinity, setProductInfinity] = useState([])
  const [hasMore, setHasMore] = useState(false)

  const {
    data: galleryCard,
    refetch: galleryCardRefetch,
    isLoading:galleryIsLoading,
    isSuccess: galleryCardSuccess,
  } = useQuery(
      "gallery",
      () =>
          apiService.getData(
              `/gallery-images?page=${page}&page_size=6`
          ),
      {
        enabled: false,
      }
  );



  useEffect(() => {
    if (galleryCardSuccess) {
      if (page === 1) {
        setProductInfinity([galleryCard?.results])

        if (galleryCard?.results.length > 0) {
          setHasMore(true)
        }
      } else {
        setProductInfinity([...productInfinity, galleryCard?.results])
      }
      if (!galleryCard?.next) {
        setHasMore(false)
      } else {
        setPage(prop => prop + 1)
        setHasMore(true)
      }
    }
  }, [galleryCard])

  useEffect(() => {
    galleryCardRefetch()
  }, []);


  return (
      <div>
        <SectionUI isEmbroidery={true}>
          <BeSearchForm/>
        </SectionUI>
        <SectionUI title={'Фотогалерея'}>
            <InfiniteScroll
                next={galleryCardRefetch}
                hasMore={hasMore}
                loader={<div className={'flex w-full justify-center items-center mt-5 mb-3'}> <AiOutlineLoading3Quarters
                    className={'animate-spin text-currentBlue '}/> </div>}
                className={'py-10 space-y-1 md:space-y-3'}
                dataLength={productInfinity?.count || []}>
              {
                productInfinity?.map((gallery , index) => (
                  <GallerySection key={index} gallery={gallery} isForIndex={false} isGalleryPage={true} />
                ))
              }
            </InfiniteScroll>
        </SectionUI>
      </div>
  );
};

export default GalleryContent;