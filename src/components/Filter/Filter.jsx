import "./Filter.css"
export default function Filter({title,filtar}){

    return(
     <div className="filtro form-check form-switch rounded-3 gap-2">           
           <label className="form-check-label fil ">{title}</label>
           <input className="form-check-input fil input" type="checkbox" onClick={(event)=>filtar(event.target)} value={title}/>
      </div>
    )
    }