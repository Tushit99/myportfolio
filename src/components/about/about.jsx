
import React from "react"
import "./about.css" 
import my2pic from "../mypic3.jpeg"  
import {FaAward} from "react-icons/fa" 
import {AiOutlineProject} from "react-icons/ai"

export const About = () =>{
    return (
    <section id="about">
        <h5> Get to Know </h5> 
        <h2> About Me </h2> 

        <div className="container about_container"> 
            <div className="about_me"> 
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={my2pic} alt="about me" />
                    </div>
                </div>
            </div>
            <div className="about_content">
                <div className="about_cards">
                    <article className="about_card">
                        <FaAward className="about_icon" />
                        <h5> Experience </h5> 
                        <small> 0 Work Experience </small>
                    </article>
                    <article className="about_card">
                        <AiOutlineProject className="about_icon" />
                        <h5> Project </h5>
                        <small> 2 projects </small>
                    </article>
                </div>
                
                <p> Full Stack Developer in MERN Stack</p>


                {/* <a href="#contact" className="btn btn-primary">  Let's Talk </a> */}
            </div>
        </div>
    </section>
    )
}; 

