import React from 'react'

function ReyesPrimerRey({reyes}) {

    let resultado = reyes.find(e => e.nombre.substring(0,1) == "A" || 
    e.nombre.substring(0,1) == "a")
  return (
    <>
      {resultado == undefined ? "No se ha encontrado" : resultado.nombre    }
    </>
  )
}

export default ReyesPrimerRey
