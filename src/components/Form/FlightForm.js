import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import MyButton from '../Button/MyButton';
import styles from './Form.module.scss';
import ErrorMessage from '../Atoms/ErrorMessage/ErrorMessage';

const FlightForm = ({ flight, historyBack, isVisible, error, ...props }) => (

    <div className={styles.wrapper}>
                <ErrorMessage isVisible={isVisible} >{error}</ErrorMessage>
                <Form className={styles.form} {...props}>
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
                        <Form.Label column sm="4">Capacity:</Form.Label>
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
