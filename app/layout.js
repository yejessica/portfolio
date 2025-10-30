import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jessica Ye',
  description: 'Personal website of Jessica Ye',
  icons: {
    icon: '/img/logo.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}

