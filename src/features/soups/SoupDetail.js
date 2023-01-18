import { Card, CardImg, CardText, CardBody,Col, CardTitle, Row} from 'reactstrap';


const ShopDetail =({shop}) => {
    const {image,name } = shop;

    return(
        <Row className='row'>
        {/* <Col >   md="5" className='m-1' */}
        <Col className='col-md-6 '>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>Hello</CardText>
                </CardBody>
            </Card>
        </Col>
       
        </Row>
    )
}

export default ShopDetail;