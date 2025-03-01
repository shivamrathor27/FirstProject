import React, { useEffect, useRef } from 'react'
import { Header } from '../components'
import '../styles/gallery.css'
import data from '../data.json'

const Gallery = () => {
    const currSlide = useRef(0);
    
    const totalSlides = data.gallery.length;
    useEffect(()=>{
        const id = setInterval(() => {
            handleRight()
        }, 4000);
        
        return ()=>{
            clearInterval(id);
        }
    },[])

    function adjustSlide() {
        const slides = document.getElementsByClassName('slide');
        [...slides].forEach((slide) => {
            slide.style.transform = `translateX(-${100 * currSlide.current}%)`
        })
    }

    function handleLeft() {
        currSlide.current = (currSlide.current - 1 + totalSlides) % totalSlides
        adjustSlide()
    }
    function handleRight() {
        currSlide.current = (currSlide.current + 1) % totalSlides
        adjustSlide()
    }

    return (
        <div className='gallery' id='gallery'>
            <Header title="GALLERY" />
            <div className="gallery-images">
                <div className="slider">
                    {data.gallery.map((item, i) => (
                        <div key={i} className="slide">
                            <div className="slide-image" style={{backgroundImage: `url(${item})`}}></div>
                        </div>
                    ))}
                </div>
                <button onClick={handleLeft} className="slider-button left">❮</button>
                <button onClick={handleRight} className="slider-button right">❯</button>
            </div>
        </div>
    )
}

export default Gallery
