import { Link } from '../../node_modules/react-router-dom';
import React, { Component } from '../../node_modules/react';

class Navbar extends Component 
{
    render() { 
        return (<div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4" >
                    <div className="" id="navbarText">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/search">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/bookmarks">Bookmarks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                </div>);
    }
}
 
export default Navbar;
