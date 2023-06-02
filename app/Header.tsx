"use client";

import React from "react";
import { Nav } from "react-bootstrap";

type Props = {};

function Header({}: Props) {
    return (
        <Nav variant="light">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/garden">Garden</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/therpy">Therpy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/weeds">Weeds</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Header;
