import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
export default class TopBanner extends React.Component {
	constructor(props) {
		super(props);
		this.filterClick = this.filterClick.bind(this);
	}

	render(){
		var filter = this.props.FilterResult || {};
		var tabs = [];
		((filter.DistanceSort.length > 0) ||
        (filter.ZoneSort.length > 0) ||
    (filter.LandmarkSort.length > 0) ||
      (filter.RegionSort.length > 0) ||
    	 (filter.MetroSort.length > 0)) ? tabs.push('位置') :'';
			 ((filter.CuisineSort.length > 0) ||
        (filter.FoodSort.length > 0)) ? tabs.push('菜系') :'';

				filter.DefaultSort.length > 0 ? tabs.push(filter.DefaultSort[0].Name) :'';
		return(
			<div className="version_f_filter">
					{
						tabs.map((tab,index)=>{
							return(
									<div className="version_f_item" key={index} onClick={this.filterClick}>
											<span className="my_name">{tab}</span>
											<i></i>
									</div>
							)
						})
				}
			</div>
		)
	}
}
