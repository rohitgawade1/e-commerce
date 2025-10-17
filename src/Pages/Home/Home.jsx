import React, { useEffect } from 'react'
import Navbar from '../../componants/Navbar/Navbar'
import Sidebar from '../../componants/Sidebar/Sidebar'
import { AllProductsDataAPI } from '../../Redux/ProductSlice/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('hi')
        dispatch(AllProductsDataAPI())
    }, [])

    const { productsData, isLoading } = useSelector(state => state.AllProductsData)

    console.log(productsData && productsData)

    return (
        <>
            <Navbar />
            <Sidebar />
        </>
    )
}

export default Home