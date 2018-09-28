import React, { Component } from 'react';
import './roby.css'

class Roby extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    handleInputChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmitForm(e){
        e.preventDefault()
        let statement
        if(this.state.email === "admin" && this.state.password === "admin"){
            statement = (<span className="label label-success">Success</span>)
        }else{
            statement = (<span className="label label-danger">Wrong username and password</span>)
        }
        this.setState({
            result : statement
        });
    }

    render() {
        let listItem = this.state.result || ''
        return (
            <div className="row roby-container">
                <div className="col-md-6 col-sm-12 left-block">
                    <img className="roby-logo" src="dist/images/roby.png" alt="" />
                    <div className="login-text">
                        Login to your account
                    </div>
                    <form onSubmit={(e)=>this.handleSubmitForm(e)}>
                        <input className="login-input" type="text" name="email" placeholder="email@email.com" 
                        value={this.state.email || ''}
                        onChange={(e)=>this.handleInputChange(e)}/>
                        
                        <input className="login-input" name="password" type="password" 
                        value={this.state.password || ''}
                        onChange={(e)=>this.handleInputChange(e)}/>
                        
                        <button type="submit" className="login-btn">Login</button>
                        <br/><br/>
                        {listItem}
                    </form>
                    <div className="privacy">
                        <p>©2018 Robert.AI, Inc. All Rights Reserved.</p>
                        <a className="privacy-policy-link">Privacy Policy</a>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 right-block">
                    <img className="comp-pic" src="dist/images/comp.png" alt="" />
                </div>
            </div>
        );
    }
}

export default Roby;
