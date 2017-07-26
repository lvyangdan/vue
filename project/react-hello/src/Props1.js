import React from 'react'
import PropTypes from 'prop-types';

class Card extends React.Component{
	render(){
		let styles = {
			root: {
				width: '500px',
				border: '1px solid #ccc',
				borderRadius: '5px'
			}
		}
		return(
			<div style={Object.assign({}, styles.root, this.props.style,{width:"100%"})}>
				<div  style={{overflow: 'hidden', padding: '10px', borderBottom: '1px solid #ccc'}}>
					<h3 style={{float: 'left', margin: '0'}}>{this.props.title}</h3>
					<div style={{float: 'right', fontSize: '16px'}}>{this.props.extra}</div>
				</div>
				<div style={{padding: '10px'}}>
					{this.props.children}
				</div>
			</div>
		)
	}
}
Card.defaultProps = {
	title: 'default title',
	extra: <a href="http://www.baidu.com"style={{textDecoration:"none"}}>百度</a>,
	children: <p>请传入 chilren 属性</p>
}
Card.propTypes = {
	title: PropTypes.string,
 	extra: PropTypes.node,
  children: PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
  style: PropTypes.object
};
export default Card 