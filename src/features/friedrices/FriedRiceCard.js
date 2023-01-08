import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardImg,CardBody,CardTitle, CardText} from 'reactstrap';




const FriedRiceCard = ({friedrice}) => {
    const {id,image,name,description} = friedrice;
    return (
        <Link to={`/${id}`}> 
           <Card>
                <CardImg src={image} alt={name}/>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
           </Card>
       </Link>
            //  <Card>
            //     <CardImg width="100%"
            //         src={image}
            //         alt={name}
            //     />
            //     <CardImgOverlay>
            //         <CardTitle>{name}</CardTitle>
            //     </CardImgOverlay>
            //  </Card>
    )
}

export default FriedRiceCard;
