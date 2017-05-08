import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Hotel from '.././Pages/Hotel';
import Restaurant from '.././Pages/Restaurant';
import Accounting from '.././Pages/Accounting';

export default class Navigation extends Component {
	render() {
		return(
			<Router>
				<div>
					<nav className="navbar navbar-default navbar-fixed-top">
					  <div className="container-fluid">
					    <div className="navbar-header">
					      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span> 
					      </button>
					      <a className="navbar-brand" href="#">WebsiteName</a>
					    </div>
					    <div className="collapse navbar-collapse" id="myNavbar">
					      <ul className="nav navbar-nav">
					        <li><Link to="/Hotel/Home">Hotel</Link></li>
					        <li><Link to="/Restaurant">Restaurant</Link></li>
					        <li><Link to="/Accounting">Accounting</Link></li>  
					      </ul>
					      <ul className="nav navbar-nav navbar-right">
					        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Administrator</a></li>
					      </ul>
					    </div>
					  </div>
					</nav>

					<Route path="/Hotel" component={Hotel} />
					<Route path="/Restaurant" component={Restaurant} />
					<Route path="/Accounting" component={Accounting} />
				</div>
			</Router>
		);
	}
}