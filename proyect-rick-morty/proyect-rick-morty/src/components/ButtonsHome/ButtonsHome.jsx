import { Link } from "react-router"
import "./ButtonsHome.css"

export default function ButtonsHome({contenido}) {
 
 return(
    <Link to={contenido} className="btn col-4 botonHome">{contenido}</Link>
 )   
}