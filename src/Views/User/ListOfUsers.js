
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'App.css';
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import User from "components/Atoms/Objects/User";
import {Link as MyLink} from 'react-scroll';
import FlightTable from 'components/Orgamisms/FlightTables/FlightTable';
import MyButton from 'components/Atoms/Button/MyButton';
import { endpoints } from 'endpoints';
import Cookie from 'js-cookie';
import Header from 'components/Orgamisms/Header/Header';
import styles from './ListOfUsers.module.scss';
import AddItemButton from 'components/Atoms/AddItem/AddItemButton';
import addIcon from 'Assets/Icons/plus.svg';
import AddItemBar from 'components/Atoms/AddItem/AddItenBar';
import UserTable from 'components/Orgamisms/UserTables/UserTable';

class ListOfUsers extends Component{

  constructor(props) {
    super(props)
    this.state = new User();
    this.state = {
      dataUser: [],
      isNewItemBarVisible: false,
    }
}

  toggleNewItemBar = () => 
  this.setState(prevState => ({ isNewItemBarVisible: !prevState.isNewItemBarVisible, }));

  componentDidMount() {
    const token = Cookie.get("jwt");
    fetch(endpoints.user, {
      headers: {'Authorization': token}
    })
    .then(response => response.json())
    .then(result =>  { 
      console.log(result)
      this.setState({ dataUser: result })
    })
    .catch(error => console.log(error));
  }


  deleteUser = (userId) =>{
    if(window.confirm(" Are you sure ?")){
      fetch(endpoints.user +userId,
      {
        method:'DELETE'})
      .then(response => console.log(response))
      .catch(error => console.log(error));

      const items = this.state.dataUser.filter(item => item.id !== userId);
      this.setState({ dataUser: items });
    }
  }


  render() {
    return (
      <>
      <Header />
      <AddItemButton
        onClick={this.toggleNewItemBar} 
        icon={addIcon} 
      />
      <AddItemBar isVisible={this.state.isNewItemBarVisible}/>
      <div className={styles.wrapper} id="top">
      <UserTable 
          dataUser={this.state.dataUser}
          deleteUser={this.deleteUser}
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
export default ListOfUsers;