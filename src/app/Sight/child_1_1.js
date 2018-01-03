import React from 'react';
import ReactDOM from 'react-dom';
export default class Child_1_1 extends React.Component{
	constructor(props) {
		super(props);
	}
  render() {
    return <p>{this.props.msg}</p>
  }
}
