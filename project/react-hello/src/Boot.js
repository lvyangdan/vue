import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import DatePicker from 'antd/lib/date-picker'; 
import Button from "antd/lib/button"
import 'antd/lib/date-picker/style/css';
class Boot extends React.Component{
	render(){
		return(<div>
			<DatePicker />
			<Button type="primary">Primary</Button>
		    <Button>Default</Button>
		    <Button type="dashed">Dashed</Button>
		    <Button type="danger">Danger</Button>
		</div>)
	}
}
export default Boot