import  {useState, useContext} from 'react'
import {Collapse, Navbar, NavbarBrand, NavbarToggler, Modal, ModalHeader, ModalBody,  Button, CardImg, Card, Col} from 'reactstrap'
import { CartContext } from '../CartContext';
import CartProduct from '../features/shops/CartProduct';
import logo from '../assets/img/logo.jpeg'


import UserLoginForm from '../features/user/userLoginForm'


const Header = () => {
    const cart = useContext(CartContext)
    const [menuOpen, setMenuOpen] = useState(false);
    const [show, setShow] = useState(false);
   
    const handleShow = () => setShow(false)

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0) //use for get total of product
    return (
        <>
            <Navbar dark color='primary' sticky='top' expand='md'>
                <NavbarBrand className='ms-5' href='/'>
                    <img src={logo} alt='Asian Foods' className='float-start' />
                    
                </NavbarBrand>
                <h1 className='mt-1'>Asian Foods Recipes</h1>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
                <Collapse isOpen={menuOpen} navbar>
                <nav className='ms-auto' navbar>
                <Button onClick={handleShow} className="bg-warning m-2" style={{ color: 'black', border: '1px solid white' }}>Cart ({productsCount} Items)</Button>
                <UserLoginForm  />
                </nav>
                </Collapse>
            </Navbar>
            <Modal isOpen={!show}>
                   {/* this one will made X button in header close */}
                    <ModalHeader toggle={() => setShow(true)}> 
                       Shopping Cart
                   </ModalHeader>
                    <ModalBody>
                        {productsCount > 0 ?
                        <>
                        <p>Cart: </p>
                        {cart.items.map((currentProduct, idx) => {
                            return(
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} />

                            )

                            
                        })}
                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                            <Button className='bg-primary'>Purchase Items!</Button>
                        </>
                        :
                        <h4>There are no items on your cart</h4>
                    }
                    </ModalBody>
            </Modal>
        </>
    );
};

export default Header;