import './aboutmeone.sass'

const arrowdown = require('./../../../images/icons/down-arrows.svg').default;

const AbouteMeOne = () => {
  return (
    <section className='aboutmeone'>
        <div className='container-content'>
            <div className='container-text'>
                <h2>Meu nome é Juviniano e eu gosto muito de programar belas interfaces</h2>
                <button><img alt='sobre mim' src={arrowdown} />Sobre mim</button>
            </div>
        </div>
    </section>
  )
}

export default AbouteMeOne