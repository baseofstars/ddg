import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DD FREIGHT LLC | Event Logistics & Global Freight Specialists',
  description: 'Premier event & exhibition logistics across the GCC. Concerts, trade fairs, fine art — precision delivery with zero-delay standard. UAE, KSA, Qatar, Oman.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'DD FREIGHT LLC',
    description: 'Event & Exhibition Logistics | Global Freight Forwarding',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProgress />
        <Navbar />
        <main className="page-enter">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
