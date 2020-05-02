import React from 'react';
import { Table } from 'react-bootstrap';
import styles from './FlightPassengersTable.module.scss';

const FlightPassengersTable = ({dataFlight, deletePassengerFromFlight }) => (

    <>
        <div  className={styles.wrapper}>
            <div className={styles.header}>Flight's passengers</div>
            <Table className={styles.table} striped bordered hover size="sm" variant="light" responsive="sm" >

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Sex</th>
                        <th>Country</th>
                        <th>Notes</th>
                        <th>Birth date</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {dataFlight.map(passenger => (
                    <tr key={passenger.id}>
                        <td>{passenger.id}</td>
                        <td>{passenger.firstName}</td>
                        <td>{passenger.lastName}</td>
                        <td>{passenger.sex}</td>
                        <td>{passenger.country}</td>
                        <td>{passenger.notes}</td>
                        <td>{passenger.birthDate}</td>
                        <td><i onClick={() => deletePassengerFromFlight(passenger.id)} className="icon-trash-2" style={{ fontSize: "15px" }} /></td>                        
                    </tr>
                ))}
                
                </tbody>
            </Table>    
        </div>
    </>

);

export default FlightPassengersTable;