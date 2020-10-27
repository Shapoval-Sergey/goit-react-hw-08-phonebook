import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { lime } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(lime['A200']),
    backgroundColor: lime['A200'],
    '&:hover': {
      backgroundColor: lime['A700'],
    },
  },
}))(Button);

const AuthNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ColorButton variant="contained" color="primary">
        <NavLink to="/register" exact>
          Register
        </NavLink>
      </ColorButton>

      <ColorButton variant="contained" color="primary">
        <NavLink to="/login" exact>
          Login
        </NavLink>
      </ColorButton>
    </div>
  );
};

export default AuthNav;
