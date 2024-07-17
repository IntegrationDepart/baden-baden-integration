'use client';
import { ImageUI } from "@/components/index";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css'
const GallerySection = ({ gallery, isForIndex, isGalleryPage }) => {
  const onInit = () => {
    // console.log('lightGallery has been initialized');
  };

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
      <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          selector=".gallery-item"
      >
        <div className={'grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3'}>
          <div className={'space-y-1 md:space-y-3'}>
            {gallery[0]?.image && (
                <div
                    className={'relative block overflow-hidden w-full aspect-[16/12] gallery-item'}
                    data-src={gallery[0]?.image}
                    onClick={handleClick}
                >
                  <ImageUI src={gallery[0]?.image} alt={'gallery'} />
                </div>
            )}
            {gallery[1]?.image && (
                <div
                    className={'relative block overflow-hidden w-full aspect-[12/16] gallery-item'}
                    data-src={gallery[1]?.image}
                    onClick={handleClick}
                >
                  <ImageUI src={gallery[1]?.image} alt={'gallery'} />
                </div>
            )}
          </div>
          <div className={'space-y-1 md:space-y-3'}>
            {gallery[2]?.image && (
                <div
                    className={'relative block overflow-hidden w-full aspect-[12/16] gallery-item'}
                    data-src={gallery[2]?.image}
                    onClick={handleClick}
                >
                  <ImageUI src={gallery[2]?.image} alt={'gallery'} />
                </div>
            )}
            {gallery[3]?.image && (
                <div
                    className={'relative block overflow-hidden w-full aspect-[16/12] gallery-item'}
                    data-src={gallery[3]?.image}
                    onClick={handleClick}
                >
                  <ImageUI src={gallery[3]?.image} alt={'gallery'} />
                </div
>
            )}
          </div>
          <div className={`${isForIndex ? 'md:block hidden' : 'block'} ${isGalleryPage ? 'col-span-2 md:col-span-1 flex flex-row md:flex-col space-y-0 space-x-1 md:space-x-0 md:space-y-3' : 'space-y-3'}`}>
            {gallery[4]?.image && (
                <div
                    className={`relative block overflow-hidden w-full ${isGalleryPage ? 'aspect-[16/12]' : 'aspect-video'} gallery-item`}
                    data-src={gallery[4]?.image}
                    onClick={handleClick}
                >
                  <ImageUI src={gallery[4]?.image} alt={'gallery'} />
                </div>
            )}
            {gallery[5]?.image && (
                <div
                    className={`relative block overflow-hidden w-full ${isGalleryPage ? 'aspect-[12/16]' : 'aspect-video'} gallery-item`}
                    data-src={gallery[5]?.image}
                    onClick={handleClick}
                >
                  <ImageUI src={gallery[5]?.image} alt={'gallery'} />
                </div>
            )}
          </div>
        </div>
      </LightGallery>
  );
};

export default GallerySection;
