import ButtonsHome from "../../components/ButtonsHome/ButtonsHome"
import "./Home.css"
export default function HomeSection() {
 
    

return(
<div className="d-flex justify-content-center align-items-center container-fluid">
 <div className="fondo-blanco">
 <h1 className="h1-home row justify-content-center text-center">Proyect Rick & Morty</h1>
  <h2 className="h2-home-1 row text-center justify-content-center mt-4">Welcome to Rick & Morty Proyect!</h2> 
  
    <p className="p-home-1 row text-center justify-content-center">This proyect was made for practising React and to made a functional website.</p>
     <p className="p-home-2 row text-center justify-content-center">In this website you can know information of the characters of this animated <span></span>series.</p>
      <p className="p-home-3 row text-center justify-content-center">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.</p>

       <h2 className="h2-home-2 d-flex justify-content-center text-center">Lets go!</h2>
       <div className="buttonshome row d-flex justify-content-center align-item-center gap-2">
        <ButtonsHome contenido="Characters"/>
        <ButtonsHome contenido="Contact"/>
       </div>
  </div>
</div>
)

}