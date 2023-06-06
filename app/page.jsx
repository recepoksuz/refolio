import React from 'react'
import ConnectWallet from '@/components/ConnectWallet'

const Page = () => {
  return (
    <div className='bg '>
            <div className='flex py-[180px] flex-col justify-center items-center'>
                <div className='content-title text-center font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-sky-500 to-sky-900'>
                    Practical for traders. <br />Easy for everyone.
                </div>
                <div className='text-white text-center font-sans font-semibold my-6 text-xl max-w-lg '>
                    A great solution for those who want to get to know their portfolio closely and follow prices.
                </div>
                <ConnectWallet/>
            </div>
        </div>
  )
}

export default Page