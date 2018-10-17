import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import moment from 'moment'

class DynamicForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            country: '',
            region: '',
            gender: 'female',
            employed: false,
            dob: moment()
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.selectCountry = this.selectCountry.bind(this)
        this.selectRegion = this.selectRegion.bind(this)
        this.selectGender = this.selectGender.bind(this)
        this.toggleEmployed = this.toggleEmployed.bind(this)

        this.handleSubmitForm = this.handleSubmitForm.bind(this)
    }

    componentWillMount(){

    }

    handleInputChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    
    selectCountry(val){
        this.setState({
            country: val
        })
    }

    selectRegion(val){
        this.setState({
            region : val
        })
    }

    selectGender(e){
        this.setState({
            gender : e.target.value
        })
    }

    toggleEmployed(e){
        this.setState({
            employed : !this.state.employed
        })
    }

    handleSubmitForm(e){
        e.preventDefault()
        alert(JSON.stringify(this.state))
    }

    render() {
        return (
            <div className="col-xs-12">
                <form onSubmit={this.handleSubmitForm}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" name="firstname" id="firstname" className="form-control" placeholder="First Name" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name="lastname" id="lastname" className="form-control" placeholder="Last Name" onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="country">Country</label>
                            <CountryDropdown
                                id="country"
                                className="form-control"
                                value={this.state.country}
                                onChange={this.selectCountry} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="region">Region</label>
                            <RegionDropdown
                                id="region"
                                className="form-control"
                                disableWhenEmpty={true}
                                country={this.state.country}
                                value={this.state.region}
                                onChange={this.selectRegion} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="number">Number</label>
                            <input type="number" name="number" id="number" className="form-control" placeholder="Number" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="dob">Date of Birth</label>
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <i className="fa fa-calendar" />
                                </div>
                                <input type="date" id="dob" className="form-control" name="dob" 
                                value={this.state.dob} onChange={this.handleInputChange} 
                                // data-inputmask="'alias': 'dd/mm/yyyy'" data-mask="" 
                                placeholder="Date of Birth" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-sm-12">
                            <label htmlFor="comment">Comment</label>
                            <textarea
                            value={this.state.comment}
                            name="comment"
                            id="comment"
                            col="6"
                            className="form-control"
                            onChange={this.handleInputChange} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="comment">Gender</label>
                            <div className="form-check form-check-inline">
                                <input type="radio" name="female" 
                                   value='female'
                                   checked={this.state.gender === 'female'} 
                                   onChange={this.selectGender} />
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" name="male" 
                                   value='male' 
                                   checked={this.state.gender === 'male'} 
                                   onChange={this.selectGender} />
                                   <label className="form-check-label" htmlFor="male">Male</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-sm-6">
                            <input type="checkbox" className="form-check-input" id="employed" onChange={this.toggleEmployed} />
                            <label className="form-check-label" htmlFor="employed">Employed</label>
                        </div>
                    </div>
                    
                    
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default DynamicForm;
