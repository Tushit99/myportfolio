import React from "react";
import "./header.css" 
import {HeaderSocial} from "./headerSocial"
import cv from "../cv.pdf"  
import mypic from "../mypic20.png"

export const Header = () =>{
    return (
        <header>
        <div className="container header_container">
            <h4> Hello I'm </h4>
            <h1> Tushit Saxena </h1>  
            <h5 className="text-light"> Learning Full-Stack Web Development </h5>
            {/* <a a href={cv} className="btn"  download="tushit cv"> download resume </a>      */}

            <div className="cta">
            <a href={cv} className="btn btn-primary" target="_blank" > Resume </a>
            <a href={cv} className="btn btn-primary" download="Tushit Resume"> Downdoad </a> 
            </div>

            <HeaderSocial/>

            <div className="myimgbox">
                <img src={mypic} alt="" />
            </div>

            <a href="#contact" className="scroll_down"> Scroll Down </a>   
        </div>   
        </header>
    )
}

