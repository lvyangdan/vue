import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
class Bootstrap_nav extends React.Component{
	constructor(){
		super()
		this.state={

		}
	}
	render(){
		return(<div>
			<ul className="nav nav-tabs">
			  <li className="active">
			    <a href="#">Home</a>
			  </li>
			  <li><a href="#">...</a></li>
			  <li><a href="#">...</a></li>
			</ul>
			<ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
			  <li><a tabindex="-1" href="#">Action</a></li>
			  <li><a tabindex="-1" href="#">Another action</a></li>
			  <li><a tabindex="-1" href="#">Something else here</a></li>
			  <li className="divider"></li>
			  <li><a tabindex="-1" href="#">Separated link</a></li>
			</ul>
			<div className="dropdown">Name
			  <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
			    <li><a tabindex="1" href="#">Action</a></li>
			    <li><a tabindex="-1" href="#">Another action</a></li>
			    <li><a tabindex="-1" href="#">Something else here</a></li>
			    <li className="divider"></li>
			    <li><a tabindex="-1" href="#">Separated link</a></li>
			  </ul>
			</div>
		</div>)
	}
}
export default Bootstrap_nav