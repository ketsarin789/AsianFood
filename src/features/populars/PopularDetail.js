import { Card, CardImg, CardText, CardBody,Col, CardTitle, Row} from 'reactstrap';


const PopularDetail =({popular}) => {
    const {image,name,description, receipts, preparations} = popular;

    return(
        <Row className='row'>
        {/* <Col >   md="5" className='m-1' */}
        <Col className='col-md-6 '>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
        <div className='col-md-6'>
            <h1 className='seeew'>{name}</h1>
            <h2>ingredents</h2>
            <ul>
                
                {receipts.map((receipt) =>  {
                    
                    return <li>{receipt}</li>
                })}
                
            </ul>
            <h2>Preparation</h2>
            <ul>
               {preparations.map((preparation) => {
                   
                   return <li>{preparation}</li>
               })}
            </ul>
        </div>
        </Row>
    )
}

export default PopularDetail;