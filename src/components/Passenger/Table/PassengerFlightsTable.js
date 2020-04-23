import React from 'react';
import { Table } from 'react-bootstrap';
import styles from './PassengerFlightsTable.module.scss';

const PassengerFlightsTable = ({dataFlightPassenger, deleteFlightFromPassenger}) => (
    <>
        <div  className={styles.wrapper}>
            <div className={styles.header}>Passager's flights</div>
            <Table className={styles.table} striped bordered hover size="sm" variant="light" responsive="sm" >
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Destination</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Seats</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {dataFlightPassenger.map(flight => (
                    <tr key={flight.id}>
                        <td>{flight.id}</td>
                        <td>{flight.destination}</td>
                        <td>{flight.startDate}</td>
                        <td>{flight.finishDate}</td>
                        <td>{flight.numberOfSeats}</td>
                        <td>{flight.ticketPrice}
                        <i onClick={() => deleteFlightFromPassenger(flight.id)} className="icon-trash-2" style={{ fontSize: "15px" }} /></td>                        
                    </tr>
                ))}
                
                </tbody>
            </Table>
        </div>
    </>

);

export default PassengerFlightsTable;