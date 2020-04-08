import React from 'react';
import { Link} from "react-router-dom";
import { Table } from "react-bootstrap";
import styles from './PassengerTable.module.scss';


const PassengerTable = ({dataPassenger, deletePassenger}) => (

    <Table className={styles.table} striped bordered hover size="sm" variant="light" responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Sex</th>
            <th>Country</th>
            <th>Notes</th>
            <th>Birth date</th>
            <th id="actionColumn">Action</th>
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
              <td>
                <Link to={`/updatePassenger/${passenger.id}`}>
                    <i  className="icon-user" style={{ fontSize: "15px" }} />
                </Link>
                <Link to={`/passengerFlights/${passenger.id}`}>
                    <i  className="icon-flight-1" style={{ fontSize: "16px" }} />
                </Link>
                <span >
                    <i  className="icon-trash-2" style={{ fontSize: "15px" }} 
                        onClick={() => {deletePassenger(passenger.id)}} />
                </span>
            
              </td>
            </tr>
          ))}
          
        </tbody>
      </Table>

);

export default PassengerTable;