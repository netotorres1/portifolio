import {BrowserRouter, Route, Routes} from 'react-router-dom'

import React from 'react'
import Home from './Pages/Home/Home'
import PortifolioPage from './Pages/Portifolio/Portifolio'
import PhotosnapPage from './Pages/Photosnap/Photosnap'
import ArchPage from './Pages/Arch/Arch'
import DesignoPage from './Pages/Designo/DesignoPage'
import PlanetsPage from './Pages/PlanetsPage/Arch'
import MyteamPage from './Pages/myteamPage/MyteamPage'
import ContactPage from './Pages/ContactPage/ContactPage'

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Home/>}  />
            <Route path={'/portifolio'} element={<PortifolioPage/>}  />
            <Route path={'/photosnap'} element={<PhotosnapPage/>}  />
            <Route path={'/arch'} element={<ArchPage/>}  />
            <Route path={'/designo'} element={<DesignoPage/>}  />
            <Route path={'/planets'} element={<PlanetsPage/>}  />
            <Route path={'/myteam'} element={<MyteamPage/>}  />
            <Route path={'/contact'} element={<ContactPage/>}  />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp