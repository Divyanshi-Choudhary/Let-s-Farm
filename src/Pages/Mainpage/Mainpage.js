import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../Components/Product Card/ProductCard'
import ProductCarousel from '../../Components/Product Carousel/ProductCarousel'
import { getAllItems } from '../../redux/Actions/ItemAction'
import './mainpage.css'
const Mainpage = () => {
  const {items,loading,error} = useSelector(state=>state.items)
const dispatch = useDispatch()

useEffect(()=>{
dispatch(getAllItems())
},[])

  return (
    <>
    <div className="main_header">
        <div className="content">
            <h1>
                <span>Live</span> organic for <br /> <span>live </span> healthy
            </h1>
            <h3>
                We deliver fresh products from our farm.
            </h3>
            <div className="hover_btn">
                Shop now
            </div>
        </div>
    </div>
    <div className="main_heading">
        <span>our products</span>
        </div>
   {/* <div className="product_list">
    {items && items.map(item=> <ProductCard name={item.name} seller={item.seller} sellPrice={item.sellPrice} discount={item.discount} availableUnit={item.availableUnit} image={item.image} unit={item.unit} key={item._id}/>
)}
   </div> */}
   <ProductCarousel/>
    <div className="hover_btn" style={{margin:"1rem auto"}}>
        Show more products
    </div>
    <div className="about_section">
        <div className="about_content">
        <div className="about_heading">
            about us 
        </div>
        <p>
            Lorem ipsum iusto laborum iure voluptatum veniam impedit. Similique commodi labore temporibus vel dignissimos perferendis facere. Alias rerum omnis iusto deserunt recusandae minus beatae delectus hic! Autem unde explicabo debitis tempore expedita in officia, neque quaerat commodi repellendus assumenda dolores perspiciatis ut aspernatur eaque qui eligendi sapiente at officiis laudantium blanditiis tempora atque fuga nobis! Illo minus maiores suscipit nam.

        </p>
        <div className="hover_btn" style={{margin:"2rem 0"}}>
        find out more...
    </div>
        </div>
    </div>
    <div className="testimonial">
        <div className="main_heading">
            <span>
            testimonials
            </span>
        </div>
        <div className="reviews">
        <figure className="snip1533">
  <figcaption>
    <blockquote>
      <p>If you do the job badly enough, sometimes you don't get asked to do it again.</p>
    </blockquote>
    <h3>Wisteria Ravenclaw</h3>
    <h4>Google Inc.</h4>
  </figcaption>
</figure>
<figure className="snip1533">
  <figcaption>
    <blockquote>
      <p>I'm killing time while I wait for life to shower me with meaning and happiness.</p>
    </blockquote>
    <h3>Ursula Gurnmeister</h3>
    <h4>Facebook</h4>
  </figcaption>
</figure>
<figure className="snip1533">
  <figcaption>
    <blockquote>
      <p>The only skills I have the patience to learn are those that have no real application in life. </p>
    </blockquote>
    <h3>Ingredia Nutrisha</h3>
    <h4>Twitter</h4>
  </figcaption>
</figure>
        </div>
    </div>
    </>
  )
}

export default Mainpage