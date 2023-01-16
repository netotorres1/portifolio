import React from 'react'
import { Link } from 'react-router-dom'

import './aboutblockthree.sass'

const AboutBlockThree = () => {
  return (
    <div className='contact'>
        <div className='contact-content'>
            <h2>Interessado em fazer algum projeto comigo?</h2>
            <Link to={'/contact'}><button>Entrar em Contato</button></Link>
        </div>
    </div>
  )
}

export default AboutBlockThree