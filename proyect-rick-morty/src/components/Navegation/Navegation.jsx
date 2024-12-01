import "./Navegation.css"
export default function Navegation() {
 
  return(
    <nav className="fondo-nav d-flex justify-content-between p-5">
         <h1 className="row">Rick & Morty</h1>
       <div className="row d-flex gap-5"> 
        <a href="" className="text-decoration-none col-4">Characters</a>
        <a href="" className="text-decoration-none col-4">Contact</a>
        </div>
    </nav>
  )  
}