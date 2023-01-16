import React from 'react'
import Footer from '../../Components/Shared/Footer/Footer'
import Navbar from '../../Components/Shared/Navbar/Navbar'
import Designo from '../../Components/Designo/Designo'

type Props = {}

const DesignoPage = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <Designo/>
        <Footer/>
    </div>
  )
}

export default DesignoPage