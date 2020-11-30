import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";


export class Nav extends Component {
     render() {
        return(
            <nav className="header">
                <ul id="nav-mobile" className="nav-bar">
                    <il><Link to="/" className="tab">Home</Link></il>
                    <il><Link to="/projects" className="tab">Projects</Link></il>
                    <il><Link to="/contact" className="tab">Contact</Link></il>
                    <il><a target="_blank" className="tab" href="https://cats-and-coding.com">Blog</a></il>
                </ul>
            </nav>
            
        
        )
     }
}

export default Nav;
