import React from 'react';
import { Navbar} from "react-bootstrap";
import { Nav} from "react-bootstrap";
import {routes} from '../../../routes';
import headerLogo from '../../../Assets/images/space-logo.png';

const Header = () => (

            <Navbar sticky="top" bg="dark" variant="dark">  
            <Navbar.Brand id="mainSpace" href="/home"><img  src={headerLogo} alt="space-logo" id="spaceLogoNav"/></Navbar.Brand>
            <Nav className="mainNavBar">
              <Nav.Link href={routes.passengers}>Flights</Nav.Link>
              <Nav.Link  href={routes.flights}> Passengers</Nav.Link>
            </Nav>
            
          </Navbar>

);

export default Header;