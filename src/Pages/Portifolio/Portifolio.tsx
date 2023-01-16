import React from 'react'
import AboutBlockThree from '../../Components/Home/AboutBlockThree/AboutBlockThree'
import Footer from '../../Components/Shared/Footer/Footer'
import Navbar from '../../Components/Shared/Navbar/Navbar'
import Portifolio from '../../Components/Portifolio/Portifolio'

type Props = {}

const PortifolioPage = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <Portifolio/>
        <AboutBlockThree/>
        <Footer/>
    </div>
  )
}

export default PortifolioPage