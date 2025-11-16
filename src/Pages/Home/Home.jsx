import React, { useEffect } from 'react'
import Navbar from '../../componants/Navbar/Navbar'
import Sidebar from '../../componants/Sidebar/Sidebar'
import { AllProductsDataAPI } from '../../Redux/ProductSlice/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../componants/Card/Card'
import './Home.css'
import { Toaster } from 'react-hot-toast'
import { HashLoader } from 'react-spinners'

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
            <Toaster />
            <Navbar />
            <div className="homepage-container">
                <Sidebar />

                <div className="cards-container">
                    {
                        isLoading ?
                            <HashLoader
                                color="black"
                                size={50}
                            />
                            :
                            productsData && productsData.map((item) => {
                                return <Card item={item} />;
                            })

                    }
                </div>
            </div>


        </>
    )
}

export default Home