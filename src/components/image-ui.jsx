"use client"
import { useState } from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'));

const ImageUI
    = ({ src, alt, priority = false, isBorder =false,isBorderWhite=false , objectFitContain = false, card = false, quality = 90, imageStyle }) => {
  const [loading, setLoading] = useState(true);

  const classNames = `${objectFitContain ? 'object-contain' : 'object-cover'} w-full h-full duration-200 ease-in-out ${imageStyle ? imageStyle : 'object-top'} ${loading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0 z-[3]'}`;

  const borderStyle = `z-[2]  ${isBorderWhite ? 'before:border-white after:border-white':'before:border-[#00274D] after:border-[#00274D]' } relative w-full h-full  before:content-[''] before:duration-150  before:absolute before:w-[96%] before:h-[90%] before:-top-[2%] before:z-[1]  before:left-[2%] before:border-[0.5px]  before:z-1 after:content-[''] after:duration-150  after:absolute after:z-[0] after:w-[104%] after:h-[90%] after:-top-[-4%] after:left-[-2%] after:border  after:z-2`

  return (
      <div className={` ${
          isBorder && borderStyle
      }`}>
      <Image
          src={src}
          alt={alt}
          fill
          className={classNames}
          quality={quality}
          priority={priority}
          onLoad={() => setLoading(false)}
          sizes={`${card ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' : '100vw'}`}
      />

      </div>
  );
};

export default ImageUI

