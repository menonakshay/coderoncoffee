import React from 'react'
import { Link } from 'react-router-dom'

import './bitto.css'

class Login extends React.Component {
    constructor() {
        super()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this)
        this.handleSubmitForm = this.handleSubmitForm.bind(this)
        this.state = {
            email : '',
            password : '',
            checked : false
        }
    }

    componentDidMount(){

    }

    handleInputChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleChangeCheckbox(event){
        this.setState({
            [event.target.name] : event.target.checked
        });
    }

    handleSubmitForm(e){
        e.preventDefault()
        alert(JSON.stringify(this.state))
    }
  
    render() {
        return (
            <div className="bitto-container">
                <div className="bitto-wrapper">
                    <div className="bitto-logo">
                        <img src="dist/images/bitto.png" alt="" />
                    </div>
                    <div className="bitto-motto">
                        Start Trading Today!
                    </div>
                    <div className="bitto-login-header">
                        Log In
                    </div>
                    <form className="bitto-form" onSubmit={(e)=>this.handleSubmitForm(e)}>
                        <div className="bitto-form-group">
                            <label className="bitto-input-label" htmlFor="email">E-MAIL</label>
                            <div className="inputWithIcon" id="email">
                                <input type="text" name="email"
                                value={this.state.email || ''}
                                onChange={(e)=>this.handleInputChange(e)}/>
                                <i className="material-icons">email</i>
                            </div>
                        </div>
                        <div className="bitto-form-group">
                            <label className="bitto-input-label" htmlFor="password">PASSWORD</label>
                            <div className="inputWithIcon" id="password">
                                <input type="password" name="password" 
                                value={this.state.password || ''}
                                onChange={(e)=>this.handleInputChange(e)}/>
                                <i className="material-icons">lock_outline</i>
                            </div>
                        </div>
                        {/* <div className="form-group">
                            <label className="bitto-input-label" htmlFor="email2">E-MAIL</label>
                            <div class="inputWithIcon" id="email2">
                                <input type="text" name="email" placeholder="email@email.com" 
                                value={this.state.email || ''}
                                onChange={(e)=>this.handleInputChange(e)}/>
                                <i class="fa fa-envelope fa-lg fa-fw"></i>
                            </div>
                        </div>*/}
                        <div className="bitto-option-wrap">
                            <div className="remember-me-checkbox">
                                <input
                                    className="styled-checkbox" id="styled-checkbox" 
                                    type="checkbox"
                                    name="checked"
                                    checked={this.state.checked}
                                    onChange={(e) => this.handleChangeCheckbox(e)} />
                                <label htmlFor="styled-checkbox">Remember Me</label>
                            </div>
                            <div className="bitto-forgot-password">
                                <a>Forgot Password?</a>
                            </div>
                        </div>
                        <div className="bitto-button-wrap">
                            <button type="submit" className="bitto-btn">LOG IN</button>
                        </div>
                        <div className="bitto-signup">Dont have an account? <Link to="/bitto_signup" className="bitto-link">Sign Up</Link></div>
                    </form>
                </div>    
            </div>
        );
    }
}

export default Login;
