import React from 'react'

import './contact.sass'

const github = require('./../../images/icons/github-black.svg').default;
const Linkedin = require('./../../images/icons/linkedin-black.svg').default;

type Props = {}

const Contact = (props: Props) => {
  return (
    <section className='container-contact'>
        <div className='contact-content'>
            <h2>Entre em contato</h2>
            <div className='container-info'>
                <p>Adoraria saber no que você está trabalhando e como posso ajudar. Eu estou atualmente 
                    aberto a uma ampla gama de oportunidades. Eu sou uma pessoa trabalhadora e positiva
                    que sempre abordará cada tarefa com um senso de propósito e atenção aos detalhes.
                    Sinta-se à vontade para verificar meus perfis online abaixo e entrar em contato.</p>
                <div className='icons'>
                    <a href='https://github.com/netotorres1'><img alt='Github' src={github} /></a>
                    <a href='https://www.linkedin.com/in/juviniano/'><img alt='Linkedin' src={Linkedin} /></a>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Contact