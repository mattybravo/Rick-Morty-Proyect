import Navegation from "../../components/Navegation/Navegation"
import "./Contact.css"
import { Fragment } from "react"
export default function Contact() {
    
return(

<>
<nav>
<Navegation pageName={"Contact"}/>
 <div className="fondo-trasparente container-fluid">
  <div className="row d-flex justify-content-center">
  <h2 className="col-2 d-flex h2-contact mt-5">Contact</h2>
  <h3 className="align-item-center d-flex justify-content-center subt-1">Leave us your information so we can contact you</h3>
  </div>

  <form class="form-contact row d-flex justify-content-center align-items-center">
  <div class="col-md-4">
    <label for="inputEmail4" className="form-label">Name</label>
    <input type="email" className="form-control input-form" id="inputEmail4"/>
  </div>
  <div class="col-md-4">
    <label for="inputPassword4" className="form-label">Email</label>
    <input type="password" className="form-control input-form" id="inputPassword4"/>
  </div>
    <div className="row d-flex justify-content-center mt-3">

        <label className="form-label col-9 ms-5" for="Messege">Messege</label>
       
  <textarea class="form-control text-area-contact d-flex justify-content-center" id="messege"></textarea>

  <div className="boton-div col-11"><button className="btn-contact btn-form rounded-2 border border-0">Send</button></div>
          
    </div>

  </form>
 </div>
 </nav>
</>
)

}