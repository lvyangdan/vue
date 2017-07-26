import React from 'react';
export default class ChangeStyle extends React.Component{
	constructor(){
		super()

	}
	change(){
		document.querySelector('p').style.color="red";
	}
	render(){
		return(<div>
			<p>kjdhdsh</p>
			<input ref={xx=>this.p=xx} />
			<button onClick={this.change.bind(this)}>改样式</button>
		</div>)
	}
}