import React from "react";
import { Router, Route, hashHistory } from 'react-router';
export default class App extends React.Component{
	render(){

	}
}
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('app'));