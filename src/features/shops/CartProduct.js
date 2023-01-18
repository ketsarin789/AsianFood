import {Button} from 'reactstrap';
import { CartContext } from "../../CartContext";
import { useContext } from "react";
import { getProductData } from "../../data";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        < div className='cartWrap'>  
            <img src={productData.image} style={{width: "120px"}} alt={productData.name}/>
            <div className='cartCard'>
            <h3>{productData.name}</h3>
            <p>{quantity} total</p>
            <p>${ (quantity * productData.price).toFixed(2) }</p> <br></br>
            <Button className='bg-danger' size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <hr></hr>
            </div>
        </div>
    )
}

export default CartProduct;