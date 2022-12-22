import React from 'react'
import ProductCard from '../Product Card/ProductCard'
import './productCarousel.css'

const ProductCarousel = () => {
      let btn = document.querySelector('.product_container')
    const handlenext =()=>{
        let width = btn.clientWidth
        btn.scrollLeft = btn.scrollLeft - width;
    }
    const handleprev = () => {
        let width = btn.clientWidth
        btn.scrollLeft = btn.scrollLeft + width;
    }
  return (
    <div className="product_carousel">
        <div className="prevbtn" onClick={handlenext}><span>&lt;</span></div>
        <div className="nextbtn" onClick={handleprev}><span>&gt;</span></div>

        <div className="product_container">
            <ProductCard seller="one"/>
            <ProductCard seller="two"/>
            <ProductCard seller="three"/>
            <ProductCard seller="four"/>
            <ProductCard seller="five"/>
            <ProductCard seller="six"/>
            <ProductCard seller="seven"/>
            <ProductCard seller="eight"/>
        </div>

    </div>
  )
}

export default ProductCarousel