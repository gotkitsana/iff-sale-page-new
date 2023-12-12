import type { Metadata } from 'next'
import { Kanit } from "next/font/google"
import './globals.css'
import { NextUIProviders } from '@/provider/NextUI'
import AOSInit from '@/provider/aos'

const kanit = Kanit({ weight: ['300','400', '500', '600', '700'], subsets: ['thai'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://interfishfarm.com'),
  title: 'Inter Fish Farm',
  description: 'The Best Koi you will ever need ฟาร์มปลาคาร์พนำเข้าจากประเทศญี่ปุ่นระดับพรีเมียมไซต์ใหญ่พร้อมส่ง',
  openGraph: {
    url: 'https://interfishfarm.com',
    title: 'Inter Fish Farm',
    description: 'The Best Koi you will ever need ฟาร์มปลาคาร์พนำเข้าจากประเทศญี่ปุ่นระดับพรีเมียมไซต์ใหญ่พร้อมส่ง',
    images: [
      {
        url: '/logo-img.png',
        width: 1000,
        height: 1000,
        type: 'image/png',
      },
    ],
    type: 'website',
    siteName: 'Inter Fish Farm',
  },
  icons: {
    icon: '/logo-icon.png',
    shortcut: '/logo-icon.png',
    apple: '/logo-icon.png',
    other: {
      rel: 'iff-logo',
      url: '/logo-icon.png',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <AOSInit />
      <body className={kanit.className}>
        <NextUIProviders>
          {children}
        </NextUIProviders>
      </body>
    </html>
  )
}
