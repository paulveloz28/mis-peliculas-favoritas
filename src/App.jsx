import { useState } from 'react'
import './App.css'


function Peliculas({texto}){
   const [favorita, setFavorita] = useState(false);

   return(
    <div style={{border: '1px solid gray', 
                padding: '10px', 
                margin: '5px', 
                backgroundColor: favorita ? 'blue' : 'black',
                opacity: favorita ? 0.5 : 1,
                cursor: 'pointer'
                }}
                
                onClick={()=> setFavorita( !favorita)}

                >
      <p>{texto} {favorita ? "⭐" : ""}</p>

    </div>
   );
}

function App() {
  const [peliculas, setPeliculas] = useState(['El  Exorcista', 'Soy Leyenda', 'Siniestro', 'John Wick', 'Never back down']);
  const [nuevaPelicula, setNuevaPelicula] = useState('');
  function agregarPeliculas(){
    if(nuevaPelicula.trim()=== ''){
      return;
    }else{
      setPeliculas([...peliculas, nuevaPelicula]);

      setNuevaPelicula('');
    }
  }

  return (
    <div>
      <h1>Mis Peliculas Favoritas</h1>

      <div>
        <input 
          type='text'
          value={nuevaPelicula}
          onChange={(e)=> setNuevaPelicula(e.target.value) }
          placeholder='Nueva Pelicula...'
          style={{flex: 1, padding: '8px'}}
        />

        <button onClick={agregarPeliculas}>Agregar</button>

      </div>

      {peliculas.map((pelicula, indice)=>(
        <Peliculas key={indice} texto={pelicula}/>
      ))}
    </div>
  )
}

export default App
