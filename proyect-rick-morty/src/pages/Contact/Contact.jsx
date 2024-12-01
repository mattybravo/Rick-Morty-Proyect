import Navegation from "../../components/Navegation/Navegation"
import "./Contact.css"
import { Fragment } from "react"
export default function Contact() {
    
return(

<>
<Navegation/>
 <section className="container fondo-trasparente d-flex justify-content-center">
  <h1 className="row d-flex justify-content-center">Contact</h1>
  <h4 className="row d-flex justify-content-center">Leave us your information so we can contact you</h4>

  <form action="" className="col">
              <label for="Name">Name</label>
              <input type="text" id="Name" />

              <label for="Email">Email</label>
              <input type="text" id="Email" />

  </form>
 </section>
</>
)

}