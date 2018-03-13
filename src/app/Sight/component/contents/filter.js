import React from 'react';
import ReactDOM from 'react-dom';
export default class TopBanner extends React.Component {
	constructor(props,context){
		super();
		this.state = {};
		this.filterClick = this.filterClick.bind(this);
		this.handlePositionClick = this.handlePositionClick.bind(this);
	}

	filterClick(e){
		var whichTab = e.target.innerHTML;
		if(whichTab == '位置'){
			if(this.state.activeIndex == 0){
				this.handlePositionClick(false);
				this.setState({
					activeIndex	: -1
				});		
			}else{
				this.handlePositionClick(true);
				this.setState({
					activeIndex	: 0
				});	
			}
			
			return;
		}
		if(whichTab == '菜系'){
			if(this.state.activeIndex == 1){
				this.setState({
					activeIndex	: -1
				});		
			}else{
				this.setState({
					activeIndex	: 1
				});	
			}
			
			return;
		}
		if(whichTab == '综合排序'){
			
		}

	}

	handlePositionClick(flag){

		this.props.handlechoseclick(flag);

	}

	render(){
		console.log("filter组建呗刷新！");
		var tabs = [];
		const {filter} = this.props;
		if(!filter){
			return (
				<div>loading</div>
			)
		}else{
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
								<div className={"version_f_item" + (this.state.activeIndex == index ? " actived":'')} key={index} onClick={this.filterClick}>
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
}
