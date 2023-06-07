"use client"
import Link from 'next/link'
import {React, useEffect, useState} from 'react'

const Tabs = () => {

    const [path,setPath] = useState("")

    useEffect(() => {
        setPath(window.location.pathname)
    }, []);

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
                            <Link className={`cursor-pointer p-1 h-full w-full hover:opacity-80 hover:bg-gray-600 rounded-xl transition-opacity ${path === `/${tab.url}` ? "underline underline-offset-8 text-sky-600 hover:opacity-100" : " "}`} href={tab.url}> {tab.name} </Link>
                        </li>   
                    ))
                }
            </div>

        </div>
    )
}

export default Tabs