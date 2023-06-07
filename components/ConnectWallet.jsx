"use client"
import React, { useState, useEffect } from 'react'
import { useStorken } from '@/data/storken/storken'
import { useRouter } from 'next/navigation';

const ConnectWallet = () => {
    const [accountAdress, AccountAdress] = useStorken("accountAdress")
    const [isActive, IsActive] = useStorken("isActive")
    const router = useRouter()

    useEffect(() => {
        connectToWallet
    }, []);

    async function connectToWallet() {

        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                })
                AccountAdress.set(accounts[0])
                IsActive.set(true)
                console.log(accountAdress)
                router.push("/list")
            } catch (error) {
                alert(`Hesaba bağlanırken hata oluştu ${error}`)
            }
        }
        else {
            alert("Metamask tarayıcıda yüklü değil!")
            return
        }

    }

    return (
        <div>
            <button onClick={connectToWallet} className='px-3 py-2 rounded-full font-semibold hover:bg-sky-900 transition-all text-white border-sky-600 border-2 :'>
                {isActive !== false ? "Go List Page" : "Connect Wallet"}
            </button>
        </div>
    )
}

export default ConnectWallet