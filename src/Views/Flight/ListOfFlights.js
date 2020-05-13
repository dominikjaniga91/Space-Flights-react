
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'App.css';
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import SearchFlight from "components/Atoms/Objects/SearchFlight";
import {Link as MyLink} from 'react-scroll';
import FlightTable from 'components/Orgamisms/FlightTables/FlightTable';
import MyButton from 'components/Atoms/Button/MyButton';
import { endpoints } from 'endpoints';
import Cookie from 'js-cookie';
import Header from 'components/Orgamisms/Header/Header';
import styles from './ListOfFlights.module.scss';
import Sidebar from 'components/Orgamisms/Sidebar/Sidebar';

class ListOfFlights extends Component{

  constructor(props) {
    super(props)
    this.state = new SearchFlight();
    this.state = {
      dataFlight: [],
      isNewItemBarVisible: false,
      token: Cookie.get("jwt")
    }
    this.handleChange = this.handleChange.bind(this);

}

  // show add idem bar
  toggleNewItemBar = () => {
    
    this.setState(prevState => ({ 
      isNewItemBarVisible: !prevState.isNewItemBarVisible, 
    }));
  }

  // save flights to pdf
  getFlightToPdf = () => {

    fetch(endpoints.pdfFlights, {
      headers: {'Authorization': this.state.token}
    })
    .then(response => response.blob())
    .then(blob => {

      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `spaceflights.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    })
    .catch(error => console.log(error));
  }

  // save flights to excel
  getFlightToXlsx = () => {

    fetch(endpoints.excelFlights, {
      headers: {'Authorization': this.state.token}
    })
    .then(response => response.blob())
    .then(blob => {

      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `spaceflights.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    })
    .catch(error => console.log(error));
  }

  // display all flights
  componentDidMount() {
    fetch(endpoints.flights, {
      headers: {'Authorization': this.state.token}
    })
    .then(response => response.json())
    .then(result =>  { 
      console.log(result)
      this.setState({ dataFlight: result })
    })
    .catch(error => console.log(error));
  }


  deleteFlight = (flightId) =>{
    if(window.confirm("Are you sure ?")){
      fetch(endpoints.flight +flightId,
      {
        method:'DELETE',
        headers: {'Authorization': this.state.token}
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));

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

// send searching data to controller
handleSubmit = event => {
  event.preventDefault();
   fetch(endpoints.searchFlight, {
      method: "POST",
      headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',
          'Authorization': this.state.token
      },
      body: JSON.stringify( {"destination": this.state.destination,
                              "startDate": this.state.startDate,
                              "finishDate": this.state.finishDate   })
  })
  .then(res => res.json())
  .then(result =>  { 
  
      console.log(result)
      this.setState({ dataFlight: result })
    
  })
  .catch(error => console.log(error));
}

  render() {
    return (
      <>
      <Header />
      <Sidebar 
        onClick={this.toggleNewItemBar}
        getFlightToPdf={this.getFlightToPdf} 
        getFlightToXlsx={this.getFlightToXlsx}
        isVisible={this.state.isNewItemBarVisible}
      />
      
      
      <div className={styles.wrapper} id="top">
       
        <Form  variant="light" className={styles.form} onSubmit={this.handleSubmit}>
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
              <MyButton type="button"  onClick={() => this.componentDidMount()}>Reset</MyButton>
              <MyButton type="submit" >Search</MyButton>
          </Form.Row>
        </Form>
        <FlightTable 
          dataFlight={this.state.dataFlight}
          deleteFlight={this.deleteFlight}
        />

        <MyLink
          activeClass="active" 
          to="top" 
          spy={true} 
          smooth={true} 
          offset={0} 
          duration={500} 
        ><span ><i  className="icon-up-open" /></span></MyLink>
      </div>
      </>
    );
  }


}
export default ListOfFlights;