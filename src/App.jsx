
import { BrowserRouter as Router,
    Routes,
    Route,
    NavLink
    } from "react-router-dom";
    
import Home from './Components/Home';
import About from './Components/About';
import Skill from './Components/Skill';
import Proyects from './Components/Proyects';
import Contacts from './Components/Contact';

export default function App(){

//  State 




// Modificacion del estado para poder ocular o ver el component


// Modificacion del estado para poder ocular o ver el component



// Declaro las functiones contenedoras de los Componentes que necesito renderizar en cada Route






// ------------                 ----------             
return(
<div>
    
    <Router >
    

    <nav className='nav-home'>
    
    <NavLink  to="/"  className="nav" >Home</NavLink>
    <NavLink  to="/about" className="nav" >About me</NavLink>
    <NavLink   to="/skill" className="nav">Skills </NavLink>
    <NavLink   to="/proyects" className="nav">Proyects</NavLink>
    <NavLink   to="/contact" className="nav">Contact</NavLink>
    
    </nav>
    
    <Routes>
    
    <Route  path="/" element={<Home/>} ></Route>
    <Route exact  path="/about" element={<About/>} ></Route>
    <Route exact  path='/skill' element={<Skill/>} ></Route>
    <Route exact path='/proyects' element={<Proyects/>} ></Route>
    <Route exact path='contact' element={<Contacts/>}></Route>
    
    </Routes>
    </Router>

</div>

)
}