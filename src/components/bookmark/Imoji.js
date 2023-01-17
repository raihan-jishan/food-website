/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "../../css/emoji.css";
import Button from "../Button";
const Imoji = () => {
  return (
    <div> 
    <div className='EmoziConatiner'>
      <h1>if you like this website please join us .. </h1>
    </div>
      <span className='onTitile'>On </span> 
      <div className="socialMedialinks">
        <a href=""><i class="fa-brands fa-facebook"></i></a>
        <a href=""><i class="fa-brands fa-square-twitter"></i></a>
        <a href=""><i class="fa-solid fa-envelope"></i></a>
        <a href=""><i class="fa-brands fa-discord"></i></a>
      </div>
      {/*  ordiv */}
      <div className="or">
        <h1>Or Enjoy our food !</h1>
      </div>
      <div className="imageWrapper"> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2K6AIcbjYibWWOUZhQ7RK_Kpu1xGBCaxdwGl5jyVo9vhfNd_OwnFvyleCq-SYpxsfME&usqp=CAU" alt="404 there was a error!" 
        
        width={220}/>
        </div>
    <div className="emojiBtn"> 
      <Button props={"/#order"}>
     Order Now
        </Button>
      <Button props={"/"}> 
     Go To home 
        </Button>
        </div>
    </div>
  )
}

export default Imoji
