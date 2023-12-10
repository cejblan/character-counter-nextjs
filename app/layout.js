import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Contador de Caracteres',
  description: 'Contador de Caracteres con JavaScript',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6341118636252822"
          crossorigin="anonymous"></script>
      </head>
      <body className={"text-center " + inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
