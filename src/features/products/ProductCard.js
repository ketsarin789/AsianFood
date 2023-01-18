import { Card, Button, Form, Row, Col, CardBody, Label } from 'reactstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';

function ProductCard(props) { // props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
    return (
        <Card>
            <CardBody>
                <CardTitle>{product.name}</CardTitle>
                <CardText>${product.price}</CardText>
                { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Label column="true" sm="6">In Cart: {productQuantity}</Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                }
            </CardBody>
        </Card>
    )
}

export default ProductCard;