import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/app_icon.svg'

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <img src={icon} alt='8bit-url icon' />
        <br />
        <h3>8bit URL Shortener</h3>
      </Link>
    </header>
  )
}

export default Header
