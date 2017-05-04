import React from 'react';
import  { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Contact from './Pages/Contact';
import About from './Pages/About';

const Navigation = () => (
  <Router>
    <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">MyWebsite</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
      
      <Route exact path="/" component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/Profile" component={Profile} />
      <Route path="/Contact" component={Contact} />
      <Route path="/About" component={About} />
    </div>
  </Router>
)

export default Navigation;