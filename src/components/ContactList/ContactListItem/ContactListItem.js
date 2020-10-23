import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contactsSelectors from '../../../redux/contacts/contactsSelectors';
import contactsOperations from '../../../redux/contacts/contactsOperations';

import s from './ContactListItem.module.css';

const ContactListItem = ({ name, id, number, onRemove }) => {
  return (
    <li key={id} className={s.item}>
      <p>{name}:</p>
      <p>{number}</p>
      <section className={s.sect__btn}>
        <button className={s.btn} type="button" onClick={onRemove}>
          Delete
        </button>
      </section>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactsById(state, ownProps.id);
  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
