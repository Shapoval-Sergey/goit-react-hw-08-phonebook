import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Box } from '@material-ui/core';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const AuthNav = () => (
  <div
    style={{
      display: 'flex',
    }}
  >
    <Box mr={2}>
      <Button color="inherit" variant="outlined">
        <NavLink
          to="/register"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Register
        </NavLink>
      </Button>
    </Box>

    <Box mr={2}>
      <Button color="secondary" variant="contained">
        <NavLink
          to="/login"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Login
        </NavLink>
      </Button>
    </Box>
  </div>
);

export default AuthNav;
