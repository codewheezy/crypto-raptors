// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero';
import { useWeb3 } from '@3rdweb/hooks';

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#ffffff]`,
  button: `border border-[#2081e2] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-white`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
}

export default function Home() {
  const { address, connectWallet } = useWeb3()
  return (
    <div className={style.wrapper}>
      {address ? (
         <>
         <Header />
         <Hero />
       </>
      ): (
        <div className={style.walletConnectWrapper}>
           <button
            className={style.button}
            onClick={() => connectWallet('injected')}
           >
            Connect Wallet
           </button>
           <div className={style.details}>
             You need Chrome to be <br /> able to run this app.
           </div>
        </div>
      )}
    </div>
  );
}

