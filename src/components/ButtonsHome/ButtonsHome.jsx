import { Link } from "react-router-dom";
import "./buttonsHome.css"

export default function ButtonsHome({contenido}) {
 
 return(
    <Link to={contenido} className="btn col-4 botonHome">{contenido}</Link>
 )   
}