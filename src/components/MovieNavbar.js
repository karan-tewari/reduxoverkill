import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {withRouter} from 'react-router-dom';

class MovieNavbar extends Component {
    render(){

        return (
            <div>
              <Navbar color="light" light expand="md">
                <NavbarToggler 
                // onClick={toggle} 
                />
                <Collapse 
                // isOpen={isOpen} 
                navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink onClick={() => this.props.history.push('/dashboard')}>Go to dashboard</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
    }
  
}

export default withRouter(MovieNavbar);