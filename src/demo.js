

import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import "./Login.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="" width="16%" className="firstname">
            <FormControl
              autoFocus
              placeholder="First Name"
            />
          </FormGroup>
          <FormGroup controlId="" bsSize="large">
            <FormControl
            placeholder="Last Name"
            />
          </FormGroup>
          <FormGroup controlId="" bsSize="large">
            <FormControl
              placeholder="Zip Code"
            />
          </FormGroup>
          
          <FormGroup controlId="email" bsSize="large">
            <FormControl
              autoFocus
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            
          </FormGroup>
          <FormGroup controlId="" bsSize="large" placeholde="password">
            <FormControl
            placeholder="Username"
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormControl
            placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormControl
            placeholder="Confirm Password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button 
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Register
          </Button>
        </form>
      </div>
    );
  }
}
