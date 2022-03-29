import React from 'react'
import Categories from '../categories/Categories'
import { Newsletter } from '../newsletter/Newsletter'
import { Products } from '../products/Products'
import { Announcement } from '../ui/Announcement'
import { Footer } from '../ui/Footer'
import { Navbar } from '../ui/Navbar'
import { Slider } from '../ui/Slider'

const HomeScreen = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default HomeScreen

