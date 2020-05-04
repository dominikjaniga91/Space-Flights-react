import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'App.css';
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import MyButton from 'components/Atoms/Button/MyButton';
import styles from 'components/Molecules/Form/Form.module.scss';
import ErrorMessage from 'components/Atoms/ErrorMessage/ErrorMessage';

const PassengerForm = ({ passenger, historyBack, isVisible, error, ...props }) => (

    <div className={styles.wrapper}>
                <ErrorMessage isVisible={isVisible} >{error}</ErrorMessage>
                <Form className={styles.form} {...props}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">First name:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                            name="firstName"
                            value={passenger.firstName}
                            {...props}
                            required />
                        </Col>
                    
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Last name:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                            name="lastName"
                            value={passenger.lastName}
                            {...props}
                            required />
                        </Col>
                    
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Sex:</Form.Label>
                        <Col sm="8">
                        <Form.Control as="select" name="sex"  value={passenger.sex} {...props} required>
                            <option defaultValue value="none">Select</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Country:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                            name="country"
                            value={passenger.country}
                            {...props}
                            required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Birth date:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="date"
                            name="birthDate"
                            value={passenger.birthDate}
                            {...props}
                            required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Notes:</Form.Label>
                        <Col sm="8">
                        <Form.Control as="textarea" rows="2" type="text"
                            name="notes"
                            value={passenger.notes}
                            {...props}
                                />
                        </Col>
                    </Form.Group>
                    <div className={styles.button__wrapper}>
                        <MyButton  type="button" onClick={historyBack} >Cancel</MyButton>
                        &nbsp;
                        <MyButton  type="submit">Save</MyButton>
                    </div>
                </Form>
            </div>

);

export default PassengerForm;
