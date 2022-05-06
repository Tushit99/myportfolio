import React from "react";
import "./Portfolio.css";
import Img1 from "../zara/zara.png" ; 
import IMG2 from "../nyka/pic1.png" ; 


const Data = [
  {
    id:1 , 
    image : Img1 , 
    title : "Zara-clone"  ,
    github: "https://github.com/Tushit99/Zara-Clone-main", 
    netlify : "https://thriving-douhua-d8ee0c.netlify.app" 
  }, 
  {
    id:2 , 
    image : IMG2 , 
    title : "Nykaa-clone" ,
    github: "https://github.com/Tushit99/nykaa_clone" , 
    netlify : "https://sweet-froyo-4b51c5.netlify.app/"
  }
]


export const Portfolio = () => { 

  return (
  <section id="portfolio ">
    <h5> My React Work </h5> 
    <h2> Portfolio </h2> 

    <div className="container portfolio_container">
      {/* ========= projects detail =========== */} 

      {
        Data.map(({id,image,title,github,netlify})=>{
          return (
            <article key={id} className="portfolio_item">  
            <div className="portfolio_items-image"> 
              <img src={image} alt={title} /> 
            </div> 
            <h3> {title} </h3>   
            <div className="portfolio_item-cta">
              <a href={github} target="_blank" className="btn"> Github </a>
              <a href={netlify} target="_blank" className="btn btn-primary"> Live demo </a> 
            </div>
          </article>
          )
        })
      }

      {/* <article className="portfolio_item">
        <div className="portfolio_items-image"> 
          <img src={IMG1} alt="img11" /> 
        </div> 
        <h3> This is a portfolio item title </h3>   
        <div className="portfolio_item-cta">
          <a href="https://github.com/Tushit99/nykaa_clone" className="btn"> Github </a>
          <a href="https://sweet-froyo-4b51c5.netlify.app/" className="btn btn-primary"> Live demo </a> 
        </div>
      </article> */}
    </div>
  </section>);
};
