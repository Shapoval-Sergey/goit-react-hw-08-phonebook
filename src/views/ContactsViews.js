import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { contactsOperations } from '../redux/contacts/';
import { CSSTransition } from 'react-transition-group';
import s from '../components/App';

class ContactsViews extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <>
        <div className={s.box}>
          <CSSTransition
            in={true}
            appear
            timeout={1000}
            classNames={s}
            unmountOnExit
          >
            <h1 className={s.title}>Phonebook</h1>
          </CSSTransition>

          <ContactForm />

          <CSSTransition
            in={true}
            timeout={250}
            classNames={s.filter}
            unmountOnExit
          >
            <Filter />
          </CSSTransition>

          <ContactList />
        </div>
      </>
    );
  }
}

// const mapStateToProps = state => ({
//   isLoadingTasks: contactsSelectors.getLoading(state),
// });

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(ContactsViews);
