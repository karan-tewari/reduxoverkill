import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

class MyNavbar extends Component {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);
    render(){

        const handleLogout = () => {
            this.props.isLogged();
            this.props.history.push("/login");
        }

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
                      <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                  </Nav>
                  <NavbarText onClick={() => handleLogout()}>Logout</NavbarText>
                </Collapse>
              </Navbar>
            </div>
          );
    }
  
}


const mapDispatchToProps = dispatch => {
    return{
        isLogged : () => dispatch({type : "SIGNOUT"}) 
    }
}

export default connect(null, mapDispatchToProps)(withRouter(MyNavbar));