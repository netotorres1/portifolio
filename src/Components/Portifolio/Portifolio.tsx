import React from 'react'
import { Link } from 'react-router-dom'

import './portifolio.sass'

const Portifolio = () => {
  return (
    <section className='container-portifolio'>
        <div className='container-content'>
            <div>
                <div className='imgphotosnap'>

                </div>
                <div className='container-text'>
                    <h2>Pothosnap</h2>
                    <p>Este é um projeto de multiplas paginas, fiz ele inteiramente responsivo para tablet e mobile. Utilizei React e SASS na construção dele.</p>
                    <Link to={'/photosnap'}><button>Ver Projeto</button></Link>
                </div>
            </div>
            <div className='arch'>
                
                <div className='container-text'>
                    <h2>Arch</h2>
                    <p>Este é um projeto de multiplas paginas, fiz ele inteiramente responsivo para tablet e mobile. Utilizei React e styled-components na construção dele.</p>
                    <Link to={'/arch'}><button>Ver Projeto</button></Link> 
                </div>
                <div className='imgarch'>
                </div>
            </div>
            <div>
                <div className='imgdesigno'>

                </div>
                <div className='container-text'>
                    <h2>Designo</h2>
                    <p>Este é um grande projeto de multiplas paginas e diferentes layouts. fiz ele inteiramente responsivo para tablet e mobile. Utilizei Next na construção dele.</p>
                    <Link to={'/designo'}><button>Ver Projeto</button></Link>
                </div>
            </div>
            <div className='planets'>
               
                <div className='container-text'>
                    <h2>Planets</h2>
                    <p>Este é um projeto de multiplas paginas, fiz ele inteiramente responsivo para tablet e mobile. Utilizei React e styled-components na construção dele.</p>
                    <Link to={'/planets'}><button>Ver Projeto</button></Link>
                </div>
                <div className='imgplanets'>

                </div>
            </div>
            <div>
                <div className='imgmyteam'>

                </div>
                <div className='container-text'>
                    <h2>my team</h2>
                    <p>Este é um projeto de multiplas paginas, fiz ele inteiramente responsivo para tablet e mobile. Utilizei React e SASS na construção dele.</p>
                    <Link to={'/myteam'}><button>Ver Projeto</button></Link>          
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portifolio