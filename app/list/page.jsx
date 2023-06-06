"use client"
import { useStorken } from '../../data/storken/storken'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import React from 'react'
import Tabs from '@/components/Tabs'
import Table from '@/components/Table'

const Page = () => {
    const [isActive, IsActive] = useStorken("isActive")
    const [coins, setCoins] = useState([]);
    const router = useRouter()

    useEffect(() => {
        if (!isActive) {
            return router.push("/ooopss")
        }
    }, [])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
              {
                headers: {
                  'X-CMC_PRO_API_KEY': 'e7ad801e-5ae2-4ae7-a285-be3373758083'
                }
              }
            );
            const data = await response.json();
            console.log(data)
            setCoins(data.data); // Verileri state'e kaydet
          } catch (error) {
            console.error('Bir hata oluştu:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <div className='flex justify-center items-center'>
            <div className='w-3/5 gap-3 my-4'>
                <Tabs />
                <Table data={coins}/>
            </div>
        </div>

    )
}

export default Page