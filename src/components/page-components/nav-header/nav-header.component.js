import React from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import './nav-header.css';

const NavHeader = () => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                Coin History
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <LinkContainer exact to="/">
                    <NavItem eventKey={1}>
                        Home
                    </NavItem>
                </LinkContainer>
                <LinkContainer to="/settings">
                    <NavItem eventKey={2}>
                        Settings
                    </NavItem>
                </LinkContainer>
                <LinkContainer to="/about">
                    <NavItem eventKey={3}>
                        About
                    </NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavHeader;