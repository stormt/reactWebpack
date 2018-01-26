import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
import store from '../../store/reduxstore.js';
import {rootreducer} from '../../reducer/indexreducer.js';
import {getPositionFlag} from '../../action/indexaction.js';
export default class TopBanner extends React.Component {
	constructor(props) {
		super(props);
		this.filterClick = this.filterClick.bind(this);
		this.handlePositionClick = this.handlePositionClick.bind(this);
		this.handleSortClick = this.handleSortClick.bind(this);
		this.handleCuiClick = this.handleCuiClick.bind(this);
		this.state = {
			chosen:false
		}
	}

	handlePositionClick(){
		var flag = store.getState().position_flag ? false : true;
		store.dispatch(getPositionFlag(flag));
	}

	handleSortClick(){


	}

	handleCuiClick(){


	}

	filterClick(e){

		var whichTab = e.target.innerHTML;
		if(whichTab == '位置'){

			this.handlePositionClick();
				return;
		}
		if(whichTab == '菜系'){
				this.handleCuiClick();
				return;
		}
		if(whichTab == '综合排序'){
				this.handleSortClick();
				return;
		}


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
