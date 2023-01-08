import {useState} from 'react'
import { Navbar, NavbarToggler,Nav, Collapse, NavItem, NavbarBrand} from 'reactstrap';
import {NavLink} from 'react-router-dom';


const Second = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    
    return (
        
            <Navbar light color='light' sticky='top' expand='md'>
            {/* <NavbarBrand className='ms-5' href='/'>
                
                
            </NavbarBrand> */}
            
            
        
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='mr-auto' navbar>
                <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                             About Us
                        </NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink className='nav-link' to='/friedrice'>
                            Fried Rice
                        </NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink className='nav-link' to='/salads'>
                            Salads
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/curry'>
                            Curry
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/noodle'>
                        Noodle
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/wok'>
                            Wok
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/soup'>
                             Soup 
                          
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/shop'>
                            Shop
                        </NavLink>
                    </NavItem>
                </Nav>
               
            </Collapse>
            </Navbar>
    )
}

export default Second;
