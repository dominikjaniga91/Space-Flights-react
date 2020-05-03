import React from 'react';
import { Link} from "react-router-dom";
import { Table } from "react-bootstrap";
import styles from './UserTable.module.scss';
import { routes } from 'routes';


const UserTable = ({dataUser, deleteUser}) => (

        <Table className={styles.table} striped bordered hover size="sm" variant="light" responsive="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Role</th>
              <th className={styles.column} >Action</th>
            </tr>
          </thead>
          <tbody>
            {dataUser.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>
                  <span >
                    <i  className="icon-trash-2" style={{ fontSize: "15px" }} 
                        onClick={() => {deleteUser(user.id)}} />
                  </span>
                </td>              
              </tr>
            ))}
            
          </tbody>
        </Table>
);

export default UserTable;