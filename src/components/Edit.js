import { useEffect, useState } from "react";
import {Modal,Button,Form} from 'react-bootstrap'
import Rating from '@mui/material/Rating';

export const Edit=({movie,movies,setMovies})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title,setTitle] = useState(movie.title)
    const [descriptionM,setDescriptionM] = useState(movie.description)
    const [posterURL,setPosterURL] = useState(movie.posterURL)
    const [rating,setRating] = useState(movie.rating)
    useEffect(()=>{
        setTitle(movie.title)
        setDescriptionM(movie.description)
        setPosterURL(movie.posterURL)
        setRating(movie.rating)
    },[movie])

    const handeleEdit=(a)=>setMovies(movies.map(movie=> movie.id==a ? {...movie,title:title,descreption:descriptionM,posterURL:posterURL,rating:rating} : movie))
    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          Edit Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
        <Modal.Title>Edit Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control value={descriptionM} onChange={(e)=> setDescriptionM(e.target.value)} type="text" placeholder="Enter description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control value={posterURL} onChange={(e)=> setPosterURL(e.target.value) } type="text" placeholder="Enter image URL" />
      </Form.Group>

      <Form.Group value={rating} className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <br/>
        <Rating
        name="simple-controlled"        
        onChange={(e)=> setRating(e.target.value)}
         />
      </Form.Group>

      
    </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handeleEdit(movie.id); handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}