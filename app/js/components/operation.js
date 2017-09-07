import React, { Component } from 'react'
import { connect } from 'react-redux'

import OperationList from './operation-list'
import OperationDetail from './operation-detail'

/*
 * 
 * */

class Operation extends Component  {
		render() {
		return (
			<div>
				<OperationList />
				<OperationDetail />
			</div>
		);
	}
}

const mapStateToProps = state => {
	// const { selectedReddit, operations } = state
	// const {
	//   isFetching,
	//   lastUpdated,
	//   items: operations
	// } = operations || {
	//   isFetching: true,
	//   items: []
	// }

	return {
		// selectedReddit,
		// operations,
		// isFetching,
		// lastUpdated
	}
}
export default connect(mapStateToProps)(Operation);