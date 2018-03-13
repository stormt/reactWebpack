import React from 'react';
import ReactDOM from 'react-dom';
import TabRightContentCommon from './tabrightcommon.js';
import TabRightContentSpecial from './tabrightspecial.js';
export default class TabRightContent extends React.Component {
	constructor(props) {
		super(props);

	}
	render(){
		// console.log(this.props);
		var tabright = this.props.tabright || [];
		return(<TabRightContentCommon rightitem={tabright} activeIndex={this.props.activeIndex} getpositionrightactiveflag={this.props.getpositionrightactiveflag} getFilterdata={this.props.getFilterdata}/>)
	}
}
