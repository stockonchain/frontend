import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/*
 * We need "if(!this.props.operation)" because we set state to null by default
 * */

class Header extends Component {

	render() {
		return (
			<div className="ui fixed inverted menu">
				<div className="ui container">
					<Link to={`/`} className="header item">
				        <img className="logo" src="assets/images/logo.png" />
				        Supply on Chain
			      	</Link>
					<Link to={`/`} className="item">Dashboard</Link>
					<Link to={`/operations`} className="item">Operations</Link>
					<Link to={`/inventory`} className="item">Inventory</Link>
					{/*
					<a href="#" className={"item " + (this.props.page === 'operations' ? 'active' : '')}>Operations</a>
					<div className="ui simple dropdown item">
						Dropdown <i className="dropdown icon"></i>
						<div className="menu">
							<a className="item" href="#">Link Item</a>
							<a className="item" href="#">Link Item</a>
							<div className="divider"></div>
							<div className="header">Header Item</div>
							<div className="item">
								<i className="dropdown icon"></i> Sub Menu
								<div className="menu">
									<a className="item" href="#">Link Item</a>
									<a className="item" href="#">Link Item</a>
								</div>
							</div>
							<a className="item" href="#">Link Item</a>
						</div>
					</div> */}
				</div>
			</div>
		);
	}
}

export default connect(state => ({ page: state.activePage }))(Header);
// dispatch => ( bindActionCreators({selectPage: selectPage}, dispatch) ))(Navigation);