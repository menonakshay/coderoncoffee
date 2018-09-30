import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    constructor() {
        super()
    }
  
    render() {
        return (
            <div className="row">
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/bitto_login" className="signup-link">Bitto Login</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/bitto_signup" className="signup-link">Bitto Sign Up</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/roby_login" className="signup-link">Roby Login</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;
