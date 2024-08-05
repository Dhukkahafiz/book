import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Search from '../pages/Search'
import Most_useful from '../pages/Most_useful'
import Footer from '../component/Footer'
import Why from '../pages/Why'
import Herosection from '../pages/Herosection'
import ViewBook from '../pages/ViewBook'

const ViewBookRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <Navbar />
                        {/* <Herosection /> */}
                        <Search />
                        <Why />
                        <Most_useful />
                        <Footer />
                    </>
                } />
                <Route path='/viewbook/:id' element={
                    <>
                        <Navbar />
                        <ViewBook />
                        <Footer />
                    </>
                }
                />
            </Routes>
        </>
    )
}

export default ViewBookRoute