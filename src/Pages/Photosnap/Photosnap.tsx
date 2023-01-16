import React from 'react'
import AboutBlockThree from '../../Components/Home/AboutBlockThree/AboutBlockThree'
import Footer from '../../Components/Shared/Footer/Footer'
import Navbar from '../../Components/Shared/Navbar/Navbar'
import Photosnap from '../../Components/Photosnap/Photosnap'

type Props = {}

const PhotosnapPage = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <Photosnap />
        <AboutBlockThree/>
        <Footer/>
    </div>
  )
}

export default PhotosnapPage