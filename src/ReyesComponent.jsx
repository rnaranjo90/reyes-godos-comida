import React from 'react'

export default function ReyesComponent({reyes}) {
    let url = "https://www.html6.es/img/rey_"
    let mostrar01 = reyes.map( e => 
    <div className="Rey" key={e.nombre}>
         <div key={e.nombre}>"{e.nombre.toUpperCase() + " "} 
         se comió un total de {e.vacasComidas*365*e.reinado + " "}
         vacas en su reinado de {e.reinado} años."</div>
     <img src = { url+e.nombre.toLowerCase()+".png" }/>
    </div>
    )   

     
  return (
    //Expresiones
    <div className="ReyesGodos">
      {mostrar01}
      


      <div>{}</div>   
    </div>
    
  )
}
