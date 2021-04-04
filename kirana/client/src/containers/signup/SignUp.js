import React, { Component } from 'react';
import { Form,Container,Button,Row,Col } from 'react-bootstrap';
import Input from '../../components/UI/Input';

export default class SignUp extends Component {
    render() {
        return (
            <Container>
            <Row style={{marginTop : '50px'}}>
                <Col md={{span : 6,offset : 3}}>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Input 
                                label="First Name"
                                placeholder="enter first name"
                                value=""
                                type="text"
                                onChange = {() => {}}
                                ></Input>
                        </Col>

                        {/* 2nd column */}
                        <Col md={6}>
                        <Input 
                                label="Last Name"
                                placeholder="enter last name"
                                value=""
                                type="text"
                                onChange = {() => {}}
                                ></Input>
                            
                        
                        </Col>
                    </Row>
              
              {/* 3rd for email */}
              <Input 
                                label="Email"
                                placeholder="enter email address"
                                value=""
                                type="email"
                                onChange = {() => {}}
                                ></Input>
                            
                     

                        {/* 4th column for password */}
                        <Input 
                                label="Password"
                                placeholder="Enter password"
                                value=""
                                type="password"
                                onChange = {() => {}}
                                ></Input>
                            
                  
               
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
  
                </Col>
            </Row>
        </Container>
          
        )
    }
}
