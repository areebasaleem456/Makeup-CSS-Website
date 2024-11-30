import Link from 'next/link'
import React from 'react'
import "../styles/header.css"
import { FaShoppingCart } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='logo'>Areeba's Cosmetics</h1>
        <nav>
      <Link id='name' href="/" target='_blank'>Home</Link>
      <Link id='name' href="/about" target='_blank'>About</Link>
      <Link id='name' href="/product" target='_blaank'>Product</Link>
      <Link id='name' href="/contact" target='_blank'>Contact</Link>
      <FaShoppingCart style={{color:"black",fontSize:"20px"}} /> 
        </nav>
    </header>
  )
}

export default Header