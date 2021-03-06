import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
export default class TabRightCommon extends React.Component {
	constructor(props) {
		super(props);

	}
	render(){
		var rightitem = this.props.rightitem || [];
		console.log(rightitem);
		var activetabbody = true;
		return(
			<div className={"filter-tab-body" + (activetabbody ? ' current':'') } style={rightitem}>
					<ul>
						<li className="actived" key='8765'>不限</li>
						{
							rightitem.map((item,index)=>(<li key={index}>{item.Name || item.ZoneName}</li>))
						}
					</ul>
			</div>
		)
	}
}
