import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
     render() {
        return(
            <nav className="header">
                <div className="nav-bar">
                    <Link to="/" className="tab">Home</Link>
                    <div className="tab">About</div>
                    <div className="tab">Contact</div>
                    <div className="tab">Portfolio</div>
                </div>
                
            </nav>
        
        )
     }
}

export default Nav;
