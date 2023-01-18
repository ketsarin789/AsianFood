import {Card, CardImg, CardBody, CardTitle, Button, Row, Col, CardText, Label, Form} from 'reactstrap';
import {Link} from 'react-router-dom';
import {CartContext} from '../../CartContext'
import {useContext} from 'react';

import React from 'react'

export const ShopCard = ({shop}) => {
    const {id,image,name, price} = shop;
    const product = shop;
    const cart =useContext(CartContext);
     const productQuantity = cart.getProductQuantity(product.id);
    
    console.log(cart.items)
    return (
        // <Link to={`${id}`}> 
       
        <Card className='p-1'>
                <CardImg  src={image} alt={name} style={{width: "250px" ,marginLeft:"150px"}} />
                <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>${price}</CardText>
                { productQuantity > 0 ?
                    <>
                        <Form className='row'>
                            <Label  sm="6">In Cart: {productQuantity}</Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2 bg-primary">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2 bg-primary">-</Button>
                            </Col>
                        </Form>
                        <Button  onClick={() => cart.deleteFromCart(product.id)} className="my-2 bg-danger">Remove from cart</Button>
                    </>
                    :
                    <Button className='bg-primary' onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                }
            </CardBody>
                {/* <CardBody>
                    <CardTitle>{name}</CardTitle>
                     <Form >
                        
                         <Col >
                            <Button className='bg-warning m-2' >+</Button>
                            <Button className='bg-warning m-2' >-</Button>
                        </Col>
                         </Form>

                        <Button className="bg-primary">$ {price} Add To Card</Button>
                 
                </CardBody> */}
                
        </Card>
        
    //    </Link>
    )
}


                   