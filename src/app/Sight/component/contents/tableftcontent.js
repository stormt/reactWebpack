import React from 'react';
import ReactDOM from 'react-dom';
import {getpositionactiveflag} from '../../action/indexaction.js';
import Immutable from 'immutable';
export default class TableftContent extends React.Component {
	constructor(props) {
		super(props);
		this.superFilter = this.superFilter.bind(this);
		this.deepCompare = this.deepCompare.bind(this);
		this.state = {
			tableft : [],
			previousClickd:0
		}
	}

	shouldComponentUpdate(nextProps,nextState){

		return this.deepCompare(this, nextProps, nextState);
	}

	deepCompare(instance, nextProps, nextState) {

		return !Immutable.is(instance.props, nextProps) || 
			!Immutable.is(instance.state, nextState);
	}


	superFilter(e){
		var curDom = e.target;
		if(curDom.nodeName == 'SPAN'){
			curDom = curDom.parentNode;
		}
		var index = curDom.dataset.index;
		var activelab = curDom.dataset.type;
		this.props.getpositionleftactiveflag(index);
	}


	render(){

		var activeindex = this.props.activeIndex || 0;
		var tableft = this.props.tableft || [];
		return(
			<div className="filter-tab-head">
					<ul onClick={this.superFilter}>
						{
							 tableft.map((tableftitem,index)=>{
								return(
									 <li key={index} className={activeindex == index ? "actived":""} data-index={index} data-type={tableftitem.type}><span>{tableftitem.value}</span></li>
								)
							})
						}
					</ul>
			</div>
		)
	}
}
