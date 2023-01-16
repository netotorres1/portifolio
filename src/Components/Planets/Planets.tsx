import { Link } from 'react-router-dom';
import './planets.sass'

const arrowleft = require('./../../images/icons/arrow-left.svg').default;
const arrowright = require('./../../images/icons/arrow-right.svg').default;

type Props = {}

const Planets = (props: Props) => {
  return (
    <section className='photosnap-content'>
        <div className='container-content'>
            <div className='imgtopPlanets'>
            </div>
            <div className='container-info'>
                <div className='title'>
                    <h2>Planets</h2>
                    <p>
                    Este é um projeto de multiplas paginas, fiz ele inteiramente responsivo para tablet e mobile. Utilizei React e styled-components na construção dele.
                    </p>
                    <span>HTML / CSS / Typescript / React / Styled-components</span>
                    <a href={'https://jolly-frangollo-10c2c7.netlify.app'}><button>Acessar o site</button></a>
                </div>
                <div className='images'>
                    <h2>Plano de fundo do projeto</h2>
                    <p>Este projeto foi um desafio front-end do Frontend Mentor. É uma plataforma que
                        permite que você pratique a construção de sites para um resumo de design e projeto. cada desafio
                        inclui designs para dispositivos móveis e computadores para mostrar como o site deve parecer em diferentes
                        tamanhos de tela. Criar esses projetos me ajudou a refinar meu fluxo de trabalho e resolver
                        problemas de codificação do mundo real. Aprendi algo novo a cada projeto, ajudando
                        me para melhorar e adaptar o meu estilo.</p>

                    <h2>Imagens</h2>
                    <div className='bgCapaPlanets'></div>
                    <div className='bgMobilePlanets'></div>
                </div>
            </div>
            <div className='container-previus-next'>
                <div className='previous'>
                    <h2>Designo</h2>
                    <Link to={'/designo'}><button><img alt='Anterior' src={arrowleft} />Projeto anterior</button></Link>
                </div>
                <div className='next'>
                    <h2>myteam</h2>
                   <Link to={'/myteam'}> <button>Projeto seguinte<img alt='Seguinte' src={arrowright} /></button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Planets