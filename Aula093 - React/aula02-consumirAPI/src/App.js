import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Headers';
import Routes from './routes';
import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={2500} className="toast-container" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;