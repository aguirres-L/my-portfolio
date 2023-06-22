import "./Abaut.css"
import img from "../img/yo.jpeg"

import CV from "../cv/nCV.pdf"
export default function AbautContainer(){
    return(
        <div className="abaout-container" >
        <div className="cv">
        <a href={CV} download >CV</a>
        </div>
    <img src={img} className="img-about" alt="" />
    </div>
    )
    
}