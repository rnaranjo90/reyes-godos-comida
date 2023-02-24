import './App.css';
import ReyesComeVacas from './ReyesComeVacas';
import ReyesComponent from './ReyesComponent';
import ReyesFiltro from './ReyesFiltro';
import ReyesPrimerRey from './ReyesPrimerRey';

function App() {

  const reyes=[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9,
        puntos: 0
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3,
        puntos: 0
    },{
        nombre:"Ataúlfo",
        reinado:5,
        vacasComidas:16,
        puntos: 0
    },{
        nombre:"Leovigildo",
        reinado:18,
        vacasComidas:3,
        puntos: 0
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13,
        puntos: 0
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11,
        puntos: 0
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12,
        puntos: 0
    }
  ]



  return (
    <div className="App">
      <h1>Actividad 1: "La comida de los Godos!!!"</h1>
      <ReyesComponent reyes = {reyes}/>
      <div>___________________________________________________________________</div>

      <h1>Actividad 2: "Reyes filtro!!!"</h1>
      <ReyesFiltro reyes = {reyes}/>


      <div>___________________________________________________________________</div>

      <h1>Actividad 3: "Primero Econtrado!!!"</h1>
      
      <br></br>
      <ReyesPrimerRey reyes = {reyes}/>
      

      <div>___________________________________________________________________</div>

      <h1>Actividad 4: "Reyes Come Vacas!!!"</h1>
      
      <ReyesComeVacas reyes = {reyes}/>

      


    </div>
  );
}

export default App;
