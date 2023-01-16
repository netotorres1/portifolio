import React from 'react'
import Myteam from '../../Components/Myteam/Myteam'
import Footer from '../../Components/Shared/Footer/Footer'
import Navbar from '../../Components/Shared/Navbar/Navbar'

type Props = {}

const MyteamPage = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <Myteam/>
        <Footer/>
    </div>
  )
}

export default MyteamPage