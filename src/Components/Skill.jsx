
import "./Skill.css"

import adaptar from "../iconos/adaptar.png";
import colavoracion from "../iconos/colavoracion.png";
import detalle from "../iconos/detalle.png";
import comuni from "../iconos/comunicacion.png";
import creati from "../iconos/creatividad.png";
import pensami from "../iconos/pensamiento.png";
import proble from "../iconos/problemas.png";


import mui from "../iconos/mui.png";
import html from "../iconos/html-5.png";
import css from "../iconos/css-3.png";
import js from "../iconos/js.png";
import react from "../iconos/react.png";
import reactNative from "../iconos/react-native.png"
import node from "../iconos/node.png";
import git from "../iconos/git.png"


export default function Skill(){
    return(
        <div className="skill-container">
       
               
                <div className="skill">
                    <div>
                    <img src={html} alt="" />
                    <p>HTML</p>
                    </div>
                    
                    <div>
                    <img src={css} alt=""/>
                    <p>CSS</p>
                    </div>
                    
                    <div>
                    <img src={js} alt="" />
                    <p>JS</p>
                    </div>
                    
                    <div>
                    <img src={react} alt="" />
                    <p>REACT</p>
                    </div>
                    
                    <div>
                    <img src={reactNative} alt="" />
                    <p>REACT-NATIVE</p>
                    </div>
                    
                    <div>
                    <img src={node} alt="" />
                    <p>NODE.JS</p>
                    </div>
                    
                    <div>
                    <img src={git} alt="" />
                    <p>GIT</p>
                    </div>
                    
                    <div>
                    <img class="icon" src={mui} alt="mui icon" ></img>
                    <p>MUI</p>
                    </div>
                    
                  
                </div>
                
                
                
                <div className="soft-skill">
                   
                   <div>
                   <img src={adaptar} alt="" />
                   <p>adaptation</p>
                   </div>
                   <div>
                   <img src={colavoracion} alt="" />
                   <p>collaboration</p>
                   </div>
                   
                   <div>
                   <img src={detalle} alt="" />
                   <p>detail</p>
                   </div>
                   
                   <div>
                   <img src={comuni} alt="" />
                   <p>communication</p>
                   </div>
                   
                   <div>
                   <img src={creati} alt="" />
                   <p>creativity</p>
                   </div>
                   
                   <div>
                   <img src={pensami} alt="" />
                   <p>thought</p>
                   </div>
                   
                   <div>
                   <img src={proble} alt="" />
                   <p>problem solution</p>
                   </div>
                   
               </div>
        
        </div>
    )
}

