import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import store from "./components/store";
import LandingPage from "./components/landing-page";

const App = () => {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))