import React from 'react';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const AppBar = () => (
  <header style={styles.header}>
    <Navigation />
    <UserMenu />
  </header>
);

export default AppBar;
