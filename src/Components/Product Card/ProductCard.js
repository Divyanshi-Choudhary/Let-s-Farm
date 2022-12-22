import React from 'react'
import './productcard.css'
import product from '../../assets/product.jpg'
import product2 from '../../assets/product2.jpg'
import {BsSearch} from 'react-icons/bs'
import {SlHandbag} from 'react-icons/sl'

const ProductCard = ({seller}) => {
  
  return (
    <div className="card">
<div className="image">
<img src={product2} alt="Image not available" />
<div className="image_btn">
<a href="#"><BsSearch/></a>
<a href="#"><SlHandbag/></a>
</div>
    </div>   
      <div className="product_info">
        <div className="seller_name">{seller}</div>
        <div className="product_name"><b>name</b></div>
        <div className="price">
            sell price
        </div>
        <p>discount</p>
     </div>
    </div>
  )
}

export default ProductCard