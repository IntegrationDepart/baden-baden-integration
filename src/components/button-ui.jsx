import Link from "next/link"

const ButtonUI = ({href, target, content, onClick, borderBtn , borderWhite, hrefToPage, onlyHref}) => {
  const defaultStyle = 'font-jost text-currentBlue border-currentBlue font-normal relative z-[2] delay-100 block py-3 px-[30px] duration-200 lg:text-lg leading-[26px] tracing-[0] before:w-full before:h-[1px] before:border-x  before:absolute before:-bottom-1.5 before:duration-200 hover:before:bottom-[-0.5px] before:z-[11]  before:left-0  border '
  const borderWhiteStyle = 'border-white bg-transparent text-white before:bg-white before:border-white hover:bg-white hover:text-currentBlue hover:border-currentBlue hover:before:bg-currentBlue hover:before:border-currentBlue'
  const defaultBorderStyle = 'border-currentBlue text-currentBlue hover:bg-currentBlue hover:text-white before:bg-currentBlue before:border-currentBlue'
  const blueBtnStyle = 'before:bg-currentBlue bg-currentBlue text-white border-currentBlue before:border-currentBlue hover:bg-white hover:text-currentBlue'
  return (
    <>
    {
      hrefToPage  ?
      <Link href={hrefToPage} target={target} className={` ${onlyHref ? "p-[10px_26px] md:p-[12px_30px] bg-white text-currentBlue underline underline-offset-2 " : `${defaultStyle}
      ${borderBtn ? `${borderWhite ? `${borderWhiteStyle}` :  `${defaultBorderStyle}`}` 
     :  `${blueBtnStyle}`}`} `}>
      {content}
      </Link>
      :
      <>
      {
        href  ?
        <a href={href} target={target} className={` ${defaultStyle}
        ${borderBtn ? `${borderWhite ? `${borderWhiteStyle}` :  `${defaultBorderStyle}`}` 
       :  `${blueBtnStyle}`}`}>
          {content}
        </a>
        : 
        <button onClick={onClick} className={` ${defaultStyle}
        ${borderBtn ? `${borderWhite ? `${borderWhiteStyle}` :  `${defaultBorderStyle}`}` 
       :  `${blueBtnStyle}`}`}>
          {content}
        </button>
      }
      </>

    }

    </>
  )
}

export default ButtonUI