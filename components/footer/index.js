import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import {BiLogoDiscord} from 'react-icons/bi'
import {FaMediumM, FaTelegram} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {logo} from '../../logo.png'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center shadow-md m-2'>
        <div className='flex flex-row'>
            <img src={logo} />
            <span>Romi Finance</span>
            </div>
        <div className='flex flex-row gap-8 items-center justify-center my-4'>
            <BsTwitter size={30}/>
            <FaMediumM size={30}/>
            <BsGithub size={30}/>
            <FaTelegram size={30}/>
            <BiLogoDiscord size={30}/>
        </div>
        <div className='flex flex-row gap-4'>
            <span>Terms and Conditions</span>
            <span>Referral Terms</span>
            <span>Media Kit</span>
        </div>
    </div>
  )
}

export default Footer

