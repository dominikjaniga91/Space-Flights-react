import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {Link as MyLink} from 'react-scroll';
import SearchPassenger from './SearchPassenger'
import PassengerTable from './Table/PassengerTable';
import { endpoints } from '../../endpoints';
import { routes } from '../../routes';


class ListOfPassengers extends Component{
  
    state = new SearchPassenger();
    state = {
      dataPassenger: []
    }


  componentDidMount() {
    fetch(endpoints.passengers)
      .then(response => response.json())
      .then(result =>  { 

        console.log(result)
        this.setState({ dataPassenger: result })
      
      }).catch(error => console.log(error));
  }

  deletePassenger = (passengerId)  => {

    if(window.confirm("Are you sure ?")){
      fetch(endpoints.passenger +passengerId,
        { method:'DELETE' })
      .then(response => console.log(response))
      .catch(error => console.log(error));
      
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
        <PassengerTable 
          dataPassenger={this.state.dataPassenger}
          deletePassenger={this.deletePassenger}
        />
      <span id="sideBar">
        <Button id="mainButton" href={routes.newPassenger} >Add new passenger</Button><br></br><br></br>
        <Button id="mainButton" href={routes.newFlight}>Add new flight</Button><br></br><br></br>
 
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