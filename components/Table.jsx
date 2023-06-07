"uuse client"
import React, { useEffect, useState } from 'react'
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { useStorken } from '@/data/storken/storken'


const Table = ({ data }) => {
    const [accountAdress, AccountAdress] = useStorken("accountAdress")
    const addresses = JSON.parse(localStorage.getItem(accountAdress)) || [];

    const isCoinInWatchlist = (id) => addresses.includes(id);
    
    const localController = (id) => {
        // ID'nin dizide olup olmadığını kontrol et
        const idExists = addresses.includes(id);

        // ID dizide yoksa, yeni ID'yi ekleyin
        if (!idExists) {
            addresses.push(id);
            localStorage.setItem(accountAdress, JSON.stringify(addresses));

        } else {
            const updatedAddresses = addresses.filter(ids => ids !== id);
            localStorage.setItem(accountAdress, JSON.stringify(updatedAddresses));
        }
    }

    return (
        <div>
            <div className="">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 rounded-tl-xl">
                                #
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3 text-right">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3 text-right">
                                24H%
                            </th>
                            <th scope="col" class="px-6 py-3 text-right">
                                Volume (24H)
                            </th>
                            <th scope="col" class="px-6 py-3 text-right rounded-tr-xl"   >
                                Watchlist Add
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((coin, i) => (
                                <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <th class="px-6 py-4">
                                        {i + 1}
                                    </th>
                                    <th scope="row" class="px-6 py-4 flex items-center gap-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {<img className='w-6' src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} alt="" />} {coin.name} {coin.symbol}
                                    </th>
                                    <td class="px-6 py-4 text-right">
                                        ${coin.quote.USD.price > 1 ? coin.quote.USD.price.toFixed(2) : coin.quote.USD.price.toFixed(7)}
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        {coin.quote.USD.percent_change_24h.toFixed(2)}%
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        ${coin.quote.USD.volume_24h.toFixed(2)}
                                    </td>
                                    <td key={i} onClick={() => localController(coin.id)} class="flex justify-center text-right text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer">
                                        {isCoinInWatchlist(coin.id) ? <AiFillStar /> : <AiOutlineStar />}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table