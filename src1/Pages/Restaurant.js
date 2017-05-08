import React, { Component } from 'react';

export default class Restaurant extends Component {
	render() {
		return(
			<div>
				<div id="wrapper" className="toggled">
        			<div id="sidebar-wrapper">
			            <ul className="sidebar-nav">
			                <li className="sidebar-brand"><a href="#">Restaurant Dashboard</a></li>
			                <li><a href="#"><i className="fa fa-users" aria-hidden="true"></i>Guest Request</a></li>
			                <li><a href="#"><i className="fa fa-bed" aria-hidden="true"></i>Rooms</a></li>
			                <li><a href="#"><i className="fa fa-book" aria-hidden="true"></i>Reservation</a></li>
			            </ul>
        			</div>
			        <div id="page-content-wrapper">
			            <div className="container-fluid">
			                <div className="row">
			                    <div className="col-lg-12">
			                        <h1>Restaurant</h1>
			                    </div>
			                </div>
			            </div>
			        </div>
    			</div>
			</div>
		); 
	}
}