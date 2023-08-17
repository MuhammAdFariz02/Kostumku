import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

// Images
import illustrate1 from './assets/images/illustrate_1.jpg'
import illustrate2 from './assets/images/illustrate_2.jpg'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero
          image={illustrate1}
          imageAlt='A man pointing on a huge sewing machine with a girl sitting on a pile of books'
        >
          <h4>Desain baju secara online</h4>
          <h4>#dirumahaja</h4>
          <h2>Desain Sesuai Keinginanmu</h2>
          <p>Tampil keren dengan kaos hasil desain sendiri</p>
          <p>Tampil Stylish dengan gaya desain yang beragam, berikan desain anda dan akan kami bantu</p>
        </Hero>
        <Hero
          image={illustrate2}
          imageAlt='A tailor trying to measure the body of its client'
          className='martop-lg'
        >
          <h2>Sesuaikan dengan ukuranmu</h2>
          <p>Dengan menggunakan platform desain baju secara langsung di platform ini, kamu dapat menyesuaikan ukurannya sesuai dengan kebutuhanmu</p>
        </Hero>
      </main>
      <Footer />
    </>
  )
}

export default App
