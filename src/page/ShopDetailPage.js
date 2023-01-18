import {Container, Row} from 'reactstrap';
import { useParams} from 'react-router-dom';
// import {selectShopById}  from '../features/shops/ShopsSlice';
import ShopDetail from '../features/shops/ShopDetail';
import {getProductData} from '../features/shops/ShopsSlice'
import React from 'react'



const ShopDetailPage = () => {

    // const {shopId} = useParams();
    // const shop = selectShopById(shopId)
    const {productId} = useParams();
    const product = getProductData(productId)
    return (
        <div>
            <Container>
                <Row>
                    {/* <ShopDetail shop ={shop} /> */}
                    <ShopDetail produc={product} />
                </Row>
            </Container>
        </div>
    )
}

export default ShopDetailPage;
