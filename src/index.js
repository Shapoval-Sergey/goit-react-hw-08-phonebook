import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import Container from '@material-ui/core/Container';

import App from './components/App';
import { store, persistor } from './redux/store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ScopedCssBaseline>
        <Container maxWidth="false">
          <App />
        </Container>
      </ScopedCssBaseline>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
