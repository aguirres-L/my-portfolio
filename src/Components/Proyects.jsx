

import "./Proyec.css"

import clima from "../proyect/Captura.png";
import vete from "../proyect/vete.png";
import oxygen from "../proyect/oxygen.png";
import nasa from "../proyect/nasa.png";
import card from "../proyect/cardDetal.png"

export default function Proyects() {
    return(
        <div className="proyec-container">
        
                <div>
                    <img src={clima} alt="" />
                    <p>Web that gives us the time and time of our location <br/> It also gives me the weather of any place you want <br/><br/> <a href="https://tiempo-01.netlify.app/">Web </a></p>
                </div>
            
               <div> 
               <p style={{marginLeft:"-2px"}} >Web designed for Veterinary  Argentum <br/> <br/> <a href="https://aguirres-l.github.io/Proyecto-final/index.html">Web </a> </p>
               <img src={vete} alt="" />
               </div>
            
                <div>
                <img src={oxygen} alt="" />
                <p>Medicina Estetica Oxygen - In construction <br/><br/> <a href="https://aguirres-l.github.io/Oxygen-VF/index.html">Web </a> </p>
                </div>
            
                <div>
                <p style={{marginLeft:"-2px"}}>Web on consumption of NASA Open APIs<br/> <br/> <a href="https://moonlit-lollipop-aed956.netlify.app/">Web</a></p>
                <img src={nasa} alt="" />
                </div>
            
                <div>
                <img src={card} alt="" />
                <p>Card Detail Web Page <br/> <br/> <a href="https://cba-j-detail.netlify.app/">Web</a></p>
                </div>
        </div>
    )
}