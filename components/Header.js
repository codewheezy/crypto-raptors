import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import openseaLogo from '../assets/opensea.svg'
import { AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';


const style = {
    wrapper: `bg-[#ffffff] w-screen h-[72px] flex sticky shadow-lg z-[110] top-0`,
    logoContainer: `flex items-center cursor-pointer pl-4`,
    logoText: `ml-2.5 text-[#04111D] font-semibold text-xl`,
    searchContainer: `flex flex-1 flex-row items-center`,
    searchBar: `flex flex-1 ml-5 h-[45px] w-max-[520px] items-center border rounded-[10px]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: `flex items-center justify-end`,
    headerItem: `text-black-rgba px-5 font-bold  hover:text-[#04111d] cursor-pointer`,
    headerIcon: `text-[#707a83] text-3xl font-black px-4 hover:text-[#04111d] cursor-pointer`
}

const Header = () => {
    return <div className={style.wrapper}>
        <Link href='/'>
           <div className={style.logoContainer}> 
              <Image src={openseaLogo}  width={'40px'} height={'40px'} /> 
              <div className={style.logoText}>Opensea</div>
           </div>
        </Link>
        <div className={style.searchContainer}>
            <div className={style.searchBar}>
                <div className={style.searchIcon}>
                   <AiOutlineSearch />
                </div>
                <input 
                  className={style.searchInput} 
                  placeholder='Search items, collections, and accounts' />  
           </div>
        </div>
        <div className={style.headerItems}>
            <div className={style.headerItems}>
                <Link href='/explore/0x6F814b1e2a1b83ad7909B7d76B11ec80d52783F3'>
                  <div className={style.headerItem}>Explore</div>
                </Link>
                <div className={style.headerItem}>Stats</div>
                <div className={style.headerItem}>Resources</div>
                <div className={style.headerItem}>Create</div>
                <div className={style.headerIcon}>
                    <CgProfile />
                </div>
                <div className={style.headerIcon}>
                    <MdOutlineAccountBalanceWallet />
                </div>
            </div>
        </div>
    </div>
}

export default Header