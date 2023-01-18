
import {Card,CardBody, CardImg, CardText, CardTitle} from 'reactstrap'
import {Link} from 'react-router-dom';




export const NoodleCard = ({noodle}) => {
    const {id, image,name,description} = noodle
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
