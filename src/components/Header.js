import  {useState} from 'react'
import {Collapse, Navbar, NavbarBrand, NavbarToggler} from 'reactstrap'
import logo from '../assets/img/logo.jpeg'

import UserLoginForm from '../features/user/userLoginForm'


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                <UserLoginForm  />
                
                </nav>
                </Collapse>
            </Navbar>
            
            
        </>
    );
};

export default Header;