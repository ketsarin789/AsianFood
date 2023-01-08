// First 
import React from 'react';
import {Card, CardImg,CardTitle, CardBody, CardImgOverlay, CardText } from 'reactstrap';
import {Link} from 'react-router-dom';


const PopularCard = ({popular}) => {
   const {id,image, name, description} = popular;
    return(
        //add Link if not work delete Link
        <Link to={`/${id}`}> 
            <Card>
                <CardImg src={image} alt={name}/>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Link>
           
        
    )
};

export default PopularCard
