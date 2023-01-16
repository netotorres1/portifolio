import React from 'react'

import './footer.sass'

const logo = require('./../../../images/logo-white.svg').default;
const github = require('./../../../images/icons/github.svg').default;
const twitter = require('./../../../images/icons/twitter.svg').default;
const linkedin = require('./../../../images/icons/linkedin.svg').default;

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='footer'>
        <div className='container-content'>
            <div className='footer-nav'>
                <img src={logo} />
                <button>Pagina Inicial</button>
                <button>Portifolio</button>
                <button>Entrar em contato</button>
            </div>
            <div className='footer-media'>
                <a href='https://github.com/netotorres1'><img alt='Github' src={github} /></a>
                <a href='https://www.linkedin.com/in/juviniano/'><img alt='Linkedin' src={linkedin} /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer