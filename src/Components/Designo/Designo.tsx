
import { Link } from 'react-router-dom';
import './designo.sass'

const arrowleft = require('./../../images/icons/arrow-left.svg').default;
const arrowright = require('./../../images/icons/arrow-right.svg').default;

type Props = {}

const Designo = (props: Props) => {
  return (
    <section className='photosnap-content'>
        <div className='container-content'>
            <div className='imgtopDesigno'>
            </div>
            <div className='container-info'>
                <div className='title'>
                    <h2>Designo</h2>
                    <p>
                        Este é um grande projeto de multiplas paginas e diferentes layouts. fiz ele inteiramente responsivo para tablet e mobile. Utilizei Next na construção dele.
                    </p>
                    <span>HTML / CSS / Javascrit / React / NextJS </span>
                    <a href={'https://designo-t3sb-ovzd41ht2-netotorres1.vercel.app/'}><button>Acessar o site</button></a>
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
                    <div className='bgCapaDesigno'></div>
                    <div className='bgMobileDesigno'></div>
                </div>
            </div>
            <div className='container-previus-next'>
                <div className='previous'>
                    <h2>Arch</h2>
                    <Link to={'/arch'}><button><img alt='Anterior' src={arrowleft} />Projeto anterior</button></Link>
                </div>
                <div className='next'>
                    <h2>Planets</h2>
                    <Link to={'/planets'}><button>Projeto seguinte<img alt='Seguinte' src={arrowright} /></button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Designo