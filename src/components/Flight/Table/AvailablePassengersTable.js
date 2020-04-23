import React from 'react';
import styles from './AvailablePassengersTable.module.scss';
import { Table } from "react-bootstrap";

const AvailablePassengersTable = ({ dataPassenger, addToFlight}) => (
    <>
        
        <div className={styles.wrapper}>
            <div className={styles.header}>Available passengers</div>
            <Table striped bordered hover size="sm" variant="light" responsive="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Sex</th>
                        <th>Country</th>
                        <th>Notes</th>
                        <th>Birth date</th>
                        <th>Add</th>
                    </tr>
                </thead>
        
                <tbody>
                {dataPassenger.map((passenger) => (
                    <tr key={passenger.id}>
                        <td>{passenger.id}</td>
                        <td>{passenger.firstName}</td>
                        <td>{passenger.lastName}</td>
                        <td>{passenger.sex}</td>
                        <td>{passenger.country}</td>
                        <td>{passenger.notes}</td>
                        <td>{passenger.birthDate}</td>
                        <td><i className="icon-user-plus" style={{ position: "static" }} onClick={() => {addToFlight(passenger.id)}}/></td>
                    </tr>
                ))}
                
                </tbody>
            </Table>
        </div>
    </>
)

export default AvailablePassengersTable;