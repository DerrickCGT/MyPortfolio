import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </main>
  )
}
