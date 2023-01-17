import React from "react";
import "../../css/heading.css";
import "../../css/dishes.css";
import { Dishdata } from "../../data/Pagedata";
import Button from "../../components/Button";
import About from "./About";
const Dishes = () => {
  return (
    <>
    <section class="dishes" id="dishes">
      <h3 class="sub-heading"> our dishes </h3>
      <h1 class="heading"> popular dishes </h1>

      <div class="box-container">
        {Dishdata.map((query) => {
          return (
            <>
              {/*  Main box */}
              <div class="box">
                {query.naviButton}
                {query.eyeBtn}
                <img src={query.image} alt="there was a client side error!" />
                <h3>{query.foodName}</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <span>{query.price}</span>
                <Button>Add to Cart</Button>
              </div>
              {/*  other boxes  */}

              {/*  closing */}
            </>
          );
        })}
      </div>
    </section>
      <About />
      </>
  );
};

export default Dishes;
