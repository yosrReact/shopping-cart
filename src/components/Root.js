import React  from 'react';
import {Provider} from 'react-redux'
//import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './App'
export const Root = ({store}) => {
  return (
    <Provider store={store}>
      <App />

    </Provider>

  );
}

export default Root
