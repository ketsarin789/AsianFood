
import {Card, CardImg,CardBody,CardTitle, CardText} from 'reactstrap';
import {Link} from 'react-router-dom';
import React from 'react'

function CurryCard({curry}) {
    const {id,image,name, description} = curry
    return (
        <Link to={`${id}`}> 
            <Card>
                <CardImg src={image} alt={name}/>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Link>
    )
}

export default CurryCard;

