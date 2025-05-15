import "./Navigation.css";
import { Link } from 'react-router-dom';

export default function Navigation({pageName}) {
  return(
<nav className="fondo-nav container-full navbar navbar-expand-lg w-100">
  <div className="container-fluid justify-content-between">
    <Link to="/" className="h1-nav row mx-3 mt-2">Rick & Morty</Link>
 
<div>
    <button className="hamburger btn" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-expanded="false"><img src="./list.svg" alt="" /></button>
</div>
   <div id="menu" className="items-nav navbar-collapse collapse justify-content-end">
  <ul className="container-ul row nav navbar-nav">
   <li className="nav-item col-5">
       <Link to="/Characters" className="item nav-link active rounded-3 w-5">Characters</Link>
   </li>
   
      <li className="nav-item col-5 rounded-3">
        <Link to="/Contact" className="item nav-link active rounded-3">Contact</Link>
      </li>
    </ul>
  </div>
 </div> 
</nav>

  )  
}
