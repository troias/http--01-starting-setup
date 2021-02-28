import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


axios.interceptors.request.use()

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
