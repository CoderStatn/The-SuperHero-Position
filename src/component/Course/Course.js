import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Course = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/course.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    },[])
    return (
        <Container className="my-3">
            <h1 className='text-center p-4 border-bottom border-warning'>Service</h1>
            <Row>
                {
                    courses.map((course) => (
                        <Col xs lg={4}>
                            <Card className="my-3">
                              <Card.Img height='200px' variant="top" src={course.image} />
                              <Card.Body>
                                    <Card.Title>{course.name}</Card.Title>
                                    <Card.Text>{course.info}</Card.Text>
                                    <Button variant="primary">Enroll Now</Button>
                              </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default Course;