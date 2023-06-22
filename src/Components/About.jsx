
import AbautContainer from "../SubComponents/Abaout-Container"

import "../SubComponents/Abaout-Container.css"




export default function About(){
// AbautContainer --- CV y my photo
    return(
      <>
       <AbautContainer/>
        
        <h1 className="sombre-mi">About me</h1>
        
       <section className="info-personal">
        
        <div className="quien-soy" >
            <h1>Who I am ?</h1>
            <hr/>
            <p>I am a 25-year-old boy who lives in Córdoba, Argentina. For the last 7 years, I have worked in the field of logistics and purchasing, gaining experience in that industry. <br/><br/>However, my true passion has always been frontend development, and I have a strong interest in design. At the end of 2021, I started my journey as a self-taught developer, motivated by my curiosity and the desire to expand my programming skills. </p>
        </div>
        
        <div className="mis-objetivos" >
            <h1>My objectives ?</h1>
            <hr/>
            <p>My goal in the world of technology is to chart a solid and successful path. I am looking for challenging projects where I can effectively apply my programming and design skills, creating innovative and user-friendly digital experiences.<br/><br/> Surrounding myself with people who help me grow and acquire new knowledge motivates me.<br/><br/> The most important thing for me is to enjoy what I do and continue cultivating my passion. Currently, I am enriching my skills through a FullStack course with Node.js.</p>
        </div>
        
        <div className="mas">
            <h1>A little more</h1>
            <hr/>
            <p>In my free time, I enjoy doing sports and walking with my dog. I also have a great passion for technology, as much as the back-end, machine learning, as well as cybersecurity. <br/><br/>In addition, my favorite place in the world is horseback riding in the mountains of Córdoba. Every time I have the opportunity, I take the opportunity to clear my mind and enjoy unique moments in that natural environment. For me, that space becomes a refuge where I can nurture my inspiration and recharge my batteries..</p>
        </div>
       </section>
       
      </>
        )
    }