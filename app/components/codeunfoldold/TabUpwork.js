import React, { Component } from 'react'
import { Tabs,Tab } from 'react-bootstrap'
import './tab.css'

import jurisdictions from './juridsdictions'
import TabContent from './TabContent';

class TabUpwork extends Component {
    constructor(props){
        super(props)
        this.state = {
            key: 1,
            jurisdictions: jurisdictions,
            jurisdictionsSelected: [],
            jurisdictionsNotSelected: []
        }

        this.handleSelect = this.handleSelect.bind(this)
    }
    
    handleSelect(key) {
        // alert(`selected ${key}`);
        this.setState({ key });
    }

    render() {
        let listItems = this.state.jurisdictions.map((item,i) => (
            <TabContent country={item} index={i} key={i} />
        ))
        return (
            <div className="row tab-container">
                <Tabs
                    activeKey={this.state.key}
                    onSelect={this.handleSelect}
                    id="controlled-tab-example">
                    {listItems}
                </Tabs>
            </div>
        );
    }
}

export default TabUpwork;
