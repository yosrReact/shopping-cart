import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// useless comment

import configureStore from './configureStore'
import Root from './components/Root'

const store=configureStore()

const render=()=>{
  ReactDOM.render(
        <Root store={store} />
, document.getElementById('root'));
}

render();
registerServiceWorker();
