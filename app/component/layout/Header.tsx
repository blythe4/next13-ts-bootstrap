"use client";

import React from "react";
import { Container, Offcanvas, Navbar, Nav } from "react-bootstrap";

function Header() {
    const expand = "lg";
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">식집사</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Nav.Link href="/garden">실내정원</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/therpy">약초</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/weeds">잡초</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
