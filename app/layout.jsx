import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Refolio',
  description: 'Refolio - Web3 portfolio',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='min-h-full'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
