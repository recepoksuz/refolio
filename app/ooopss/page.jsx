"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import ConnectWallet from '@/components/ConnectWallet'

const Page = () => {
  return (
    <div className="m-3 flex flex-col items-center">
        <div className="text-3xl my-7">Oooppss! Cüzdana bağlanılamadı. Cüzdanını bağla!</div>
        <ConnectWallet/>  
    </div>
  )
}

export default Page