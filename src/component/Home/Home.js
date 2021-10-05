import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('/cart.JSON')
            .then(res => res.json())
            .then(data => setService(data));
    },[])
    return (
        <>
            <div>
                <Container className="my-3">
                    <Row>
                        {
                            services.map((service) => (
                                <Col xs lg={3}>
                                    <Card className="my-3">
                                      <Card.Img height='200px' variant="top" src={service.image} />
                                      <Card.Body>
                                            <Card.Title>{service.name}</Card.Title>
                                            <Card.Text>{service.info}</Card.Text>
                                            <Button variant="primary">Enroll Now</Button>
                                      </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
            <div className="banner-3 mt-3">
                <Container>
                    <Row className="p-4">
                        <Col xs lg={7}>
                            <div>
                                <h1 className="text-danger">Sam's Dance Academy</h1>
                                <p className="w-75 text-light">Kale chips mustache drinking vinegar pabst farm-to-table humblebrague shabby chic tousled snackwave iceland.</p>
                            </div>
                        </Col>
                        <Col xs lg={5}>
                            <Row>
                                <Col xs lg={6}>
                                    <h2 className="text-danger">2003</h2>
                                    <p className="fw-bold text-light">Year Founded</p>
                                </Col>
                                <Col xs lg={6}>
                                    <h2 className="text-danger">645</h2>
                                    <p className="fw-bold text-light">Students</p>
                                </Col>
                                <Col xs lg={6}>
                                    <h2 className="text-danger">1679</h2>
                                    <p className="fw-bold text-light">Class Held</p>
                                </Col>
                                <Col xs lg={6}>
                                    <h2 className="text-danger">24</h2>
                                    <p className="fw-bold text-light">Live Performance</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <div className="my-5 py-5 border border-warning">
                                <h5 className='text-dark'>From</h5>
                                <h1 className="text-warning">$30</h1>
                                <h5 className='text-dark'>PAY AS YOU GO LESSION</h5>
                                <p className='text-dark w-75 mx-auto'>Listicle adaptogen whatever tote bag church-key trust fund food school of art truck pinterest artist lacus urna.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="my-5 py-5 border border-warning">
                                <h5 className='text-dark'>From</h5>
                                <h1 className="text-warning">$290</h1>
                                <h5 className='text-dark'>5 PRIVATE CLASSES</h5>
                                <p className='text-dark w-75 mx-auto'>Keffiyeh YOLO actually hoodie cliche air plant. 3 wolf moon bespoke waiting wayfarers.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="my-5 py-5 border border-warning">
                                <h5 className='text-dark'>From</h5>
                                <h1 className="text-warning">$150</h1>
                                <h5 className='text-dark'>10 GROUP CLASSES</h5>
                                <p className='text-dark w-75 mx-auto'>iPhone bitters offal cardigan illustration gochujang affogato teacher glossier.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Home;