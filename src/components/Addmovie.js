import { useState } from "react";
import {Modal,Button,Form} from 'react-bootstrap'
import Rating from '@mui/material/Rating';

export const AddMovie=({setMovies,movies})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title,setTitle] = useState('')
    const [descriptionM,setDescriptionM] = useState('')
    const [posterURL,setPosterURL] = useState('')
    const [rating,setRating] = useState(0)

    const handleAdd=()=>{
        
        setMovies([...movies,{title,description : descriptionM,posterURL,rating,id:Math.random()}])
        handleClose()
    }

    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e)=> setDescriptionM(e.target.value)} type="text" placeholder="Enter description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control onChange={(e)=> setPosterURL(e.target.value) } type="text" placeholder="Enter image URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
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
            <Button variant="primary" onClick={handleAdd}>
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}
