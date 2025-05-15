import Navigation from "../../components/Navigation/Navigation";
import "./contact.css";
import { Fragment } from "react";
export default function Contact() {
    
return(

<>
<Navigation pageName={"Contact"}/>

 <div className="fondo-trasparente container-fluid contact-page pt-5 padding-nav">
  <div className="row d-flex justify-content-center">
  <h2 className="col-2 d-flex h2-contact mt-5">Contact</h2>
  <h3 className="align-item-center d-flex justify-content-center subt-1">Leave us your information so we can contact you</h3>
  </div>

  <form class="form-contact row g-3 justify-content-center">
  <div class="col-12 col-md-6 name">
    <label for="inputEmail4" className="form-label">Name</label>
    <input type="email" className="form-control input-form" id="inputEmail4"/>
  </div>
  <div class="col-12 col-md-6 mr-5 email">
    <label for="inputPassword4" className="form-label">Email</label>
    <input type="email" className="form-control input-form" id="inputPassword4"/>
  </div>
   <div className="col-12 col-md-12 d-flex flex-column align-items-center">
  <label className="form-label text-center" htmlFor="message">Message</label>
  <textarea
    className="form-control d-block mx-auto"
    id="message"
    placeholder="Write your message here"
      style={{ width: "50%" }}
  ></textarea>
</div>


  </form>
 </div>
</>
)
}