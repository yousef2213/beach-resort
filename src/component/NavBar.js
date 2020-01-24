import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
export default class NavBar extends Component {
    state = {
        open : false
    }
    handelToggle = () => {
        this.setState({open :!this.state.open})
    }

    render() {
        return (
            <div className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="rooms" />
                        </Link>
                        <button className="nav-btn" type="button" onClick={this.handelToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.open?"nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
