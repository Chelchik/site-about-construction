import React, { useContext } from 'react'
import logo from '../websiteImage/logo.png'
import { NavLink } from 'react-router-dom';
import menu from '../websiteImage/menu.png'
import { Theme } from '../context';
import moon from '../websiteImage/moon.webp'
import sun from '../websiteImage/sun.webp'

function Header() {
  const {theme, setTheme} = useContext(Theme) 

  const isDarkFunc = () => {
    setTheme(!theme)
  }

  return (
    <header>
        <div className='logo'>
            <div className="burger-box">
                <img src={menu} alt="" />
           </div>

            <a href=""><img src={logo} alt="" className='logo-img' /></a>
        </div>

        <nav>
            <ul className='menu'>
                <li className='menu-bar'><NavLink to='/' className='menu-link'>HOME</NavLink></li>
                <li className='menu-bar'><NavLink to='about' className='menu-link'>ABOUT</NavLink></li>
                <li className='menu-bar'><NavLink to='services' className='menu-link'>SERVICES</NavLink></li>
                <li className='menu-bar'><NavLink to='contact' className='menu-link'>CONTACTS</NavLink></li>
            </ul>
        </nav>

        <button className='themeBtn' onClick={isDarkFunc}><img src={theme ? moon : sun} alt="" /></button>
    </header>
  )
}

export default Header;