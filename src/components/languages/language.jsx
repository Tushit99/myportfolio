import "./language.css"
import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";

export const Language = () => {
  return (
    <section id="project">
      <h5> What Skills I have </h5>
      <h2> My Experience </h2>

      <div className="container experience_container">
        <div className="experience_fronted">
            {/* -------******  frontend development  ****----------------------- */}
          <h3> Frontend Development </h3>
          <div className="experience_content">
            {/* ==== HTML ==== */}
            <article className="experience_details">
              <div>
              <BsPatchCheckFill className="experience_details-icon" />
              <h4> Html </h4>
              </div>
            </article>
            {/* ====== CSS ======= */}
            <article className="experience_details">
              <div>
              <BsPatchCheckFill className="experience_details-icon" />
              <h4> CSS </h4>
              </div>
            </article>
            {/* ======== JavaScript ======== */}
            <article className="experience_details">
              <div>
              <BsPatchCheckFill className="experience_details-icon" />
              <h4> JavaScript </h4>
              </div>
            </article>
            {/* ====== React ======== */}
            <article className="experience_details">
              <div>
              <BsPatchCheckFill className="experience_details-icon" />
              <h4> React </h4>
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience_backend">
             {/* -------******  backend development  ****----------------------- */}
          <h3> Backend Development </h3>
          <div className="experience_content">
            {/* ==== Node Js ==== */}
            <article className="experience_details">  
              <div>
                <BsPatchCheckFill className="experience_details-icon" />
                <h4> Node JS </h4>
              </div>
            </article>
            {/* ====== MongoDB ======= */}
            <article className="experience_details">
              <div>
              <BsPatchCheckFill className="experience_details-icon" />
              <h4> MongoDB </h4>
              </div>
            </article>
            {/* ======== Postman ======== */}
            <article className="experience_details">  
            <div>
              <BsPatchCheckFill className="experience_details-icon" />
              <h4> Postman </h4>
            </div>
            </article>
            {/* ====== Express ======== */}
            <article className="experience_details">
              <div>
              <BsPatchCheckFill className="experience_details-icon" />
              <h4> Express </h4>
              </div>
            </article>
            {/* ====== NPM ======== */}
            <article className="experience_details">
              <div>
              <BsPatchCheckFill className="experience_details-icon" />
              <h4> NPM </h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};



