import React from 'react'
import { Link } from 'react-router-dom'

import './AboutBlockTwo.sass'

const AboutBlockTwo = () => {
  return (
    <section className='container-about'>
        <div className='container-content'>
            <div className='container-text'>
                <div>
                    <h2>Sobre mim</h2>
                    <p>
                        Sou um desenvolvedor front-end júnior em busca de crecimento profissional e aprimorar minhas habilidades tecnicas.
                        Eu me empenho em escrever HTML acessível, usando práticas modernas de CSS e escrevendo de forma limpa
                        JavaScript. Ao escrever código JavaScript, uso principalmente o React, mas posso me adaptar a
                        quaisquer ferramentas necessárias.
                    </p>
                    <Link to={'/portifolio'}><button>Ir para o portifólio</button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutBlockTwo