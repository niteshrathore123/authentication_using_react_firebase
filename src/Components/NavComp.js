import React from 'react'
import {Link} from "react-router-dom";
import {Navbar,Nav,Container,Image} from 'react-bootstrap';
function NavComp() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand ><Image src="https://image.flaticon.com/icons/png/24/1136/1136140.png"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
         </div>
    )
}

export default NavComp