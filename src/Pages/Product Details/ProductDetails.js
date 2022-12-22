import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import './productDetails.css'

const ProductDetails = () => {
  return (
    <div className="product">
        <div className="main_heading">
            <span>Product Details</span>
        </div>
        <div className="productDetails">
        <div className="carousel">
        <Carousel/>
        </div>
        <div className="product_details_section">
            <div className="product_name">
                Apples
            </div>
            <div className="product_category">
                Fruits
            </div>
            <div className="product_price">
                Rs. 80/kg
            </div>
            <div className="product_description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore voluptates ducimus odio laboriosam eligendi aspernatur nobis odit eaque dolor ipsum, quam esse, maxime vel nesciunt voluptatum fugiat<br/>
                <br/>
                 consectetur sapiente maiores, illo non mollitia amet nostrum autem! Assumenda tempore quos cupiditate porro id necessitatibus natus reiciendis nostrum eos, obcaecati quam quas debitis optio! Possimus sit voluptate totam eaque quos est veniam, quo repellat. Voluptatum qui earum eius amet sint natus ab? Incidunt dolorum placeat similique quae minima voluptate omnis vero laudantium excepturi a in eum earum hic quos, commodi quis. Vitae sit nulla eum esse, corporis doloremque culpa alias minus provident!

            </div>
            <div className="btn_group">
                <div className="product_edit_btn">
                    Edit Details
                </div>
                <div className="product_remove_items">
                    Remove Items
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductDetails