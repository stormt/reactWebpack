import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
export default class FilterTabBody extends React.Component {
	constructor(props) {
		super(props);
		this.updatesubFilter = this.updatesubFilter.bind(this);
	}

	updatesubFilter(){
		
	}

	render(){
		var item = this.props.item || [];
		return(
			<div className={"filter-tab-body" + (this.props.index == 0 ?(" actived"):'')} style={item.isshow ? ({'display':'block'}):({'display':'none'})}>
					<ul>
							<li className="actived" key="45780">不限</li>
							{
								item.Stations.map((subitem,index)=>{
									return (
										<li className="second_item" key={subitem.Id}>
												 {subitem.Name}
												 {subitem.EName ? (<p className="ename">{subitem.EName}</p>):''}
										</li>
									)
								})
							}
					</ul>
			</div>
		)
	}
}
