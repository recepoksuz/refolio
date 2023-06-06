"use client"
import React from 'react'
import ConnectWallet from './ConnectWallet'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()
  return (
    <div>
        <div className='h-16 w-full flex justify-between px-12 py-2 items-center'>
                <div className=' w-36'>
                    <img className="cursor-pointer" onClick={()=>router.push("/")} src="https://i.hizliresim.com/2h3gojs.png" alt="" />
                </div>
                <div>
                    <ConnectWallet/>
                </div>
            </div>
    </div>
  )
}

export default Header