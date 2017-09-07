import 'babel-polyfill'
import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import { HashRouter } from 'react-router-dom'
// import {BrowserRouter} from 'react-router-dom'

import reducers from './reducers'
import App from './containers/App'

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(thunk, promise, logger));

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>,
	document.getElementById('root')
);