import { Link } from "react-router-dom";
import "./ButtonsHome.css"

export default function ButtonsHome({contenido}) {
 
 return(
    <Link to={contenido} className="btn col-4 botonHome">{contenido}</Link>
 )   
}