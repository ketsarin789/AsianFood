import { Card, CardImg, CardText, CardBody,Col, CardTitle, Row, Button} from 'reactstrap';


const shopDetail =({shop}) => {
    const {image,name,price} = shop;

    return(
        <Row className='row'>
        {/* <Col >   md="5" className='m-1' */}
        <Col className='col-md-6 '>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                </CardBody>
            </Card>
        </Col>
        
        </Row>
    )
}

export default shopDetail;

// import { Card, Button, Form, Row, Col } from 'react-bootstrap';
// import { CartContext } from '../CartContext';
// import { useContext } from 'react';

// function ProductCard(props) { // props.product is the product we are selling
//     const product = props.product;
//     const cart = useContext(CartContext);
//     const productQuantity = cart.getProductQuantity(product.id);
//     console.log(cart.items);
//     return (
//         <Card>
//             <Card.Body>
//                 <Card.Title>{product.title}</Card.Title>
//                 <Card.Text>${product.price}</Card.Text>
//                 { productQuantity > 0 ?
//                     <>
//                         <Form as={Row}>
//                             <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
//                             <Col sm="6">
//                                 <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
//                                 <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
//                             </Col>
//                         </Form>
//                         <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
//                     </>
//                     :
//                     <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
//                 }
//             </Card.Body>
//         </Card>
//     )
// }

// export default ProductCard;