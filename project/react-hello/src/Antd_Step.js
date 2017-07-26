import React from "react";
import { Steps } from 'antd';
const Step = Steps.Step;
class Antd_Step extends React.Component{
	render(){
		return(<div>
			<Steps current={1}>
			    <Step title="Finished" description="This is a description." />
			    <Step title="In Progress" description="This is a description." />
			    <Step title="Waiting" description="This is a description." />
			</Steps>
			<Steps>
		    <Step status="finish" title="Login" icon={<icon type="user" />} />
		    <Step status="finish" title="Verification" icon={<icon type="solution" />} />
		    <Step status="process" title="Pay" icon={<icon type="credit-card" />} />
		    <Step status="wait" title="Done" icon={<icon type="smile-o" />} />
		    </Steps>
		</div>)
	}
}

export default Antd_Step