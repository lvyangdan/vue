import React from 'react';
export default class Life extends React.Component{
	//初始化阶段
	constructor(){
		super()
		console.log(1)
		this.state={
			num:0,
			destory:false
		}
	}
	componentWillMount(){
		console.log(2)
	}
	render(){
		console.log(3)
		return(<div>
			{this.state.num}
		<button onClick={()=>this.setState({num:this.state.num+1})}>change</button>
		</div>)
	}
	componentDidMount(){
		console.log(4)
	}
	//更新阶段
	componentWillReceiveProps(nextProps){
		console.log(10,nextProps)
	}
	shouldComponentUpdate(nextProps,nextstate){
		console.log(5,nextProps,nextstate)
		if(nextstate.num>2){
			return false
		}
		return true
	}
	componentWillUpdate(nextProps,nextstate){
		console.log(6,nextProps,nextstate)
	}
	componentDidUpdate(){
		console.log(7)
	}
}