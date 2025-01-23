import { useState } from 'react'
import Body from './body'
import Footer from './Footer'
import ResponsiveAppBar from './ResponsiveAppBar'
import Popup from './Popup'
import "./style.css"
import GymImageList from './GymImageList'
import Contact from './contact'
import Map from './map'

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)

  function openPopup(){
    setShow(true)
  }

  return (
    <>
    {show &&
      <Popup setShow={setShow}/>
    }
      <ResponsiveAppBar />
      <Body />
      <GymImageList />
      <div className='contactMap'>
        <Contact />
        <Map />
      </div>
      <Footer />
      
    </>
  )
}

export default App
