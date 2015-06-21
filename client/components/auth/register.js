import React from 'react';
import Button from 'react-button';
import SignupForm from './_signup_form';

const Register = React.createClass ({
  render() {
    return (
      <div id="home">
        <h1>Register</h1>
        <SignupForm />
      </div>
    );
  }
});

export default Register;
