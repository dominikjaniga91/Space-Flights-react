
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from "react-bootstrap";
import '../../App.css';
import { Link} from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import SearchFlight from "./SearchFlight";
import {Link as MyLink} from 'react-scroll';



class ListOfFlights extends Component{

  constructor(props) {
    super(props)
    this.state = new SearchFlight();
    this.state = {
      dataFlight: [],
      display: "none"
    }
    this.handleChange = this.handleChange.bind(this);

}

  componentDidMount() {
    fetch('http://localhost:8080/allFlights')
      .then(response => response.json())
      .then(result =>  { 
        console.log(result)
        this.setState({ dataFlight: result })
      });
  }


  deleteFlight(flightId)
  {
    if(window.confirm("Operation is irreversible. Are you sure that you want to continue?")){
      fetch('http://localhost:8080/deleteFlight'+flightId,
      {
        method:'DELETE'})

      const items = this.state.dataFlight.filter(item => item.id !== flightId);
      this.setState({ dataFlight: items });
    }
  }

  // aktualizacja stanu
  handleChange = event => {
    const newValue = event.target.type === 'number'
                      ? parseInt(event.target.value)
                      : event.target.value;
    const fieldName = event.target.name; // nazwa pola w formularzu
    const updatedState = { [fieldName]: newValue}; // zapisuje każde pole z formularza
    this.setState(updatedState);
}

handleSubmit = event => {
  event.preventDefault();
   fetch("http://localhost:8080/findFlight", {
      method: "POST",
      headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
      body: JSON.stringify( {"destination": this.state.destination,
                              "startDate": this.state.startDate,
                              "finishDate": this.state.finishDate   })
  })
      .then(res => res.json())
      .then(result =>  { 
      
          console.log(result)
          this.setState({ dataFlight: result })
        
        });
}

  render() {
    return (
     
      <div className="mainTable" id="top">


        <Form  variant="light" className="searchingForm" onSubmit={this.handleSubmit}>
          <Form.Row>
              <Form.Group as={Col}  controlId="formPlaintextEmail">  
              <Col sm="10">
                  <Form.Label column sm="10">Destination:</Form.Label>
              
                  <Form.Control type="text"
                      name="destination"
                      // value={this.state.destination}
                      onChange={this.handleChange}
                         />
                  </Col>    
              </Form.Group>
              <Form.Group as={Col} controlId="formPlaintextEmail">  
              <Col sm="10">
                  <Form.Label column sm="10">Departure:</Form.Label>  
                  <Form.Control type="date"
                      name="startDate"
                      // value={this.state.startDate}
                      onChange={this.handleChange}
                       />
                  </Col>
              </Form.Group>
              <Form.Group as={Col} controlId="formPlaintextEmail">  
              <Col sm="10">
                  <Form.Label column sm="10">Arrival:</Form.Label>
                  
                  <Form.Control type="date"
                      name="finishDate"
                      // value={this.state.finishDate}
                      onChange={this.handleChange}
                       />
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
        <Table id="flightTable" striped bordered hover size="sm" variant="light" responsive="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Destination</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>Plane capacity</th>
              <th>Number of passengers</th>
              <th>Ticket price</th>
              <th id="actionColumn">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataFlight.map(flight => (
              <tr key={flight.id}>
                <td>{flight.id}</td>
                <td>{flight.destination}</td>
                <td>{flight.startDate}</td>
                <td>{flight.finishDate}</td>
                <td>{flight.numberOfSeats}</td>
                <td>{flight.amountOfPassengers}</td>
                <td>{flight.ticketPrice}</td>
                <td>
                  <Link to={`/updateFlight/${flight.id}`}>
                    <i  className="icon-sliders" style={{ fontSize: "15px" }} />
                  </Link>
                  <Link to={`/flightPassengers/${flight.id}`}>
                    <i  className="icon-user-plus" style={{ fontSize: "16px" }} />
                  </Link>
                  <span >
                    <i  className="icon-trash-2" style={{ fontSize: "15px" }} onClick={() => {this.deleteFlight(flight.id)}} />
                  </span>
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
export default ListOfFlights;