import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
     render() {
        return(
            <nav className="header">
                <ul id="nav-mobile" className="nav-bar">
                    <il><Link to="/" className="tab">Home</Link></il>
                    <il><Link to="/projects" className="tab">Projects</Link></il>
                    <il><Link to="/contact" className="tab">Contact</Link></il>
                </ul>
            </nav>
        
        )
     }
}

export default Nav;
