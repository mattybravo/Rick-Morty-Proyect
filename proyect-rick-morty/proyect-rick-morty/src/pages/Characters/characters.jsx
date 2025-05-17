import Navegation from "../../components/Navegation/Navegation"
import Card from "../../components/Cards/Card"
import { useState, useEffect, useContext } from "react"
import Filter from "../../components/Filter/Filter"
import {charactersContext}  from '../../context';
import { Fragment } from "react";
import "./Characters.css"

export default function Characters({pageName}) {
 let [data,setData]=useState([])
let [filtrosAplicados,setFiltrosAplicados]=useState([])
let[dataCompleta,setDataCompleta]=useState([])
let character=useContext(charactersContext)
let [show,setShow]=useState(true)

const mostrarData=async()=>{
let infoAPI=await fetch("https://rickandmortyapi.com/api/character")
.then((resp)=>{return resp.json()})
.then((resp2)=>{return resp2;})
.catch((error)=>console.log("error" +error))
console.log(infoAPI)
setData(infoAPI.results)
setDataCompleta(infoAPI.results)
}


let filtroNombres=["Character Alive","Character Dead","Female","Male","Origin Unknown"]

const filtrar=(inputData)=>{

    
    let pulsado=inputData.checked;

    let filtroPulsado=inputData.value;
    console.log(pulsado)
    console.log(filtroPulsado)


    //si esta pulsado aplicar el filtro
    if(pulsado !== false){
        setFiltrosAplicados([...filtrosAplicados,filtroPulsado])
       
    }else{
        setData(dataCompleta)
        let filtrosActualizado=filtrosAplicados.filter((fil)=>{return fil !== filtroPulsado})
        setFiltrosAplicados(filtrosActualizado)
        console.log("hola")
    }

}

useEffect(()=>{

   filtrosAplicados.forEach((filtro)=>{
    let nuevaLista;

    switch (filtro) {
        case "Character Alive":
            nuevaLista=data.filter((personaje)=>{return personaje.status === "Alive"})
            break;

        case "Character Dead":
            nuevaLista=data.filter((personaje)=>{return personaje.status === "Dead" })
            break;

        case "Female":
            nuevaLista=data.filter((personaje)=>{return personaje.gender ===  "Female"})
            break;

        case "Male":
            nuevaLista=data.filter((personaje)=>{return personaje.gender ===  "Male" })
            break;

        case "Origin Unknown":
            nuevaLista=data.filter((personaje)=>{return personaje.origin.name === "unknown" })
            break;
                          
    }
   setData(nuevaLista)
   })
},[filtrosAplicados])  


useEffect(()=>{
    mostrarData()
},[])

useEffect(()=>{
    console.log(character)
    //setData(character)
 },[character])

return(
<Fragment>
<Navegation pageName={"Characters"}/>

<h2 className="container-fluid h2-filter mt-5">Filters</h2>
<div className="container-full d-flex justify-content-center">
   <div className="filter-escondido p-4 mt-4">
     <h2 className="h2-filter-escondido">Filters</h2>
     <button className="navbar-toggler" onClick={()=>{setShow(!show)}}><img src="/filter-icon.svg" alt="" srcset=""/></button>
   </div>
</div>

{
show == true?<form className={"container-full"}>
<div className="d-flex justify-content-between">
      {
        filtroNombres.map((filter)=>{
            return <Filter className="filter" key={filter} title={filter} filtar={filtrar}/>
        })
            
    } 
</div>
 </form> : <form className={"container-full d-flex justify-content-center align-items-center mt-2"}>
<div className="form-escondido">
      {
        filtroNombres.map((filter)=>{
            return <Filter className="filter" key={filter} title={filter} filtar={filtrar}/>
        })
            
    } 
</div>
 </form>



}

 <main className="d-flex gap-2 flex-wrap aling-items-center m-0 row-md justify-content-center w-100 pt-5">   

 {

data.length!=0?
 data.map((personaje)=>{
        return <Card key={personaje.id} personaje={personaje}/>
    }):
    <p className="alert bg-success"><i className="bi bi-exclamation-triangle-fill"></i>Sorry! There are no characters width all those properties.</p>
      
}
 </main>  
 
</Fragment>

)
 
}