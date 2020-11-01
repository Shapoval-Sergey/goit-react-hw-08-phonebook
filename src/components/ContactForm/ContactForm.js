import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core/';

import contactsOperations from '../../redux/contacts/contactsOperations';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);

    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter name"
          style={{ width: '100%', marginBottom: '10px' }}
        ></TextField>
        <TextField
          id="outlined-basic"
          label="Number"
          variant="outlined"
          name="number"
          type="text"
          value={this.state.number}
          onChange={this.handleChange}
          placeholder="Enter number"
          style={{ width: '100%', marginBottom: '10px' }}
        ></TextField>

        <Button
          variant="contained"
          color="primary"
          style={{ width: '100%' }}
          type="submit"
        >
          Add contact
        </Button>
      </form>
    );
  }
}

// ContactForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onAddContact: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
