import React from 'react';
export default class EReact extends React.Component{
	constructor(){
		alert("constructor")
		super()
		this.state={
			state:true,
			opacity:0,
			fontSize:"12px"
		}
	}
	getInitialState(){
		alert("init");
		return{
			opacity:1.0,
			fontSize:"12px"
		}
	}
	handle(){
		this.setState({
			state:!this.state.state
		})
	}
	render(){
		return(<div style={{opacity:this.state.opacity,color:"pink",fontSize:this.state.fontSize,textAlign:"center"}}>
			<p>hello {this.props.title}!</p>
			<button onClick={this.handle.bind(this)}>show|hidden</button>{this.state.state?<span>will skill</span>:''}
		</div>)
	}
	componentWillMount(){ 
		alert("will")
	}
	componentDidMount(){
		alert("did")
		var self=this
		setTimeout(function(){
		self.setState({
			opacity:1,
			fontSize:"50px"
		})
	},1000)
	}
}