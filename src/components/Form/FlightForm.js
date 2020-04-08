import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import MyButton from '../Button/MyButton';

const FlightForm = ({ flight, historyBack, ...props }) => (

    <div className="mainFormCenter">
                <Form className="myForm" {...props}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Destination:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                               name="destination"
                               value={flight.destination}
                               {...props}
                               required />
                        </Col>
                       
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Departure:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="date"
                               name="startDate"
                               value={flight.startDate}
                               {...props}
                               required />
                        </Col>
                       
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Arrival:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="date"
                               name="finishDate"
                               value={flight.finishDate}
                               {...props}
                               required />
                        </Col>
                       
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Plane capacity:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                               name="numberOfSeats"
                               value={flight.numberOfSeats}
                               {...props}
                               required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Ticket price:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                               name="ticketPrice"
                               value={flight.ticketPrice}
                               {...props}
                               required />
                        </Col>
                    </Form.Group>
                    <MyButton onClick={historyBack} >Cancel</MyButton>
                    &nbsp;
                    <MyButton>Save flight</MyButton>
                </Form>
            </div>

);

export default FlightForm;
