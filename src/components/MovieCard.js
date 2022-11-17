import { Card,Button } from "react-bootstrap"
import Rating from '@mui/material/Rating';
import { Edit } from "./Edit";
export const MoviCard=({movie,movies,setMovies,setMovie})=>{
       const handleDelete=(a)=>{
        setMovies(movies.filter(el=> el.id !== a))
    }
    return(
        <>
             <Card  style={{width: '300px' }}>
                <Card.Img src={movie.posterURL} style={{height :'400px'}} />
                <Card.Body>
                    <Card.Title  style={{height :'30px'}}>{movie.title}</Card.Title>
                    <br/>
                    <Card.Text>{movie.description}</Card.Text>
                    <br/>
                    <Rating value={movie.rating}  />
                    <br/>
                    <br/>
                    <div className="Button">
                    <Edit movie={movie} movies={movies} setMovies={setMovies} setMovie={setMovie} />
                    <Button onClick={()=>handleDelete(movie.id)}>Delete</Button>
                    </div>
                </Card.Body>
                </Card>
        </>
    )
}