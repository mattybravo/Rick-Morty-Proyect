import "./Card.css"
import { Fragment,useState } from "react"
export default function Card({personaje}) {
const [ocultar,setOcultar]=useState(true)


return(
<>
<div className="tarjeta position-relative border border-1 rounded border-dark d-flex flex-column flex-md-rowtarjeta position-relative border border-1 rounded border-dark d-flex flex-column flex-md-row">
    
 <div className="div-tarjeta d-flex flex-column justify-content-between align-items-center"><img src={personaje.image}/>   
       <h2 className="h2-card d-flex justify-content-center mt-3">{personaje.name}</h2>
       <button className={ocultar?"d-block button-card btn btn-active btn-x-md d-flex align-self-end":"d-none"} onClick={()=>setOcultar(false)}>Know more..</button>
</div> 

 { ocultar?"":
 <div className="tarjeta-oculta d-flex flex-column align-items-center container justify-content-between p-3 flex-grow-1">
 <div className=" bot d-flex justify-content-end"><button onClick={()=>setOcultar(true)} className="boton-info btn-list border border-0 rounded-3">X</button></div>
<ul className="list-unstyled row list-group mt-4 mx-2">
<li className="li p-2"><p className="p-info">Character Status {personaje.status}</p></li>
<li className="li p-2"><h4 className="h4-info">Species</h4><p className="p-info">{personaje.species}</p></li>
<li className="li p-2"><h4 className="h4-info">Origin</h4><p className="p-info">{personaje.origin.name}</p></li>
<li className="li p-2"><h4 className="h4-info">Gender</h4><p className="p-info">{personaje.gender}</p></li>
</ul>
 </div>
 }
</div>
 </>

)   
}