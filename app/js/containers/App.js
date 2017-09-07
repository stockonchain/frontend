import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from '../components/header'
import Footer from '../components/footer'
import Dashboard from '../components/dashboard'
import Operation from '../components/operation'

require('../../scss/style.scss')

const App = () => (
	<div>
		<Header />
		<div className="ui main container">
			<Switch>
				<Route exact path={'/'} component={Dashboard}/>
				<Route path={'/operations'} component={Operation}/>
			</Switch>
		</div>
		<Footer />
	</div>
);

export default App;