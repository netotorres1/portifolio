import React from 'react'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Shared/Footer/Footer'
import Navbar from '../../Components/Shared/Navbar/Navbar'

type Props = {}

const ContactPage = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default ContactPage