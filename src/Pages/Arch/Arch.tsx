import React from 'react'
import Footer from '../../Components/Shared/Footer/Footer'
import Navbar from '../../Components/Shared/Navbar/Navbar'
import Arch from '../../Components/Arch/Arch'

type Props = {}

const ArchPage = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <Arch />
        <Footer/>
    </div>
  )
}

export default ArchPage