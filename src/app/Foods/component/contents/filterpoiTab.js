import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
export default class FilterPositionTab extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		var filter = this.props.filterresult || {};
		var tableft = [],
				tabright = [];
		(filter.DistanceSort && filter.DistanceSort.length > 0) ? (tableft.push("附近"),filter.DistanceSort.unshift('distance'),tabright.push(filter.DistanceSort)):'';
		(filter.LandmarkSort && filter.LandmarkSort.length > 0) ? (tableft.push("热门地标"),filter.LandmarkSort.unshift('landmark'),tabright.push(filter.LandmarkSort)):'';
		(filter.ZoneSort && filter.ZoneSort.length > 0) ? (tableft.push("热门商圈"),filter.ZoneSort.unshift('zonesort'),tabright.push(filter.ZoneSort)):'';
		(filter.RegionSort && filter.RegionSort.length > 0) ? (tableft.push("行政区"),filter.RegionSort.unshift('region'),tabright.push(filter.RegionSort)):'';
		(filter.MetroSort && filter.MetroSort.length > 0) ? (tableft.push("地铁"),filter.MetroSort.unshift('subway'),tabright.push(filter.MetroSort)):'';

		return(
			<div className="l-filterbox">
				<div className="filteritem-group filter-multistage">
						<div className="filter-tab-head">
								<ul>
									{
										tableft.map((tableftitem,index)=>{
											return(
												 <li key={index} className={index==0 ? 'actived':''}><span>{tableftitem}</span></li>
											)
										})
									}
								</ul>
						</div>
						{
							tabright.map((rightitem,index)=>{
								var tag =rightitem.shift();
								if(index < tabright.length - 1 && tag !== 'subway'){
									return (
										<div className="filter-tab-body" key={index} style={index == 0 ? ({'display':'block'}):({'display':'none'})}>
												<ul>
														<li className="actived" key='8765'>不限</li>
														{
															rightitem.map((item,index)=>(<li key={tag == 'zonesort' ? item.ZoneId : item.Id}>{tag == 'zonesort' ? item.ZoneName : item.Name}</li>))
														}
												</ul>
										</div>
									)
								}else{
									if(tag == 'subway'){
										return (
											<div className="multistage_inner" key={index} style={index == 0 ? {'display':'flex'} :{'display':'none'}}>
												 <div className="filter-tab-head">
														 <ul>
																{
																	rightitem.map((item,index)=>{
																		return (
																			<li key={item.Id} className={index==0 ? 'actived':''}>
																				 <span>{item.Name}</span>
																		 </li>
																		)
																	})
																}
														 </ul>
												 </div>
												 {
													 rightitem.map((item,index)=>{
														 return(
															 <div className={"filter-tab-body" + (index == 0 ?(" actived"):'')} key={index} style={index == 0 ? ({'display':'block'}):({'display':'none'})}>
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
													 })
												 }
											</div>
										)
									}
								}
							})
						}
				</div>
			</div>
		)
	}
}
