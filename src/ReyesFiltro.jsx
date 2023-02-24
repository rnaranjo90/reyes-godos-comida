import React from 'react'
import { useState } from "react";

function ReyesFiltro({reyes}) {

    const borrar = (f) => {
      f.target.parentNode.style.display = "none";
    };

    const [caracter,setCaracter] = useState();

    const buscar = (e) => {
      setCaracter(e.target.value);  
    }

    let mostrar = reyes.filter(v => v.nombre.toLowerCase().includes(caracter)).map( v =>
      <div key={v.nombre} className = "nombreBoton">
          {v.nombre + "  "} {"reinó: "+v.reinado + "  años  "}
           {"y comió: "+v.vacasComidas*365*v.reinado  + " vacas en vida  "}
          <button className="boton" onClick={borrar}>Borrar X</button>
      </div> 
      
      )

      let mensaje = "No existe ese Rey"

  return (
    <>
    <input onChange={buscar}></input>
        { mostrar == undefined ? <h1>{mensaje}</h1> : mostrar}     
    </>
  )
}

export default ReyesFiltro
