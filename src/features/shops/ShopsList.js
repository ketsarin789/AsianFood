import React from 'react'
import {selectAllShop} from '../shops/ShopsSlice'
import {Row, Col, Button} from 'reactstrap';
import { ShopCard } from './ShopCard';

export const ShopsList = () => {
    const shops = selectAllShop();
    return (
        <Row xs={1} md={3} className="p-3">
            {shops.map((shop) => {
                return(
                <Col align="center" 
                    key={shop.id}>

                    <ShopCard shop={shop}/>
                    
                </Col>
                )
            })}
        </Row>
    )
}
