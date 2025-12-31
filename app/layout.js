import './globals.css'
import { Inter, Manrope, League_Script } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ 
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-manrope'
})
const leagueScript = League_Script({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-league-script'
})

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
      <body className={`${inter.className} ${manrope.variable} ${leagueScript.variable}`}>
        {children}
      </body>
    </html>
  )
}

