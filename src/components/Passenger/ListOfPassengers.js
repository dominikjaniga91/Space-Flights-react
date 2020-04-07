import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from "react-bootstrap";
import '../../App.css';
import { Link} from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {Link as MyLink} from 'react-scroll';
import SearchPassenger from './SearchPassenger'

class ListOfPassengers extends Component{
  
    state = new SearchPassenger();
    state = {
      dataPassenger: []
    }


  componentDidMount() {
    fetch('http://localhost:8080/allPassengers')
      .then(response => response.json())
      .then(result =>  { 

        console.log(result)
        this.setState({ dataPassenger: result })
      
      });
  }

  deletePassenger(passengerId) {

    if(window.confirm("Operation is irreversible. Are you sure that you want to continue?")){
      fetch('http://localhost:8080/deletePassenger'+passengerId,
      { method:'DELETE' })

      const items = this.state.dataPassenger.filter(item => item.id !== passengerId);
      this.setState({ dataPassenger: items });
    }
  }

  handleChange = event => {
    const newValue = event.target.type === 'number'
                      ? parseInt(event.target.value)
                      : event.target.value;
    const fieldName = event.target.name; // nazwa pola w formularzu
    const updatedState = { [fieldName]: newValue}; // zapisuje każde pole z formularza
    this.setState(updatedState);
}

  render() {
    return (
      <div className="mainTable">
        <Form  variant="light" className="searchingForm" onSubmit={this.handleSubmit}>
          <Form.Row>
              <Form.Group as={Col}  controlId="formPlaintextEmail">  
              <Col sm="10">
                  <Form.Label column sm="10">First name:</Form.Label>
              
                  <Form.Control type="text"
                      name="destination"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                      required />
                  </Col>    
              </Form.Group>
              <Form.Group as={Col}  controlId="formPlaintextEmail">  
              <Col sm="10">
                  <Form.Label column sm="10">Last name:</Form.Label>
              
                  <Form.Control type="text"
                      name="destination"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                      required />
                  </Col>    
              </Form.Group>
              <Form.Group as={Col} controlId="formPlaintextEmail">  
              <Col sm="10">
                  <Form.Label column sm="10">Birth date:</Form.Label>
                  
                  <Form.Control type="date"
                      name="finishDate"
                      value={this.state.birthDate}
                      onChange={this.handleChange}
                      required />
                  </Col>
              </Form.Group>
              <Button className="searchButton" variant="primary" type="submit"  size="sm">
                  Search
              </Button>
              <Button className="searchButton" onClick={() => this.componentDidMount()}variant="primary"   size="sm">
                  Reset
              </Button>
          </Form.Row>
        </Form>
      <Table className="passengerTable" striped bordered hover size="sm" variant="light" responsive="sm">
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
          {this.state.dataPassenger.map((passenger) => (
            <tr key={passenger.id}>
            <td>{passenger.id}</td>
            <td>{passenger.firstName}</td>
            <td>{passenger.lastName}</td>
            <td>{passenger.sex}</td>
            <td>{passenger.country}</td>
            <td>{passenger.notes}</td>
            <td>{passenger.birthDate}</td>
            <td><Link to={`/updatePassenger/${passenger.id}`}>
                  <i  className="icon-user" style={{ fontSize: "15px" }} />
                </Link>
                <Link to={`/passengerFlights/${passenger.id}`}>
                  <i  className="icon-flight-1" style={{ fontSize: "16px" }} />
                </Link>
                <Link >
                  <i  className="icon-trash-2" style={{ fontSize: "15px" }} onClick={() => {this.deletePassenger(passenger.id)}} />
                </Link>
          
            </td>
            </tr>
          ))}
          
        </tbody>
      </Table>
      <span id="sideBar">
        <Button id="mainButton" href="/addPassenger">Add new passenger</Button><br></br><br></br>
        <Button id="mainButton" href="/addFlight">Add new flight</Button><br></br><br></br>
 
      </span>
      <MyLink
          activeClass="active" 
          to="top" 
          spy={true} 
          smooth={true} 
          offset={0} 
          duration={500} 
          ><span ><i  className="icon-up-open" /></span></MyLink>
      </div>
    );
  }


}
export default ListOfPassengers;