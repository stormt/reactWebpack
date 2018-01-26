import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
import store from '../../store/reduxstore.js';
import {getpositionactiveflag} from '../../action/indexaction.js';
export default class TableftContent extends React.Component {
	constructor(props) {
		super(props);
		this.superFilter = this.superFilter.bind(this);
		this.state = {
			tableft : [],
			previousClickd:0
		}
	}



	superFilter(e){
		var curDom = e.target;
		if(curDom.nodeName == 'SPAN'){
			curDom = curDom.parentNode;
		}
		var index = curDom.dataset.index;
		var activelab = curDom.dataset.type;
		store.dispatch(getpositionactiveflag(index,activelab));
	}


	render(){
		var tableft = this.props.tableft || [];
		var activeindex = store.getState().position_active_flag || 0;
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
