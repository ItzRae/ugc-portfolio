import Nav from '@/components/Nav/Nav'
import Hero from '@/components/Hero/Hero'
import Portfolio from '@/components/Portfolio/Portfolio'
import Stats from '@/components/Stats/Stats'
import Brandticker from '@/components/BrandTicker/BrandTicker'
import Testimonials from '@/components/Testimonials/Testimonials'
import Contact from '@/components/Contact/Contact'
 
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Brandticker />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  )
}
 