import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './provider'
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aryan Shirsat',
  description: 'Aryan Shirsat Portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} no-scrollbar`}>
        <Providers>
          {children}
          <SpeedInsights />
        </Providers>
        
        </body>
    </html>
  )
}
