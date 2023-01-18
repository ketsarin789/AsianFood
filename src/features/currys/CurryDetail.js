import { Card, CardImg, CardText, CardBody,Col, CardTitle, Row} from 'reactstrap';


const CurryDetail =({curry}) => {
    const {image,name,description, receipt, preparation} = curry;

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
                
                {receipt.map((receipts) =>  {
                    
                    return <li>{receipts}</li>
                })}
                
            </ul>
            <h2>Preparation</h2>
            <ul>
               {preparation.map((preparations) => {
                   
                   return <li>{preparations}</li>
               })}
            </ul>
        </div>
        </Row>
    )
}

export default CurryDetail;