'use client'

import React from 'react'
import Image from 'next/image';


import ucsi_uni_logo from '@/assets/ucsi_uni_logo.png'
import qs_world_ranking from '@/assets/qs_world_ranking_2026.png'
import applynow_button from '@/assets/applynow_button.png'
import ucsiradio_button from '@/assets/ucsiradio_button.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useMobileMenuContext } from '@/context/MobileMenuContext';

const TopNav = () => {
      const {isOpen, setIsOpen} = useMobileMenuContext()
  return (
    <>
        {/* <div className='m-auto w-full '> */}
        {/* <div className='flex justify-between w-8/12 m-auto'> */}
        <div className='w-full max-w-xl m-auto mt-16 mb-10'>
        <div className='flex flex-col items-center justify-center gap-3'>
        <div className='flex items-center gap-10'>
            <div className='sm:hidden'>
                <GiHamburgerMenu 
                onClick={() => setIsOpen(true)}
                className='text-2xl cursor-pointer' />
            </div>
            <div className='flex flex-col md:flex-row  gap-7'>
                <Image src={ucsi_uni_logo} alt="UCSI University Logo" className='w-10/12' />
                <Image src={qs_world_ranking} alt="UCSI University Logo" />

            </div>
            </div>
            <div className='flex gap-3'>
                <Image src={applynow_button} alt="UCSI University Logo" />
                <Image src={ucsiradio_button} alt="UCSI University Logo" />

            </div>
        </div>
        </div>
    </>
  )
}

export default TopNav