import React, { Component } from 'react'
import { Tab } from 'react-bootstrap'
import './tab.css'

class TabContent extends Component {
    constructor(props){
        super(props)
        this.state = {
            key: 1,
            stateList: this.props.country.states
        }

        this.selectAll = this.selectAll.bind(this)
        this.clearAll = this.clearAll.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    selectAll(){
        let newStateList = this.state.stateList
        newStateList.map((item,i) => (
            item.selected = true
        ))
        this.setState({
            stateList : newStateList
        });
    }

    clearAll(){
        let newStateList = this.state.stateList
        newStateList.map((item,i) => (
            item.selected = false
        ))
        this.setState({
            stateList : newStateList
        });
    }

    handleSelect(id){
        let newStateList = this.state.stateList
        newStateList.map((item,i) => (
            item.id === id ? item.selected = !item.selected : null
        ))
        this.setState({
            stateList : newStateList
        });
    }

    render() {
        let listItems = this.state.stateList.map((item,i)=>{
            let className = item.selected ? 'state-box active' : 'state-box'
            return(
                <div className={className} onClick={()=>this.handleSelect(item.id)} key={i}>
                    {item.name}
                </div>
            )
        })
        return (
            <Tab eventKey={this.props.index + 1} title={this.props.country.name}>
                <a onClick={this.selectAll}>Select All</a> | <a onClick={this.clearAll}>Clear All</a>
                <br />
                {listItems}
            </Tab>
        );
    }
}

export default TabContent
