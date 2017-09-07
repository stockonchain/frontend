import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectPage } from '../actions/index'
import { Button, Card, Image } from 'semantic-ui-react'

class Dashboard extends Component {
	render() {
		return (
			<Card.Group>
					<Card>
						<Card.Content 
							onClick={() => this.props.selectPage('receipts')}>
							<Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' />
							<Card.Header>
								Receipts
							</Card.Header>
							<Card.Meta>
								My Company
							</Card.Meta>
							<Card.Description>
								
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<div className='ui two buttons'>
								<Button basic color='green'>0 TO RECEIVE</Button>
								{/* <Button basic color='red'>Decline</Button> */}
							</div>
						</Card.Content>
					</Card>
					<Card>
						<Card.Content>
							<Image floated='right' size='mini' src='/assets/images/avatar/large/molly.png' />
							<Card.Header>
								Delivery Orders
							</Card.Header>
							<Card.Meta>
								My Company
							</Card.Meta>
							<Card.Description>

							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<div className='ui two buttons'>
								<Button basic color='green'>0 TO DO</Button>
							 {/* <Button basic color='red'>Decline</Button> */}
							</div>
						</Card.Content>
					</Card>
				</Card.Group>
		)
	}

}

// Get apps state and pass it as props to OperationList
//      > whenever state changes, the OperationList will automatically re-render
mapStateToProps = state => ({
	// operations: state.operations
})

// Get actions and pass them as props to to UserList
//      > now OperationList has this.props.selectUser
matchDispatchToProps = dispatch = bindActionCreators({ selectPage: selectPage }, dispatch)

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Dashboard)