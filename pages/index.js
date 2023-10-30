import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar'
import Hero from './hero'
import Footer from '@/components/footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Footer />
    </>
  )
}
