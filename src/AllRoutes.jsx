import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'

const AllRoutes = () => {
    return (
        <Router >
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default AllRoutes