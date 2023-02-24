import React from 'react'

export default function ReyesComeVacas({reyes}) {

    const contar = (r) => {
        r.target.innerHTML++;
    }

    let resultado = reyes.filter(e => e.reinado >=10 && e.vacasComidas >= 10).map(e => 
        <div key={e.nombre} className = "comeVacas">
            {e.nombre} 
            <h2 onClick={contar} className = "numero">0</h2>             
        </div>)

  return (
    <>
      {resultado}
    </>
  )
}
