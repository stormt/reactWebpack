import React from 'react';
import ReactDOM from 'react-dom';
import TabRightContentCommon from './tabrightcommon.js';
import TabRightContentSpecial from './tabrightspecial.js';
import styleSheet  from '../../foods.css';
export default class TabRightContent extends React.Component {
	constructor(props) {
		super(props);

	}
	render(){
		var tabright = this.props.tabright || [];
		return(<TabRightContentCommon rightitem={tabright} />)
	}
}
