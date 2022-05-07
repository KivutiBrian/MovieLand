import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from "./search.svg"

// components
import MovieCard from "./components/MovieCard"

// API KEY 
const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`

const App = () => {

  const [movies, setMovies] = useState([])
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  const [searchTerm, setSearchTerm] = useState("")

 
  // fetch the data on page load
  useEffect(() => {
    searchMovies("you")
  }, [])


  return (
    <div className='app'>
      <h1>MovieLand</h1>

      {/* Seatch */}
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}

        />
        <img src={SearchIcon} onClick={() => searchMovies(searchTerm)} alt='search' />
      </div>

      {
        movies.length > 0 ? (
          <div className='container'>

            {movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}

          </div>
        ) : (
          <div className='empty'>No movies found</div>
        )
      }



    </div>
  )
}



















// const Person = (props) => {
//   return (
//     <>

//       <h1>First Name:{props.fname} </h1>
//       <h2>Last Name: {props.lname}</h2>
//       <h2>Age: { props.age }</h2>

//     </>
//   )
// }

// const App = () => {

//   const name = null
//   const isNameShowing = false

//   const [counter, setCounter] = useState(0)

//   useEffect(()=>{
//     setCounter(10)
//   }, [])


//   return (
//     <div className="App">
//       <h1>Hello {isNameShowing ? name : ''}</h1>
//       {name ? (
//         <>Test</>
//       ) : (
//         <>
//           <p>lorem sada</p>
//           <button>Click me</button>
//         </>
//       )}

//       <Person fname={'Gaideh'} lname='Brian' age={10} />

//       <button onClick={()=> setCounter(prevCount => prevCount - 1)}>-</button>
//       <h1>{counter}</h1>
//       <button onClick={()=> setCounter(prevCount => prevCount + 1)}>+</button>

//     </div>
//   );
// }

export default App;
