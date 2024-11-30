import React from 'react'
import "../styles/hero.css"

const Hero = () => {
  return (
    <div>
    <section className='hero' style={{backgroundImage:"url(/background.jpg)"}}>
        <div className='home'>
            <h1 className='fade-in'>Welcome To My Cosmetic's Outlet</h1>
            <p>Your one-stop shop for best cosmetics-product</p>
            <button>Shop Now</button>
        </div>
    </section>
    </div>
  )
}

export default Hero