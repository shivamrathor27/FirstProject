import React, { useRef } from 'react'
import { Header } from '../components'
import '../styles/gallery.css'

const Gallery = () => {
    const currSlide = useRef(0);
    const totalSlides = 5

    function adjustSlide() {
        // set limit
        const slides = document.getElementsByClassName('slide');
        [...slides].forEach((slide) => {
            console.log(slide)
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
                    {Array(totalSlides).fill().map((n, i) => (
                        <div key={i} className="slide">
                            <div className="slide-image">Image</div>
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