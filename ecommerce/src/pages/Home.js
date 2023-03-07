import React from 'react'
import Announce from '../components/Announce'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
    <Announce />
    <Navbar />
    <Slider />
    <Categories />
    <Products />
    <NewsLetter />
    </div>
  )
}

export default Home
