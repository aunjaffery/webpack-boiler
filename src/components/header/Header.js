import React, { useEffect, useState } from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import Logo from 'assets/abstracts/efus-logo.svg'
import 'assets/styles/main.css'

const Header = props => {
    const { scrollTop } = props;
    const [ navFlip, setNavFlip ] = useState(false)
    useEffect(() => {
        if(scrollTop > 60)
        return setNavFlip(true)
        return setNavFlip(false)
    }, [scrollTop]) 
    return(
        <div className={navFlip ? "fixed-top animated flipInX nav-bg-dark" : 'nav-noColor'}>
            <Navbar variant="dark" expand="md" style={{padding : '1rem'}}>
            <Navbar.Brand href="#home" className='ml-md-4 ml-2'>
                <img src={Logo} alt="Logo" width='180px'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">EVENT MANAGEMENT</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">CAREER COUNSELING</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">HOME TUITION</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">Portfolio</Nav.Link>
                    <Nav.Link href="#link">Blog</Nav.Link>
                    <Nav.Link href="#link">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <span className='d-md-block d-none'></span>
        </Navbar>
        </div>
    )
}

export default Header;