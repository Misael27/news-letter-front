import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { BsFillFilePersonFill, BsArrowLeftSquare } from 'react-icons/bs';

export const CustomNavbar = ({userName, logout}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">NewsLetter Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link className='mr-5 mt-1'><BsFillFilePersonFill/> {userName}</Nav.Link>
            <Nav.Link eventKey={2} href="/signup">
              <Button onClick={() => logout()}><BsArrowLeftSquare /> Logout</Button> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}