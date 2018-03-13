import React from 'react';
import ReactDOM from 'react-dom';
export default class TabRightCommon extends React.Component {
	constructor(props) {
		super(props);
		this.superFilter = this.superFilter.bind(this);
	}

	superFilter(e){
		var curDom = e.target;
		var index = curDom.dataset.index;
		this.props.getpositionrightactiveflag(index);
		this.props.getFilterdata(114);
	}

	render(){
		var activeindex = this.props.activeIndex || 0;
		var rightitem = this.props.rightitem || [];
		var activetabbody = true;
		return(
			<div className={"filter-tab-body" + (activetabbody ? ' current':'') } style={rightitem}>
					<ul onClick={this.superFilter}>
						<li className={activeindex == 0 ? 'actived':''} key='8765' data-index="0">不限</li>
						{
							rightitem.map((item,index)=>(<li className={activeindex == (index+1) ? 'actived':''} data-index={index + 1} key={index}>{item.Name || item.ZoneName}</li>))
						}
					</ul>
			</div>
		)
	}
}
