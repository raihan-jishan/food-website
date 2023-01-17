import React from 'react'
import { Menudata } from '../../data/Pagedata'
import Button from "../Button";
import "../../css/menu.css";
import Review from './Review';
const Menu = () => {
  return (
    <div>
      <section class="menu" id="menu">

<h3 class="sub-heading"> our menu </h3>
<h1 class="heading"> today's speciality </h1>
<div class="box-container">
{Menudata.map((desc) => {
    return(
        <>
      

    <div class="box">
        <div class="image">
            <img src={desc.image} alt="" />
            {desc.naviButton}
        </div>
        <div class="content">
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <h3>{desc.foodName}</h3>
            <p>{desc.desc}</p>
          <Button>Add to Cart</Button>
            <span class="price">$12.99</span>
        </div>
    </div>

   
 
    </>
        )
    })}
</div>
     </section>
<Review />

    </div>
  )
}

export default Menu
