import React from "react";
import { Affix, Button } from 'antd';

class Demo extends React.Component {
  render() {
    return (
      <div className="scrollable-container" ref={(node) => { this.container = node; }}>
        <div className="background">
          <Affix target={() => this.container}>
            <Button type="primary">
              Fixed at the top of container
            </Button>
          </Affix>
          <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
		    <Button>120px to affix top</Button>
		  </Affix>
        </div>
      </div>);
  }
}

export default Demo