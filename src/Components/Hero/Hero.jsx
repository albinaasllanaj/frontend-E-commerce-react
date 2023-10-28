import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

 const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals</h2>
            <div className='heading-main'>
                <div className="hero-hand-icon">
                <p className='heading'>New</p>
                
            </div>
            <p className='heading'>Collections</p>
            <p className='heading'>For Everyone</p>
            </div>
            
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>


        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}


export default Hero