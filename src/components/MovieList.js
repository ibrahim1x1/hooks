import { MoviCard } from "./MovieCard"


export const MovieList=({movies,setMovies,searchM,rateM,setMovie})=>{
const Film =  movies.filter(el => el.title.toLowerCase().includes(searchM.toLowerCase())  && el.rating >= rateM)   
    return(
        <div className="Movie">
            {
               Film.length ? Film.map(movie=> <MoviCard movie={movie} movies={movies} setMovies={setMovies} setMovie={setMovie}/>) : "Not found"
            }
        </div>
    )
}
