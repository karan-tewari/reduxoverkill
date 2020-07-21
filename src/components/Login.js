import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/login.scss';
import {useHistory} from 'react-router'
import {useDispatch} from 'react-redux';
import {signin} from '../actions/index';



const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (props) => {
        dispatch(signin())
        history.push("/dashboard");
        
    }
        return(
            <div className="row">
                <div className='container'>
                    <div className="col-lg-12">
                        <Form className="formContainer">
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                            </FormGroup>
                            <Button color="primary" onClick={() => handleSubmit()}>Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }

export default Login;