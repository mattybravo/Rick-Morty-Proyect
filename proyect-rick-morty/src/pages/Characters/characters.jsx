import Navegation from "../../components/Navegation/Navegation"
import Card from "../../components/Cards/Card"
import { useState, useEffect } from "react"
import { Fragment } from "react"

export default function Characters() {
 let [data,setData]=useState([])

const mostrarData=async()=>{
let infoAPI=await fetch("https://rickandmortyapi.com/api/character")
.then((resp)=>{return resp.json()})
.then((resp2)=>{return resp2;})
.catch((error)=>console.log("error" +error))
console.log(infoAPI)
setData(infoAPI.results)
}

useEffect(()=>{
    mostrarData()
},[])

return(
<>    
<Navegation/>
<h1>Characters</h1>

 <section className="d-flex gap-2 flex-wrap">   
    {
    data.map((personaje)=>{
        return <Card key={personaje.id} personaje={personaje}/>
    }) 
    }   
 </section>  
</>
 )
 
 
}