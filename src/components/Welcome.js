import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { ButtonToggle } from "reactstrap";

class Welcome extends Component{
    render(){
        
        const handleSubmit = () => {
            this.props.history.push("/login");
        }

        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Welcome to redux overkill</h2>
                        <ButtonToggle color="primary" onClick={() => handleSubmit()}>Login</ButtonToggle>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Welcome);