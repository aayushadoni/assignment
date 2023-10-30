import React from 'react'
import logo from '../../logo.png'
import {BiWalletAlt, BiDotsVerticalRounded} from 'react-icons/bi'
import {FaEthereum} from 'react-icons/fa'
const NavBar = () => {
  return (
    <div className='flex items-center h-16 shadow-md'>
        <div className='flex'>
        <a href='/'>
          <img
            src={logo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a> Romi Finance</div>
        <div className=' flex-1 flex justify-center items-center gap-8'>
            <a href='/' className='hover:text-white text-gray-400'>Home</a>
            <a href='/dashboard' className='hover:text-white text-gray-400'>Dashboard</a>
            <div className='hover:text-white text-gray-400'>NFT</div>
            <a href='/earn' className='hover:text-white text-gray-400'>Earn</a>
            <div className='hover:text-white text-gray-400'>Buy</div>
            <div className='hover:text-white text-gray-400'>Refferals</div>
            <div className='hover:text-white text-gray-400'>Ecosystem</div>
            <div className='hover:text-white text-gray-400'>About</div>
        </div>
        <div className='flex justify-end gap-8 mr-4'>
        <button class=" flex ml-2 mt-2 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded items-center justify-center"> 
            Trade
        </button>
        <button class=" flex ml-2 mt-2 border border-slate-300 hover:bg-gray-700 text-white py-2 px-4 rounded items-center justify-center"> 
            <BiWalletAlt/>
            <span className='ml-2'>Connect Wallet</span>
        </button>
        <button class=" flex ml-2 mt-2 border gap-2 border-slate-300 hover:bg-gray-700 text-white py-2 px-4 rounded items-center justify-center"> 
            <FaEthereum/>
            <BiDotsVerticalRounded size={20} />
        </button>
        </div>
    </div>
  )
}

export default NavBar