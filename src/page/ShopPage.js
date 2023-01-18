import React from 'react'
import {Card} from 'reactstrap'
import {ShopsList} from '../features/shops/ShopsList';
import {SHOPS} from '../data'

export const ShopPage = () => {
    return (
        <div>
            <Card >
                <h2 className='p-3' align="center">Welcome To Shops!</h2>
                <ShopsList shop={SHOPS[0]}/>
            </Card>
        </div>
    )
}

