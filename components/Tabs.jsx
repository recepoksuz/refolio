"use client"
import Link from 'next/link'
import React from 'react'

const Tabs = () => {
    const tabs = [
        {
            name: "List",
            url: "list"
        },
        {
            name: "Watchlist",
            url: "watchlist"
        },
        {
            name: "My Portfolio",
            url: "myportfolio"
        }
    ]
    return (
        <div>
            <div className='my-3  p-3 flex justify-around items-center bg-gray-100 dark:bg-gray-900 gap-7 rounded-lg'>
                {
                    tabs.map((tab, i) => (
                        <li key={i} className='list-none'>
                            <Link className={`cursor-pointer p-1 hover:opacity-75 hover:bg-gray-500 rounded-xl transition-opacity ${false ? "underline underline-offset-8 text-sky-600" : " "}`} href={tab.url}> {tab.name} </Link>
                        </li>   
                    ))
                }
            </div>

        </div>
    )
}

export default Tabs