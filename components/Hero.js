import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/YyzGD0VC3GvFafiWQwIQ_M4U8XauTI28S8VTImMLXkQ4DrJh-1AzGejZLQ5Q9uUluw7KMads8FdzfwtWBC8_jwvaOGxMkWZAY6KQNQ=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-[#04111d] text-[45px] font-semibold leading-[110%]`,
  description: `text-[#353840] container-[400px] text-[24px] mt-[0.8rem] mb-[2.5rem] font-normal leading-6`,
  ctaContainer: `flex`,
  accentedButton: `relative text-base font-semibold px-5 py-3 bg-[#2081e2] w-[167px] rounded-lg mr-5 text-white hover:bg-[#1868b7] hover:shadow cursor-pointer`,
  button: `relative text-base font-semibold px-5 py-3 bg-white w-[167px] rounded-lg mr-5 text-[#2081e2] border border-solid border-[#2081e2] hover:shadow hover:border hover:border-solid hover:border-[#1868b7] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-white p-4 rounded-b-lg flex items-center text-white mt-[-10px]`,
  author: `flex flex-col justify-center ml-4`,
  name: `text-[#04111d] text-[14px] font-semibold`,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
} 

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className={style.description}>
              OpenSea is the world&apos;s first and largest NFT marketplace
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://lh3.googleusercontent.com/YyzGD0VC3GvFafiWQwIQ_M4U8XauTI28S8VTImMLXkQ4DrJh-1AzGejZLQ5Q9uUluw7KMads8FdzfwtWBC8_jwvaOGxMkWZAY6KQNQ=s550"
              alt=""
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/XOoM_XxAXjvNvP_U2RIGFXKREAwGWmMYN1G4kuW-nG062CqIrYjliS9HtGZnYV8kc_K6gK4tLPsLSXm3ihWNDahpB6Tqix8hHG3L5w=s80"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>Jolly</div>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                >
                  hola-kanola
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
