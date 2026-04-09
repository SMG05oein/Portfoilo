import React from 'react';
import { Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import './GNB.style.css';

const GNB = () => {
    return (
        <div className="GNB">
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="/">SMG.Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#techStack">TechStack</Nav.Link>
                            <Nav.Link href="#award">Award</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default GNB;