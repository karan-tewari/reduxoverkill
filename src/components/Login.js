import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert  } from 'reactstrap';
import '../styles/login.scss';
// import {useHistory} from 'react-router'
// import {useDispatch} from 'react-redux';
// import {signin} from '../actions/index';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
// import isLogged from '../reducers/isLogged';


class Login extends Component{

    state = {
        emailValue : "",
        pswdVal : "",
        showError : undefined,
        visible:true,
    }

    handleSubmit = () => {
        if(this.state.emailValue === "admin" && this.state.pswdVal === "admin"){
            this.setState({
                showError : false
            })
            this.props.isLogged();
            this.props.history.push("/dashboard");
        }

        else{
            this.setState({
                showError:true
            })
        }
        
        
    }

    handleEmailValUpdate = (e) => {
        this.setState({
            emailValue : e.target.value
        })
    }

    handlePswdVal = (e) => {
        this.setState({
            pswdVal : e.target.value
        })
    }

    handleDismiss = () => {
        this.setState({
            visible : false
        })
    }

    render(){
    
        return(
            <div className="container">
                <div className='row'>
                    <div className="col-lg-12">
                        <Form className="formContainer">
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input 
                                    type="email" 
                                    name="email" 
                                    id="exampleEmail" 
                                    placeholder="Email"
                                    onChange={this.handleEmailValUpdate}
                                    value={this.state.emailValue} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input 
                                    type="password" 
                                    name="password" 
                                    id="examplePassword" 
                                    placeholder="Password" 
                                    onChange={this.handlePswdVal}
                                    value={this.state.pswdVal}
                                />
                            </FormGroup>
                            <Button color="primary" onClick={() => this.handleSubmit()}>Submit</Button>
                            {this.state.showError ? <Alert color="danger" isOpen={this.state.visible} toggle={this.handleDismiss}> I am an alert and I can be dismissed!</Alert> : ""}
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        isLogged : () => dispatch({type: "SIGNIN"})
    }
} 

export default connect(null,mapDispatchToProps)(withRouter(Login));