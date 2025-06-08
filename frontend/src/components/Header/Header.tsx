import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar bg="white" expand="lg" fixed="top" className="site-header">
      <Container>
        <Navbar.Brand onClick={() => scrollToSection('search')} style={{ cursor: 'pointer' }}>
          Chaudhary Bricks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection('search')} className="active">Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('properties')}>Properties</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('tools')}>Tools</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('insights')}>Insights</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header; 