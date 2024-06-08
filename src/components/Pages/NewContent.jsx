'use client'
import {NewsCard, SectionUI} from "@/components";
import {useTranslation} from "react-i18next";
import {langSelect} from "@/helper";
import {useSelector} from "react-redux";
import {useQuery} from "react-query";
import apiService from "@/service/api";
import {useState ,useEffect} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import BeSearchForm from "../be-forms/be-search-form";

const NewContent = ({titleNew}) => {
  const {lang} = useSelector(state => state.langSlice)
  const [page, setPage] = useState(1)
  const [productInfinity, setProductInfinity] = useState([])
  const [hasMore, setHasMore] = useState(false)

  const {
    data: newsCard,
    refetch: newsCardRefetch,
    isLoading:newsIsLoading,
    isSuccess: newsCardSuccess,
  } = useQuery(
      "news",
      () =>
          apiService.getData(
              `/about/news/?page=${page}&page_size=3`
          ),
      {
        enabled: false,
      }
  );


  useEffect(() => {
    if (newsCardSuccess) {
      if (page === 1) {
        setProductInfinity([...newsCard?.results])

        if (newsCard?.results.length > 0) {
          setHasMore(true)
        }
      } else {
        setProductInfinity([...productInfinity, ...newsCard?.results])
      }
      if (!newsCard?.next) {
        setHasMore(false)
      } else {
        setPage(prop => prop + 1)
        setHasMore(true)
      }
    }
  }, [newsCard])

  useEffect(() => {
    newsCardRefetch()
  }, []);

  return (
      <>
        <SectionUI isEmbroidery={true}>
          <BeSearchForm/>
        </SectionUI>
        <SectionUI  title={langSelect(lang ,titleNew?.title_ru , titleNew?.title_en ,titleNew?.title_uz )} subTitle={langSelect(lang ,titleNew?.sub_title_ru , titleNew?.sub_title_en ,titleNew?.sub_title_uz )}

        >
            <InfiniteScroll
                next={newsCardRefetch}
                hasMore={hasMore}
                loader={<div className={'flex w-full justify-center items-center mt-5 mb-3'}> <AiOutlineLoading3Quarters
                    className={'animate-spin text-currentBlue '}/> </div>}
                className={'grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-x-5 lg:gap-y-10 py-10'}
                dataLength={productInfinity?.count || []}>

              {

                productInfinity?.map((news , id) => (
                    <NewsCard
                        key={news?.id}
                        id={id}
                        image={news?.image}
                        subTitle={langSelect(lang ,news?.text_ru, news?.text_en , news?.text_uz )}
                        title={langSelect(lang ,news?.title_ru, news?.title_en , news?.title_uz )}
                        link={`news/${news?.slug}`}/>
                ))
              }

            </InfiniteScroll>
        </SectionUI>
      </>
  );
};

export default NewContent;