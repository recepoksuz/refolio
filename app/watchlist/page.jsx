"use client"
import Tabs from '@/components/Tabs'
import React from 'react'
import { useStorken } from '@/data/storken/storken'
import { useEffect, useState } from 'react'
import Table from '@/components/Table'
import { useRouter } from 'next/navigation'

const Page = () => {
  const [accountAdress, AccountAdress] = useStorken("accountAdress")
  const [isActive, IsActive] = useStorken("isActive")
  const [coins, setCoins] = useState([]);
  const localCoins = JSON.parse(localStorage.getItem(accountAdress)) || [];
  const router = useRouter()
  
  useEffect(() => {
    if (!isActive) {
        return router.push("/ooopss")
    }
}, [])

  useEffect(() => {
    const getCoin = async()=>{
      try {
        const response = await fetch(
          "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
          {
            headers: {
              'X-CMC_PRO_API_KEY': 'e7ad801e-5ae2-4ae7-a285-be3373758083'
            }
          }
        );

        const data = await response.json();
        console.log(data)

        const filteredData = data.data.filter((item) => localCoins.includes(item.id));
        setCoins(filteredData)
      } catch (error) {
        console.error('Bir hata oluştu:', error);
      }
    }

    getCoin()
  }, [localStorage.getItem(accountAdress)]);

  return (
    <div className='flex justify-center items-center'>
      <div className='w-3/5 gap-3 my-4'>
        <Tabs />
        <Table data = {coins}/>
      </div>
    </div>
  )
}

export default Page