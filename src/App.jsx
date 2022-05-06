import {Nav} from "./components/nav/Nav"
import './App.css'
import React from "react"
import { Header } from "./components/header/header" 
import {About} from "./components/about/about" 
import {Language} from "./components/languages/language" 
import {Portfolio} from "./components/portfolio/portfolio" 
import {Contact} from "./components/contact/contact" 
import {Footer} from "./components/footer/footer"

function App() {   

  return (
    <div className="App">
        <Nav/> 
        <Header/>  
        <About/>  
        <Language/> 
        <Portfolio/> 
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
