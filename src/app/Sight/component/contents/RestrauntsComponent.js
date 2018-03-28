import React from 'react';
import ReactDOM from 'react-dom';
import Filter from './filter.js';
import store from '../../store/foodstore';
import {getIndexDate} from '../../action/indexaction.js';
import FilterPositionTab from './filterpoiTab.js';
import Immutable from 'immutable';
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

	shouldComponentUpdate(nextProps, nextState) {
		  const thisProps = this.props || {};
		  const thisState = this.state || {};
		  nextState = nextState || {};
		  nextProps = nextProps || {};
		  if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
		    Object.keys(thisState).length !== Object.keys(nextState).length) {
		    return true;
		  }
		  for (const key in nextProps) {
		    if (!Immutable.is(thisProps[key], nextProps[key])) {
		      return true;
		    }
		  }
		  for (const key in nextState) {
		    if (!Immutable.is(thisState[key], nextState[key])) {
		      return true;
		    }
		  }
		  return false;
		}


	onStateChange(){
		// alert("data change");

	}

	render(){
		console.log(this.props);
		return (
			<div>
				<Filter filter={this.props.filter} handlechoseclick={this.props.handlechoseclick}/>
				<ConnectResList/>
				<FilterPositionTab filter={this.props.filter} status={this.props.status} tableft={this.props.tableft} tabright={this.props.tabright} getpositionleftactiveflag={this.props.getpositionleftactiveflag} getpositionrightactiveflag={this.props.getpositionrightactiveflag} getFilterdata={this.props.getFilterdata} hidefiltermask={this.props.hidefiltermask}/>
			</div>
		)
		
	}
}