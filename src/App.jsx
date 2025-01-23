import { useState } from 'react'
import Body from './Body'
import Footer from './Footer'
import ResponsiveAppBar from './ResponsiveAppBar'
import Popup from './Popup'
import "./style.css"
import GymImageList from './GymImageList'
import Contact from './Contact'
import Map from './Map'

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
