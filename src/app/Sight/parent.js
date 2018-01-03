import React from 'react';
import ReactDOM from 'react-dom';
import Child_1 from './child_1.js';
import Child_2 from './child_2.js';

export default class Parent extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			msg: 'start'
		};
	}


  transferMsg(msg) {
    this.setState({
      msg
    });
  }

  componentDidUpdate() {
    console.log('Parent update');
  }

  render() {
    return (
      <div>
        <Child_1 transferMsg = {msg => this.transferMsg(msg)} />
        <Child_2 msg = {this.state.msg} />
      </div>
    );
  }
}
