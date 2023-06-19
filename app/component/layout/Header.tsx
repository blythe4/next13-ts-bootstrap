"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Navbar, Nav } from "react-bootstrap";
import { GiMonsteraLeaf } from "react-icons/gi";
import styled from "styled-components";

const Navigation = [
    {
        path: "/garden",
        name: "실내정원",
    },
    {
        path: "/therpy",
        name: "약초",
    },
    {
        path: "/weeds",
        name: "잡초",
    },
];

function Header() {
    const pathName = usePathname();
    return (
        <Navbar expand="lg">
            <Container>
                <Logo>
                    <Link href="/" className="d-inline-flex align-items-center">
                        식집사
                        <GiMonsteraLeaf />
                    </Link>
                </Logo>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavList className="me-auto gap-3">
                        {Navigation.map((nav, idx) => (
                            <NavItem
                                key={idx}
                                className={`rounded ${nav.path === pathName && "bg-success text-light"}`}
                            >
                                <Link href={nav.path} className="d-block">
                                    {nav.name}
                                </Link>
                            </NavItem>
                        ))}
                    </NavList>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

const Logo = styled.div`
    padding: 10px 20px;
    font-size: 32px;
`;

const NavList = styled(Nav)`
    a {
        padding: 8px;
    }
`;

const NavItem = styled(Nav.Item)`
    a {
        display: block;
    }
`;
