import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from './Layout';
import routes from '../routes';
import { authOperations } from '../redux/auth';

const AsyncHomeViews = lazy(() =>
  import('../views/HomeViews.js' /* webpackChunkName: "home-page" */),
);
const AsyncContactsViews = lazy(() =>
  import('../views/ContactsViews.js' /* webpackChunkName: "contacts-page" */),
);
const AsyncLoginView = lazy(() =>
  import('../views/LoginView.js' /* webpackChunkName: "login-page" */),
);
const AsyncRegisterView = lazy(() =>
  import('../views/RegisterView.js' /* webpackChunkName: "register-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Layout>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path={routes.home} exact component={AsyncHomeViews} />
            <Route path={routes.login} exact component={AsyncLoginView} />
            <Route path={routes.register} exact component={AsyncRegisterView} />
            <Route
              path={routes.contacts}
              exact
              component={AsyncContactsViews}
            />
            <Redirect to={routes.home} />
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
