// First 
import React from 'react';
import {Card, CardImg,CardTitle, CardBody, CardImgOverlay, CardText } from 'reactstrap';
import {Link} from 'react-router-dom';


const PopularCard = ({popular}) => {
   const {id,image, name, description} = popular;
    return(
        //add Link if not work delete Link
        <Link to='/home/:popularId'> 
            <Card>
                <CardImg src={image} alt={name}/>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Link>
            // <Card>
            //     <CardImg width="100%"
            //         src={image}
            //         alt={name}
            //     />
            //     <CardImgOverlay>
            //         <CardTitle>{name}</CardTitle>
            //     </CardImgOverlay>
            // </Card>
        
    )
};

export default PopularCard
