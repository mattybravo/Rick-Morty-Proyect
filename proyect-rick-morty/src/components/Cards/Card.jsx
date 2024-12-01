import "./Card.css"
import { Fragment } from "react"
export default function Card({personaje}) {

return(

    <>
    <div className="tarjeta border border-1 border-black">
    <img src={personaje.image}/>   
       <h2 className="d-flex justify-content-center">{personaje.name}</h2>
       <button>Know more..</button>
    </div>
</>

)   
}