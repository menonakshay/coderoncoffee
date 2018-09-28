import React from 'react'
import { Tab,TabPanel,TabList,Tabs } from 'react-tabs'
import jurisdictions from './jurisdictions'
import Select from 'react-select'

import './tab.css'
import 'react-tabs/style/react-tabs.css';

class TabProject extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        jurisdictions : jurisdictions
      };
  
      this.handleSelect = this.handleSelect.bind(this);
      this.toggleCountry = this.toggleCountry.bind(this)
    }
  
 

    handleSelect(countryId,stateId){
      const newJurisdiction= this.state.jurisdictions.map(country=>{
        if(country.id===countryId)
          country.states = country.states.map(state=>{
            if(state.id===stateId){
              state.selected=!state.selected
            }else if(stateId===-1){
              state.selected=true
            }else if(stateId===-2){
              state.selected=false
            }
            return state

          })
          return country
      })
      this.setState({
        jurisdictions : newJurisdiction
      })
    }

    toggleCountry(id){

      // const countSelected =this.state.jurisdictions.filter(country=>country.selected).length
      let newJurisdiction = this.state.jurisdictions.map((item,i) => {
        if(item.id === id && item.selected){
          item.states.forEach((state)=>{
             state.selected = false
          })
        }
        // if(countSelected!==1 ||!item.selected)
        item.selected= item.id === id ?  !item.selected : item.selected
        return item
      })
      this.setState({
          jurisdictions : newJurisdiction
      })
    }
  
    render() {
      const unselectedJurisdictions = []
      const tabs = [];
      const tabPanels = [];
      const countSelected =this.state.jurisdictions.filter(country=>country.selected).length

      this.state.jurisdictions.map((country,i) => {

        if(!country.selected){
          unselectedJurisdictions.push({
            'value': country.id,
            'label': country.name
          })
        }

        if(country.selected){
          tabs.push(
            <Tab>
              {country.name}
              {countSelected>1 && <a className="fa fa-times country-close" 
              onClick={()=>this.toggleCountry(country.id)} 
              style={{color:'black'}}></a>
              }
              
            
            </Tab>
          );
    
          tabPanels.push(
            <TabPanel>
              <a onClick={()=>this.handleSelect(country.id,-1)}>Select All</a> | <a onClick={()=>this.handleSelect(country.id,-2)}>Clear All</a>
              <div className="states-panel">
              {country.states.map((item,i)=>{
                let className = item.selected ? 'state-box active' : 'state-box'
                return(
                    <div className={className} onClick={()=>this.handleSelect(country.id,item.id)} key={i}>
                        {item.name}
                    </div>
                )
              })}
              </div>
            </TabPanel>
          )
        }
        
      });

      return (
        <div className="tab-container">
          <Select className="jurisdiction-selector" placeholder="Add a jurisdiction" onChange={(e)=>this.toggleCountry(e.value)} options={unselectedJurisdictions} />
          <Tabs>
            <TabList>{tabs}</TabList>
            {tabPanels}
          </Tabs>
        </div>
      );
    }
  }
  
export default TabProject