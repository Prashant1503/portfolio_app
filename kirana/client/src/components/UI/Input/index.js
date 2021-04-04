import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class Input extends Component {
    constructor(props) {
        super(props);

        
    }

    
    render() {
        return (
            <div className="form-group">
           
                        <Form.Label>{this.props.label}</Form.Label>
                        <Form.Control 
                         type={this.props.type}
                         placeholder={this.props.placeholder}
                         value={this.props.value}
                         onChange={this.props.onChange}
                         className="form-control"
                          />

                        <Form.Text className="text-muted">
                            {this.props.errorMessage}
                        </Form.Text>
                  
        </div>
        )
    }
}
