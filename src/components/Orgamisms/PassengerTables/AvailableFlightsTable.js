import React from 'react';
import styles from './AvailableFlightsTable.module.scss';
import { Table } from "react-bootstrap";

const AvailableFlightsTable = ({ dataFlight, addToFlight}) => (
    <>
        
        <div className={styles.wrapper}>
            <div className={styles.header}>Available flights</div>
            <Table striped bordered hover size="sm" variant="light" responsive="sm">
                <thead>
                    <tr>
                        <th>Dest.</th>
                        <th>Start</th>
                        <th>Finish</th>
                        <th>Seats</th>
                        <th>Pass.</th>
                        <th>Price</th>
                        <th>Add</th>
                    </tr>
                </thead>
        
                <tbody>
                {dataFlight.map((flight) => (
                   <tr key={flight.id}>
                        <td>{flight.id}</td>
                        <td>{flight.destination}</td>
                        <td>{flight.startDate}</td>
                        <td>{flight.finishDate}</td>
                        <td>{flight.numberOfSeats}</td>
                        <td>{flight.ticketPrice}</td>
                        <td><i className="icon-user-plus" style={{ position: "static" }} onClick={() => {addToFlight(flight.id)}}/></td>
                    </tr>
                ))}
                
                </tbody>
            </Table>
        </div>
    </>
)

export default AvailableFlightsTable;