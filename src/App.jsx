import React, { Component } from 'react'
import home from './components/home';
import { Route, Switch, Redirect } from "react-router-dom";
import Report from "./components/report";
import viewReport from "./components/viewReports";
import Login from "./components/auth/login";
import SignUp from "./components/auth/signup";



export class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/Login" component= {Login} />
        <Route path="/Sign" component= {SignUp} />
        <Route path="/Reports" component={Report} />
        <Route path='/viewReports'  component = {viewReport} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
    )
  }
}

export default App;


