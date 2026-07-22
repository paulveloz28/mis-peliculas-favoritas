//Importa el hook useState paramanejar el estado del componente.
import { useState } from 'react'
import './App.css'

//Componente que representa una pelicula individual.
//Permite marcar o desmarcar una pelicula como favorita.
function Pelicula({titulo}){
   const [favorita, setFavorita] = useState(false);

   return(
  //Estilos dinamicos del contenedor de la pelicula.
    <div style={{border: '1px solid gray', 
                padding: '10px', 
                margin: '5px', 
                backgroundColor: favorita ? 'blue' : 'black',
                opacity: favorita ? 0.5 : 1,
                cursor: 'pointer'
                }}
                
                onClick={()=> setFavorita( !favorita)}

                >
      <p>{titulo} {favorita ? "⭐" : ""}</p>

    </div>
   );
}

//Administra la lista de peliculas y permite agregar nuevas.
function App() {
  const [peliculas, setPeliculas] = useState(['El  Exorcista', 'Soy Leyenda', 'Siniestro', 'Never back down']);
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
        <Pelicula key={indice} titulo={pelicula}/>
      ))}
    </div>
  )
}

export default App
