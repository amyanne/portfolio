import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
     render() {
        return(
            <nav className="header">
                <div className="nav-bar">
                    <Link to="/" className="tab">Home</Link>
                    <Link to="/about" className="tab">About</Link>
                    <Link to="/portfolio" className="tab">Portfolio</Link>
                    <Link to="/contact" className="tab">Contact</Link>
                </div>
                
            </nav>
        
        )
     }
}

export default Nav;
