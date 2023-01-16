import React from 'react'
import Footer from '../../Components/Shared/Footer/Footer'
import Navbar from '../../Components/Shared/Navbar/Navbar'
import Planets from '../../Components/Planets/Planets'

type Props = {}

const PlanetsPage = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <Planets/>
        <Footer/>
    </div>
  )
}

export default PlanetsPage