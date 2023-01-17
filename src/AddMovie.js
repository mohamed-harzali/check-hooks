import { Modal, Button, Form } from 'react-bootstrap'
import {useState} from 'react'

const AddMovie = ({show,handleClose,addMovie}) => {
    
    const [newMovie, setNewMovie] = useState({
        titre: "",
        description: "",
        images: "",
        rate:""
    })
   
    const handleChange =(e) =>{
        setNewMovie({...newMovie,[e.target.name]:e.target.value})
    }

    return (
        <div>
            <Modal show={show}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>Movie title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Movie Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter movie Name" name='titre' onChange={handleChange}/>
                            <Form.Label>Movie Dscription</Form.Label>
                            <Form.Control type="text" placeholder="Enter movie Description" name='description' onChange={handleChange}/>
                            <Form.Label>Movie Pucture</Form.Label>
                            <Form.Control type="text" placeholder="Enter movie Pucture" name='images' onChange={handleChange}/>
                            <Form.Label>Movie Rate</Form.Label>
                            <Form.Control type="number" placeholder="Enter movie Rate" name='rate' onChange={handleChange}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={()=>{handleClose() 
                        addMovie(newMovie)}} className="btn">Add Movie</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddMovie;