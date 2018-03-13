import React from 'react';
import ReactDOM from 'react-dom';
import Filter from './filter.js';
import store from '../../store/foodstore';
import {getIndexDate} from '../../action/indexaction.js';
import FilterPositionTab from './filterpoiTab.js';
import ConnectResList from './connectrelist.js';

export default class RestrauntsComponents extends React.Component{

	constructor(props,context){
		super();
		this.onStateChange = this.onStateChange.bind(this);
	}
	componentWillMount(){
		
		// debugger;
		store.dispatch(getIndexDate());
	}

	componentDidMount(){

		// store.subscribe(this.onStateChange);
	}

	onStateChange(){
		// alert("data change");

	}

	render(){
		return (
			<div>
				<Filter filter={this.props.filter} handlechoseclick={this.props.handlechoseclick}/>
				<ConnectResList/>
				<FilterPositionTab filter={this.props.filter} status={this.props.status} tableft={this.props.tableft} tabright={this.props.tabright} getpositionleftactiveflag={this.props.getpositionleftactiveflag} getpositionrightactiveflag={this.props.getpositionrightactiveflag} getFilterdata={this.props.getFilterdata}/>
			</div>
		)
		
	}
}