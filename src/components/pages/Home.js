import React from "react";
import "../../css/home.css";
import { Homedata } from "../../data/Pagedata";
import Button from "../Button";
import Dishes from "./Dishes";
const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="swiper-container home-slider">
          <div className="swiper-wrapper wrapper">
            {Homedata.map((value) => {
              return (
                <>
                  <div className="swiper-slide slide" key={value.id}>
                    <div className="content">
                      <span>{value.IntroTitle}</span>
                      <h3>{value.foodnameDec}</h3>
                      <p>{value.simpleIntrotitle}</p>
                      <Button props={"/#order"}>Order Now</Button>
                    </div>
                    <div className="image">
                      <img
                        src={value.pageImage}
                        alt="404 there was a client side erro!"
                      />
                    </div>
                  </div>

                  {/*  auto data closing tags */}
                </>
              );
            })}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
      <Dishes />
    </div>
  );
};

export default Home;
