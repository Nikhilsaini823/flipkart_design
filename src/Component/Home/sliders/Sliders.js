import React from 'react'
import './Slider.css'
import ProductSlider from './ProductSlider'

function Sliders() {
    const images = [
            "/images/firstslider.jpg"
        ,
             "/images/5f.webp"
        ,
             "/images/56.webp"
        ,
             '/images/11.webp'
    ]

    return (
        <>
            <div id="slider">
                {images.map((img, index) => (
                    <figure key={index}>
                        <img src={img} alt="...." />
                    </figure>
                ))}
            </div>
            <ProductSlider />
        </>
    )
}

export default Sliders
