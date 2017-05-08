import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { browserHistory } from 'react-router'; 

// import Home from './HotelPages/Home';
import Guestrequest from './HotelPages/Guestrequest';
import Rooms from './HotelPages/Rooms';
import Reservation from './HotelPages/Reservation';

export default class Hotel extends Component {
	render() {
		return(
			<Router>
				<div>
					<div id="wrapper" className="toggled">
	        			<div id="sidebar-wrapper">
				            <ul className="sidebar-nav">
				            	<li className="sidebar-brand"><a href="#">Hotel Dashboard</a></li>
				                <li><Link to="/Hotel/Guestrequest"><i className="fa fa-users" aria-hidden="true"></i>Guest Request</Link></li>
				                <li><Link to="/Hotel/Rooms"><i className="fa fa-bed" aria-hidden="true"></i>Rooms</Link></li>
				                <li><Link to="/Hotel/Reservation"><i className="fa fa-book" aria-hidden="true"></i>Reservation</Link></li>
				            </ul>
	        			</div>
				        <div id="page-content-wrapper">
				            <div className="container-fluid">
				                <div className="row">
				                    <div className="col-lg-12">
				                        <Route path="/Hotel/Guestrequest" component={Guestrequest} />
				                        <Route path="/Hotel/Rooms" component={Rooms} />
				                        <Route path="/Hotel/Reservation" component={Reservation} />
				                    </div>
				                </div>
				            </div>
				        </div>
	    			</div>
				</div>
			</Router>
		); 
	}
}