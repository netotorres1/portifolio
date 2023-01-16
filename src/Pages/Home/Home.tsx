import React from 'react'
import AboutBlockThree from '../../Components/Home/AboutBlockThree/AboutBlockThree'
import AboutBlockTwo from '../../Components/Home/AboutBlockTwo/AboutBlockTwo'
import AbouteMeOne from '../../Components/Home/AboutMeOne/AbouteMeOne'
import Footer from '../../Components/Shared/Footer/Footer'
import Navbar from '../../Components/Shared/Navbar/Navbar'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <AbouteMeOne/>
        <AboutBlockTwo/>
        <AboutBlockThree/>
        <Footer/>
    </div>
  )
}

export default Home