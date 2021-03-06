import React, { Component } from 'react';

export default class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggled: false
		};

		this.toggleMenu = this.toggleMenu.bind(this);
	};
		toggleMenu() {
			// let isToggled = this.state.toggled;
			this.setState({isToggled: true});
		}
	
		render() {
			let buttonClass = (this.state.isToggled) ? 'toggled' : '';
			return(
				<div id="wrapper" className={buttonClass}>
					<div id="sidebar-wrapper">
	            		<ul className="sidebar-nav">
	                		<li className="sidebar-brand"><a href="#">Start Bootstrap</a></li>
	                		<li><a href="#">Dashboard</a></li>
		                	<li><a href="#">Shortcuts</a></li>
		                	<li><a href="#">Overview</a></li>
			                <li><a href="#">Events</a></li>
			                <li><a href="#">About</a></li>
			                <li><a href="#">Services</a></li>
			                <li><a href="#">Contact</a></li>
	            		</ul>
	        		</div>

	        		<div id="page-content-wrapper">
			            <div className="container-fluid">
			                <div className="row">
			                    <div className="col-lg-12">
			                        <button onClick={this.toggleMenu} className="btn btn-default" id="menu-toggle">Toggle Menu</button>
			                    </div>
			                </div>
			            </div>
			        </div>
	        	</div>
			);
		}
}