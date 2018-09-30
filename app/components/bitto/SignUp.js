import React from 'react'
import { Link } from 'react-router-dom'

import './bitto.css'

class SignUp extends React.Component {
    constructor() {
        super()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this)
        this.handleSubmitForm = this.handleSubmitForm.bind(this)
        this.state = {
            email : '',
            password : '',
            confirmpassword: '',
            checked : false
        }
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
                    Sign Up
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
                    <div className="bitto-form-group">
                        <label className="bitto-input-label" htmlFor="confirmpassword">CONFIRM PASSWORD</label>
                        <div className="inputWithIcon" id="confirmpassword">
                            <input type="password" name="confirmpassword" 
                            value={this.state.confirmpassword || ''}
                            onChange={(e)=>this.handleInputChange(e)}/>
                            <i className="material-icons">lock_outline</i>
                        </div>
                    </div>
                    <div className="tnc-checkbox">
                        <input
                            className="styled-checkbox" id="styled-checkbox" 
                            type="checkbox"
                            name="checked"
                            checked={this.state.checked}
                            onChange={(e) => this.handleChangeCheckbox(e)} />
                        <label htmlFor="styled-checkbox">I agree to Bittoexchange.com <a className="bitto-tos">Terms of Service</a></label>
                    </div>
                    <div className="bitto-terms-wrap">
                        <p className="bitto-terms">
                            We are committed to complying with all U.S regulations that help prevent, detect and 
                            remidiate unlawful behaviour by customers and virtual currency developers when using 
                            the Bitto trading platform or any of the company's other services.
                        </p>
                        <p className="bitto-terms">
                            Bitto is not regulated exchange under U.S. securities laws.
                            More information can be found <a className="bitto-terms-link">here</a>
                        </p>
                    </div>
                    <div className="bitto-button-wrap">
                        <button type="submit" className="bitto-btn">SIGN UP</button>
                    </div>
                    <div className="bitto-signup">Already have an account? <Link to="bitto_login" className="bitto-link">Log In</Link></div>
                </form>
            </div>    
            </div>
        );
    }
}

export default SignUp;
