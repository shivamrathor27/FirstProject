import { useState } from 'react'
import { Navbar, Popup, Hero } from './components'
import { Services, Gallery } from './pages'


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
    </>
  )
}

export default App
