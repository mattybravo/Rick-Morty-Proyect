import ButtonsHome from "../../components/ButtonsHome/ButtonsHome"
import "./Home.css"
export default function name() {
 
    

return(
<div className="d-flex justify-content-center align-items-center">
 <div className="container fondo-blanco p-5">
 <h1 className="row d-flex justify-content-center">Proyect Rick & Morty</h1>
  <h2 className="row d-flex ">Welcome to Rick & Morty Proyect!</h2> 
    <p className="row d-flex">This proyect was made for practising React and to made a functional website.</p>
     <p className="row d-flex ">In this website you can know information of the characters of this animated series.</p>
      <p className="row d-flex ">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.</p>
       <p className="row d-flex justify-content-center">Lets go!</p>
       <div className="row d-flex justify-content-center align-item-center">
        <ButtonsHome contenido="Characters"/>
        <ButtonsHome contenido="Contact"/>
       </div>
  </div>
</div>
)

}