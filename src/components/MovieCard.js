import React from 'react'
import {Card} from 'react-bootstrap'
import ReactStars  from 'react-rating-stars-component';


export default function MovieCard ({mov}) {
    return (
        <div>
            {
            <Card style={{ width: '18rem' }} > 
            <Card.Img variant="top" src={mov.images} className="img-movie" />
            <Card.Body>
            <Card.Title> 
            {mov.titre} 
            </Card.Title>
            <Card.Text>
            {mov.description}
            </Card.Text> 
            <div className = "star">
            <ReactStars edit={false} name="rate" starCount={5} value={mov.rate} size={30} /> 
            </div>
            </Card.Body>
            </Card>
            }
        </div>
    )
}