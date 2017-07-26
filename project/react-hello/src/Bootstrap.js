import React from 'react';
import Bootstrap_nav from "./Bootstrap_nav"
import "bootstrap/dist/css/bootstrap.min.css";
class Bootstrap extends React.Component{
	constructor(){
		super()
		this.state={

		}
	}
	render(){
		return(<div>
			<Bootstrap_nav />
		</div>)
	}
}
export default Bootstrap