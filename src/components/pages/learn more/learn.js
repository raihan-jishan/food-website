import React from 'react'
import "../../../css/learn.css";
import { Learndata } from '../../../data/Pagedata';
import Button from '../../Button';
const learn = () => {
  return (
    <div className='container'>
        {Learndata.map((item) => {
            return(
                <>
                
      <div className="escTitle">
          
        <h1>{item.PageTitle}</h1>
        {/*  closing  */}
      </div>   
      <div className="paraTitile">
        <p>{item.paratitle}</p>
      </div>
        </>
           )
       })}
      
      <Button props={"/#order"}>Order Now</Button>
      <Button props={"/"}>Go to Home  </Button>
    </div>
  )
}

export default learn
