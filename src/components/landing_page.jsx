

import { About } from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Profilepic from "./image_section";
import Info from "./info";
import Navbar from "./navbar";
import Projects from "./projects";
import Skillcard from "./skillls";

export  default function Landingpage(){

    return (
     <div className="  min-h-screen bg-gray-800">
      
      <Navbar></Navbar>
      <Profilepic></Profilepic>  
      <Skillcard></Skillcard>
      <Projects></Projects>   
       <About></About>
       <Info></Info>
       <Contact></Contact> 
       <Footer></Footer>
        
        

         

        

     </div>
    )
}