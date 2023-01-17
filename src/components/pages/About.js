import React from "react";
import { Aboutdata } from "../../data/Pagedata";
import "../../css/about.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Menu from "./Menu";
const About = () => {
  return (
    <div>
      <section class="about" id="about">
        {Aboutdata.map((hash) => {
          return (
            <>
              <h3 class="sub-heading"> {hash.MainTitle} </h3>
              <h1 class="heading">{hash.PageTitle}</h1>

              <div class="row">
                <div class="image">
                  <img src={hash.image} alt="" />
                </div>

                <div class="content">
                  <h3>{hash.Titledesc}</h3>
                  <p>{hash.desc}</p>
                  <p>{hash.onotherdesc}</p>
                  <div class="icons-container">
                    <div class="icons">
                      <i class="fas fa-shipping-fast"></i>
                      <span>{hash.delivary}</span>
                    </div>
                    <div class="icons">
                      <i class="fas fa-dollar-sign"></i>
                      <span>{hash.payment}</span>
                    </div>
                    <div class="icons">
                      <i class="fas fa-headset"></i>
                      <span>{hash.payment}</span>
                    </div>
                  </div>
                  <Button>
                    <Link
                      to={"/learnmore34343+about+order+status"}
                      style={{ color: "white" }}
                    >
                      {" "}
                      learn more
                    </Link>
                  </Button>
                </div>
              </div>
              {/*  closing tag */}
            </>
          );
        })}
      </section>
      <Menu />
    </div>
  );
};

export default About;
