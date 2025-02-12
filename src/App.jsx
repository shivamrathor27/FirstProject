import { useState } from 'react'
import { Navbar, Popup, Hero, Contact, Footer } from './components'
import { Services, Gallery, Membership } from './pages'


function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  function openPopup(){
    setShow(true)
  }

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
