import React from 'react';
import { Button, Container, FloatingLabel, Form, FormControl, InputGroup } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="banner-4">
            <Container>
                <h1 className='text-center p-4 border-bottom border-warning'>Contact with us</h1>
                <div className="py-5">
                    <InputGroup className="mb-3 w-50">
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Name"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3 w-50">
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Email"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3 w-50">
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Subject"
                        />
                    </InputGroup>
                    <FloatingLabel controlId="floatingTextarea2" label="Your Message">
                      <Form.Control
                        as="textarea"
                        placeholder="Your Message"
                        style={{ height: '100px' }}
                      />
                    </FloatingLabel>
                    <br />
                    <Button size='lg' variant="outline-dark">Send Message</Button>
                </div>
            </Container>
        </div>
    );
};

export default Contact;