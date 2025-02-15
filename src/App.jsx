import { useState } from 'react'
import { Navbar, Popup, Hero, Contact, Footer } from './components'
import { Services, Gallery, Membership } from './pages'


function App() {
  const [show, setShow] = useState(false)
  document.body.style.overflow = show ? 'hidden' : 'visible'

  return (
    <>
      {show && <Popup setShow={setShow} />}
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Membership />
      <Contact />
      <Footer />
    </>
  )
}

export default App
