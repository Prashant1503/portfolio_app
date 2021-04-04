import React, { Component } from 'react';
import { Form,Container,Button,Row,Col } from 'react-bootstrap';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input/index'

export default class SignIn extends Component {

    render() {
        return (
            <Container>
                <Row style={{marginTop : '50px'}}>
                    <Col md={{span : 6,offset : 3}}>
                    <Form>
                        <Input 
                                label="User name"
                                placeholder="enter user name"
                                value=''
                                type="text"
                                
                                onChange = {() => {}}
                                ></Input>
                            

                            <Input 
                                label="Password"
                                placeholder="enter password"
                                value=""
                                type="password"
                                onChange = {() => {}}
                                ></Input>
                            
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign in 
                    </Button>
                    </Form>
      
                    </Col>
                </Row>
            </Container>
              
        )
    }
}
