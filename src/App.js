
import css from './style.css';
import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import "./Login.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      email: "",
      password: "",
      conformpassword:"",
      userName:"",

    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.password.length === this.state.conformpassword.length;
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
          <h1>Register</h1>
          <h5>join the community and improve your game with ANGLR</h5>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="firstname" width="16%">
            <FormControl
              autoFocus
              placeholder="First Name"
            />
          </FormGroup>
          <FormGroup controlId="lastname" bsSize="large">
            <FormControl
            placeholder="Last Name"
            />
          </FormGroup>
          <FormGroup controlId="zipcode" bsSize="large">
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
          <FormGroup controlId="username" bsSize="large" >
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
              required
            />
          </FormGroup>
          <FormGroup controlId="conformpassword" bsSize="large">
            <FormControl
            placeholder="Confirm Password"
              value={this.state.conformpassword}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button id="register" 
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick = "this.validation()"
          >
            Register
          </Button>
        </form>
      </div>
    );
  }
}
