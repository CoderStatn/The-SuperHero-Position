import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="banner">
                <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
                    <Container>
                        <Navbar.Brand to='/home'>Sam's Dance Academy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                          <Nav className="ms-auto">
                                <NavLink className='text-decoration-none text-black mx-4'
                                     activeStyle={{
                                      fontWeight: "bold",
                                    }}
                                    to="/home">Home
                                </NavLink>
                                <NavLink className='text-decoration-none text-black mx-4'
                                     activeStyle={{
                                      fontWeight: "bold",
                                    }}
                                    to="/about">About
                                </NavLink>
                                <NavLink className='text-decoration-none text-black mx-4'
                                     activeStyle={{
                                      fontWeight: "bold",
                                    }}
                                    to="/service">Service
                                </NavLink>
                                <NavLink className='text-decoration-none text-black mx-4'
                                     activeStyle={{
                                      fontWeight: "bold",
                                    }}
                                    to="/contact">Contact
                                </NavLink>
                          </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div>
                    <Container>
                        <h1 className="size mt-5 pt-5">Let's</h1>
                        <h2 className="size-2">Dance</h2>
                        <Button className="mb-5" variant="outline-dark" size="lg">Apply Now</Button>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Header;