import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Provider } from 'react-redux';
import store from "./app2/store"

import { Router } from "./app2/Router"

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
