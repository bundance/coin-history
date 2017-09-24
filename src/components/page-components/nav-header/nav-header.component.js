import React from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import './nav-header.css';

const NavHeader = () => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <LinkContainer exact to="/">
                <NavItem eventKey={1}>
                    <Navbar.Brand>
                        Coin History
                    </Navbar.Brand>
                </NavItem>
            </LinkContainer>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <LinkContainer to="/about">
                    <NavItem eventKey={2}>
                        About
                    </NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavHeader;