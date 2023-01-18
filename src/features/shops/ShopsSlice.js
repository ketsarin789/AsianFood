import React from 'react'
import {SHOPS} from '../../data'

export const selectAllShop = () => {
    return SHOPS;
}

 export const selectShopById = (id) => {
    return SHOPS.find((shop) => shop.id === parseInt(id))
 }


function getProductData(id) {
    let productData = SHOPS.find(product => product.id === id)
    console.log("Product Data doesn't exit for ID" + id);

    if(productData === undefined){
    return undefined;
    }
    return productData;
}

export {getProductData};
