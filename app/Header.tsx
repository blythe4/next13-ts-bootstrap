"use client";

import React from "react";
import { Container, Nav } from "react-bootstrap";

type Props = {};

function Header({}: Props) {
    return (
        <Container>
            <Nav variant="light">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
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
        </Container>
    );
}

export default Header;
