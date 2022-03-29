import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';

import Paginacion from './Paginacion';
import { useEffect, useState } from 'react';

function ListadoPeliculas() {
  const [paginaActual, setPaginaActual]= useState(1)
  const [peliculas, setPeliculas]= useState([])

  const totalPorPagina = 7

  useEffect(() => { // se ejecuta cuando carga la pagina
	buscarPeliculas();
  }, [])

  const buscarPeliculas = async () => { ///asincronica
	  //let url= 'https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/main/Proyecto%202%20-%20Web%20de%20Peliculas/Proyecto%20Terminado/src/peliculas.json'
	  let url= 'https://lucasmoy.dev/data/react/peliculas.json' 
	 
	  // https://cors-anywhere.herokuapp.com/


	  //request al servidor
	  let respuesta= await fetch(url, {
		"method": 'GET',
		"mode": 'no-cors',
		"headers": {
			"Accept" : 'aplication/json',
			"Content-Type" : 'aplication/json'/*,
			"Origin": 'https://raw.githubusercontent.com/'*/
		}
	})
	let json= await respuesta.json() /// .json() nos trae el json, ya se cargó el json
	setPeliculas(json)

  }

  

  

  const getTotalPaginas = ()=>{
	let cantidadTotalPeliculas = peliculas.length
	return Math.ceil(cantidadTotalPeliculas/totalPorPagina) ///redondea para arriba
	
  }

  let peliculasPorPagina= peliculas.slice(
	(paginaActual -1) * totalPorPagina,
	(paginaActual * totalPorPagina))
  return (
	  <PageWrapper>
		  
		  {peliculas.map(pelicula => 
			 <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
			  director={pelicula.director} actores={pelicula.actores}  fecha={pelicula.fecha} duracion={pelicula.duracion}
			  img={pelicula.img}>
			  {pelicula.descripcion}
	  		</Pelicula> 
		  )}

		  <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina)=>{
			setPaginaActual(pagina) ///se tiene que renderizar ademas de cambiar el valor
		  }}/>	
	  </PageWrapper>
   
  );
}

export default ListadoPeliculas;
