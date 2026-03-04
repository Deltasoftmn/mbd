import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Training from '@/components/Training'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Training />
        <Footer />
      </main>
    </>
  )
}
