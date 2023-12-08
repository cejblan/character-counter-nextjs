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
      <body className={"text-center " + inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
