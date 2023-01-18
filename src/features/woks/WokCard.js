import {Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';


import React from 'react'

export const WokCard = ({wok}) => {
    const {name, image, id, description} = wok
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


