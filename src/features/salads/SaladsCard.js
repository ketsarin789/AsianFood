import React from 'react';
import {Card, CardImg,CardTitle, CardBody, CardImgOverlay, CardText } from 'reactstrap';
import {Link} from 'react-router-dom';




export const SaladsCard = ({salad}) => {
    const {image,id,name, description} = salad;
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
