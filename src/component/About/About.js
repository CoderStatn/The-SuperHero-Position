import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className='my-3'>
            <Container>
                <h1 className='text-center p-4 border-bottom border-danger'>About</h1>
                <Row>
                    <Col>
                        <div>
                            <img src="http://tabula.bold-themes.com/shady/wp-content/uploads/sites/4/2019/04/inner_girl_men.png" alt="" />
                        </div>
                    </Col>
                    <Col>
                        <div className="my-5">
                            <h1 className='size my-3'>About us</h1>
                            <p className="my-4">Normal that has evolved from generation X is on the runway heading towards a streamlined immersion along the information. Elevate your vector art.</p>
                            <p className="my-4">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new.</p>
                            <Button variant="outline-warning">View More</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;