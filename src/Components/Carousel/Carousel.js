import React from 'react'
import './carousel.css'

const Carousel = () => {
  return (
<>
<section>
    <div class="container">
        <div class="carousel">
            <input type="radio" name="slides" checked="checked" id="slide-1"/>
            <input type="radio" name="slides" id="slide-2"/>
            

            <ul class="carousel__slides">
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/red-fresh-apple-isolated-on-white-background-royalty-free-image-1627314996.jpg" alt=""/>
                        </div>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://tezzdelivery.com/5918-large_default/apples-1-kg-kalla-kallu.jpg" alt=""/>
                        </div>
                     
                    </figure>
                </li>
               
            </ul>    
            <ul class="carousel__thumbnails">
                <li>
                    <label for="slide-1"><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/red-fresh-apple-isolated-on-white-background-royalty-free-image-1627314996.jpg" alt=""/></label>
                </li>
                <li>
                    <label for="slide-2"><img src="https://tezzdelivery.com/5918-large_default/apples-1-kg-kalla-kallu.jpg" alt=""/></label>
                </li>
               
            </ul>
        </div>
    </div>
</section>
</>
    )
}

export default Carousel