import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Container } from '@material-ui/core';

import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
    backgroundColor: '#2196f3',
  },
}));

// export default function ButtonAppBar() {
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

const NavBar = ({ isAuthenticated }) => {
  const classes = useStyles();
  return (
    <header>
      <AppBar position="static">
      <Container maxWidth={false}>
        <Toolbar className={classes.root}>
          <Navigation />
          {isAuthenticated ? <UserMenu /> : <AuthNav />}
        </Toolbar>
        <Container/>
      </AppBar>
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(NavBar);
