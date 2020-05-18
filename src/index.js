import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import reducers from './reducers';
// const NodeMediaServer = require('node-media-server');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );
