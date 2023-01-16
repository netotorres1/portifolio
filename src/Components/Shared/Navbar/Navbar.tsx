import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.sass'
import {MdMenu, MdClose} from 'react-icons/md'

const logo = require('./../../../images/logo.svg').default;

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false) 

  const handleOpen = () => {
    setOpenMenu(!openMenu)

  }
  return (
    <header className='navbar'>
      <div className='container-navbar'>
        <img className='logo' src={logo} />
        <nav className={openMenu === false ? 'nav' : 'open'}>
          <Link to={'/'}> <button className='nav-button'>Pagina Inicial</button></Link>
          <Link to={'/portifolio'}><button className='nav-button'>Portifólio</button></Link>
          <Link to={'/contact'}><button className='nav-button'>Entrar em contato</button></Link>
        </nav>
        <button onClick={handleOpen} className='btnMenu'>{openMenu === false ? <MdMenu size={40} color={'#000'}/> : <MdClose size={40} color={'#000'}/>}</button>
      </div>
    </header>
  )
}

export default Navbar