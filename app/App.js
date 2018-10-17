import React from "react"
import {
  // BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  // Redirect,
  // withRouter
} from "react-router-dom"
import Home from './components/Home'
import Roby from './components/roby/Roby'
// import TabProject from './components/codeunfold/TabProject'
// import Upload from './components/upload/Upload'
import Login from './components/bitto/Login'
import SignUp from './components/bitto/SignUp'
import DynamicForm from './components/dynamicform/DynamicForm'

class App extends React.Component {
    
  render(){
      return (
          <Switch>
                  <Route path="/" exact render={routeProps => <Home {...routeProps} {...this.props} />} />
                  <Route path ="/roby_login" render={routeProps => <Roby {...routeProps} {...this.props} />} />
                  {/* <Route path="/codeunfold" render={routeProps => <TabProject {...routeProps} {...this.props} />} /> */}
                  {/* <Route path="/upload" render={routeProps => <Upload {...routeProps} {...this.props} />} /> */}
                  <Route path="/bitto_login" render={routeProps => <Login {...routeProps} {...this.props} />} />
                  <Route path="/bitto_signup" render={routeProps => <SignUp {...routeProps} {...this.props} />} />
                  <Route path="/dynamic_form" render={routeProps => <DynamicForm {...routeProps} {...this.props} />} />
              
          </Switch>
      )
  }
}

// const mapDispatchToProps = dispatch => ({
  
// });

// const mapStateToProps = state => ({
//     login: state.login,
//     profile: state.profile
// });

export default App