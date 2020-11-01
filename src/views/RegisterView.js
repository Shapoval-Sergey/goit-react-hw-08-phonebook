import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core/';

import { authOperations } from '../redux/auth';

const styles = {
  form: {
    width: 320,
  },
};

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Register page</h1>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter name"
            style={{ width: '400px', marginBottom: '10px' }}
          ></TextField>

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Enter email"
            style={{ width: '400px', marginBottom: '10px' }}
          ></TextField>

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Enter password"
            style={{ width: '400px', marginBottom: '10px' }}
          ></TextField>

          <Button
            variant="contained"
            color="primary"
            style={{ width: '400px' }}
            type="submit"
          >
            Register
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  RegisterView,
);
