import React from 'react';
import { Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
// azure-B 스타일에 맞춘 CSS는 아래에서 정의합니다.
import './GNB.style.css';

const GNB = () => {
    return (
        <div className="portfolio-layout">
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-3 portfolio-navbar">
                <Container fluid>
                    <Navbar.Brand href="/" className="fw-bold fs-4 font-monospace">
                        SeoMinGwan
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/project">Project</Nav.Link>
                            <Nav.Link href="#techStack">TechStack</Nav.Link>
                            <Nav.Link href="#techStack">SWOT</Nav.Link>
                            <Nav.Link href="#award">Award</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main className="content-area">
                <Outlet />
            </main>
        </div>
    );
};

export default GNB;