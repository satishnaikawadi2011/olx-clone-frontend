import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, StoreProvider } from 'easy-peasy';
import storeModel from './easy-peasy/storeModel';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

const store = createStore(storeModel);

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
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
