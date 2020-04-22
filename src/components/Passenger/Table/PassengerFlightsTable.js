import React from 'react';
import styles from './PassengerFlightsTable.module.scss';

const PassengerFlightsTable = ({ dataFlight, addToFlight}) => (

    <div className={styles.wrapper}>
        <table>
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
                    <td>{flight.destination}</td>
                    <td>{flight.startDate}</td>
                    <td>{flight.finishDate}</td>
                    <td>{flight.numberOfSeats}</td>
                    <td>{flight.amountOfPassengers}</td>
                    <td>{flight.ticketPrice}</td>
                    <td><i className="icon-user-plus" style={{ position: "static" }} onClick={() => {addToFlight(flight.id)}}/></td>
                </tr>
            ))}
            
            </tbody>
        </table>
    </div>
)

export default PassengerFlightsTable;