import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
export default class CuiTab extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		var filter = {};
				filter.FoodSort = this.props.FoodSort || [];
				filter.CuisineSort = this.props.CuisineSort || [];
			return(
				<div className="l-filterbox">
						<div className="filteritem-group facilities-group filter-multistage">
								<div className="filter-tab-head">
										<ul>
											{
												filter.FoodSort.length > 0 ? (<li className="food_filter_1 actived"><span>特色菜</span></li>):''
											}
											{
												filter.CuisineSort.length > 0 ? (<li className={"cuisine_filter_1" + (filter.FoodSort.length == 0 ? " actived":"")}><span>菜系</span></li>):''
											}
										</ul>
								</div>
								{
									filter.FoodSort.length>0 ? (
										<div className="filter-tab-body current">
												<ul>
														<li className="selete_all actived" key="0">不限</li>
														{
															filter.FoodSort.map((sortitem,index)=>{
																	return (<li className="second_item" key={index + 1}>{sortitem}</li>)
															})
														}
												</ul>
										</div>
									):''
								}
								{
									filter.CuisineSort.length>0 ? (
										<div className="multistage_inner caixi_last" style={filter.FoodSort.length == 0 ? {"display":"block" }: {"display":"none"}}>
												<div className="filter-tab-head">
														<ul>
																{
																	filter.CuisineSort.map((cui,index)=>{
																		return(<li key={cui.Id}><span>{cui.Name}</span></li>)
																	})
																}
														</ul>
												</div>
												{
														filter.CuisineSort.map((item,index)=>{
															return(
																<div className="filter-tab-body facilities" key={item.Id} style={index == 0 ? {"display":"block"}:{}}>
																		<ul>
																				{
																					item.Children.map((subItem,index)=>{
																							return (<li key={subItem.Id}>{subItem.Name}</li>)
																					})
																				}
																		</ul>
																</div>
															)
														})
												}
										</div>
									):""
								}

						</div>
						<div className="filter_btn">
								<p>重置</p>
								<p>确定</p>
						</div>
				</div>
			)
	}
}
