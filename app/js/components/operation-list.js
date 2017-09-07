import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchOperations, selectOperation } from '../actions/operation'

class OperationList extends Component {

	componentDidMount() {
		console.log("OperationList.componentDidMount()", this);
		this.props.fetchOperations()
	}

	// componentWillReceiveProps(nextProps) {
	//     if (nextProps.selectedReddit !== this.props.selectedReddit) {
	//         const { dispatch, selectedReddit } = nextProps
	//         dispatch(fetchPostsIfNeeded(selectedReddit))
	//     }
	// }

	// handleChange = nextReddit => {
	//     this.props.dispatch(selectReddit(nextReddit))
	// }

	// handleRefreshClick = e => {
	//     e.preventDefault()
	//     const { dispatch, selectedReddit } = this.props
	//     dispatch(invalidateReddit(selectedReddit))
	//     dispatch(fetchPostsIfNeeded(selectedReddit))
	// }

	renderList() {
		return this.props.items.map((operation) => {
			return (
				<li	key={operation.id} onClick={() => this.props.selectOperation(operation)}>
					{operation.id} {operation.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul>
				{this.renderList()}
			</ul>
		);
	}

}

// Get apps state and pass it as props to OperationList
//      > whenever state changes, the OperationList will automatically re-render
const mapStateToProps = state => {
	const { selectedReddit, operations } = state
	const {
		isFetching,
		lastUpdated,
		items
	} = operations || {
		isFetching: true,
		items: []
	}

	return {
		// selectedReddit,
		items,
		isFetching,
		lastUpdated,
	}
}

// Get actions and pass them as props to to UserList
//      > now OperationList has this.props.selectUser
const matchDispatchToProps = dispatch => bindActionCreators({ selectOperation, fetchOperations }, dispatch);

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(OperationList);