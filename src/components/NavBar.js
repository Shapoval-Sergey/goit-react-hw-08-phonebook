import React from 'react';
import { connect } from 'react-redux';
import { Container, AppBar, Toolbar } from '@material-ui/core';

import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const NavBar = ({ isAuthenticated }) => (
  <AppBar position="static">
    <Container>
      <header style={styles.header}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </header>
    </Container>
  </AppBar>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(NavBar);
