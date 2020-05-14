import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'App.css';
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import SearchPassenger from 'components/Atoms/Objects/SearchPassenger'
import PassengerTable from 'components/Orgamisms/PassengerTables/PassengerTable';
import { endpoints } from 'endpoints';
import Cookie from 'js-cookie';
import Header from 'components/Orgamisms/Header/Header';
import MyButton from 'components/Atoms/Button/MyButton';
import styles from './ListOfPassengers.module.scss';
import AddItemBar from 'components/Atoms/AddItem/AddItenBar';
import Sidebar from 'components/Orgamisms/Sidebar/Sidebar';


class ListOfPassengers extends Component{
  
    state = new SearchPassenger();
    state = {
      dataPassenger: [],
      isNewItemBarVisible: false,
      token: Cookie.get("jwt"),
    }

    toggleNewItemBar = () => {
      this.setState(prevState => ({ 
        isNewItemBarVisible: !prevState.isNewItemBarVisible, 
      }));
    }
    

  // save flights to pdf
  getFlightToPdf = () => {

    fetch(endpoints.pdfPassengers, {
      headers: {'Authorization': this.state.token}
    })
    .then(response => response.blob())
    .then(blob => {

      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `passengers.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    })
    .catch(error => console.log(error));
  }

  // save flights to excel
  getFlightToXlsx = () => {

    fetch(endpoints.excelPassengers, {
      headers: {'Authorization': this.state.token}
    })
    .then(response => response.blob())
    .then(blob => {

      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `passengers.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    })
    .catch(error => console.log(error));
  }
    
  componentDidMount() {
  
    fetch(endpoints.passengers,
      {
        headers: {'Authorization': this.state.token}
      }) 
      .then(response => response.json())
      .then(result =>  { 

        console.log(result)
        this.setState({ dataPassenger: result })
      
      }).catch(error => console.log(error));
  }

  deletePassenger = (passengerId)  => {

    if(window.confirm("Are you sure ?")){
      fetch(endpoints.passenger +passengerId,
      { 
        method:'DELETE',
        headers: {'Authorization': this.state.token}
      })
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

handleSubmit = event => {
  event.preventDefault();
   fetch(endpoints.searchPassenger, {
      method: "POST",
      headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',
          'Authorization': this.state.token
      },
      body: JSON.stringify( {"firstName": this.state.firstName,
                              "lastName": this.state.lastName,
                              "birthDate": this.state.birthDate   })
  })
  .then(res => res.json())
  .then(result =>  { 
  
      console.log(result)
      this.setState({ dataPassenger: result })
    
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
        <AddItemBar isVisible={this.state.isNewItemBarVisible}/>
        <div className={styles.wrapper}>
          <Form  variant="light" className={styles.form} onSubmit={this.handleSubmit}>
            <Form.Row>
                <Form.Group as={Col}  controlId="formPlaintextEmail">  
                <Col sm="10">
                    <Form.Label column sm="10">First name:</Form.Label>
                
                    <Form.Control type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                      />
                    </Col>    
                </Form.Group>
                <Form.Group as={Col}  controlId="formPlaintextEmail">  
                <Col sm="10">
                    <Form.Label column sm="10">Last name:</Form.Label>
                
                    <Form.Control type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    </Col>    
                </Form.Group>
                <Form.Group as={Col} controlId="formPlaintextEmail">  
                <Col sm="10">
                    <Form.Label column sm="10">Birth date:</Form.Label>
                    
                    <Form.Control type="date"
                        name="birthDate"
                        value={this.state.birthDate}
                        onChange={this.handleChange}
                    />
                    </Col>
                </Form.Group>
                <MyButton type="button" onClick={() => this.componentDidMount()}>Reset</MyButton>
                <MyButton type="submit">Search</MyButton>
            </Form.Row>
          </Form>
          <PassengerTable 
            dataPassenger={this.state.dataPassenger}
            deletePassenger={this.deletePassenger}
          />
        </div>
      </>
    );
  }


}
export default ListOfPassengers;