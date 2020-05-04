import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'App.css';
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import MyButton from 'components/Atoms/Button/MyButton';
import styles from 'components/Molecules/Form/Form.module.scss';
import ErrorMessage from 'components/Atoms/ErrorMessage/ErrorMessage';


const UserForm = ({ user, historyBack, isVisible, error, ...props }) => (

    <div className={styles.wrapper}>
                <ErrorMessage isVisible={isVisible} >{error}</ErrorMessage>
                <Form className={styles.form} {...props}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Username:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="text"
                               name="username"
                               value={user.username}
                               {...props}
                               required />
                        </Col>
                       
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">New password:</Form.Label>
                        <Col sm="8">
                        <Form.Control type="password"
                               name="password"
                               value={user.password}
                               {...props}
                               required />
                        </Col>
                       
                    </Form.Group>
                  
                    <Form.Group as={Row} controlId="formPlaintextEmail">  
                        <Form.Label column sm="4">Role:</Form.Label>
                        <Col sm="8">
                        <Form.Control as="select" name="role"  value={user.role} {...props} required>
                            <option defaultValue value="none">Select</option>
                            <option value="ADMIN">Admin</option>
                            <option value="MANAGER">Manager</option>
                            <option value="EMPLOYEE">Employee</option>
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <div className={styles.button__wrapper}>
                        <MyButton onClick={historyBack} >Cancel</MyButton>
                        &nbsp;
                        <MyButton>Save</MyButton>
                    </div>
                </Form>
            </div>

);

export default UserForm;
