import React from "react";
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;
class Time extends React.Component{
onChange(date, dateString) {
  console.log(date, dateString);
}
render(){
	return(<div>
		<DatePicker onChange={this.onChange.bind(this)} />
	    <br />
	    <MonthPicker onChange={this.onChange.bind(this)} placeholder="Select month" allowClear="true" disabled/>
	    <br />
	    <RangePicker onChange={this.onChange.bind(this)} />
		</div>)
}
}
export default Time 