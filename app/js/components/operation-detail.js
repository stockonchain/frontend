import React, { Component } from 'react'
import { connect } from 'react-redux'

/*
 * We need "if(!this.props.operation)" because we set state to null by default
 * */

class OperationDetail extends Component {
	render() {
		if (!this.props.operation) {
			return (<div>Select a operation...</div>);
		}

		return (
			<div>
				<img src={this.props.operation.thumbnail} />
				<h2>{this.props.operation.first} {this.props.operation.last}</h2>
				<h3>Age: {this.props.operation.age}</h3>
				<h3>Description: {this.props.operation.description}</h3>
			</div>
		);
	}
}

// "state.activeOperation" is set in reducers/index.js
mapStateToProps = (state) => ({
	operation: state.activeOperation
})

export default connect(mapStateToProps)(OperationDetail);