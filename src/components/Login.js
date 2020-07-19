import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/login.scss';

const Login = () => {
    return(
        <div className="row">
            <div className='container'>
                <div className="col-lg-12">
                    <Form className="formContainer">
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                        <Button color="primary">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;