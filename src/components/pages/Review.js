import React from 'react';
import Order from "../pages/Order";
import { Carousel } from 'react-responsive-carousel';
import "../../css/reviw.css";
import {Reviewdata} from '../../data/Pagedata'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Review = () => {
  return (
  
    <section id='review'> 
        <h3 class="sub-heading"> customer's review </h3>
        <h1 class="heading"> what they say </h1>
     <Carousel
      
        infiniteLoop
        autoPlay
        showStatus={true}
        showArrows={true}
        showThumbs={false}
        showIndicators={true}
        interval={1400}
 >
    {Reviewdata.map((query) => {
        return(
            <>
            
       
     <div className='userIdpicture'>
     <img src={query.customerIdimage} alt='test' />
     <div className='userName'> 
        <h3>{query.customerName}</h3>
        </div>
        <div className='stars'>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
        </div>
        
        <div className='comment'>
            <p>{query.customerComment}</p>
        </div>
     </div>
     </>
        )
    })}
 

   
  

     </Carousel>
     <Order />
 </section>
  )
}

export default Review
