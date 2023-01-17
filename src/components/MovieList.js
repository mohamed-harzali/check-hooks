import React,{useState} from 'react'
import MovieCard from './MovieCard'
import {Button} from 'react-bootstrap'
import AddMovie from '../AddMovie';

const MovieList = ({movies,addMovie}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div >
            <div>
                <Button onClick={handleShow} className="btn-add">Add Movie</Button>
            </div>
            <AddMovie show={show} handleClose={handleClose} addMovie={addMovie}/>
            <div className="movies">
                {movies.map (el => <MovieCard mov= {el} />)}
            </div> 
        </div >
    )
}
export default MovieList;