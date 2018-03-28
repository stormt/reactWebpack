import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import LoadingComponent from "./Loading.js";
export default class TopBanner extends React.Component {
	constructor(props,context){
		super();
		this.state = {};
		this.filterClick = this.filterClick.bind(this);
		this.handlePositionClick = this.handlePositionClick.bind(this);
		this.deepCompare = this.deepCompare.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState) {
		  const thisProps = this.props || {};
		  const thisState = this.state || {};
		  nextState = nextState || {};
		  nextProps = nextProps || {};
		  if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
		    Object.keys(thisState).length !== Object.keys(nextState).length) {
		    return true;
		  }
		  for (const key in nextProps) {
		    if (!Immutable.is(thisProps[key], nextProps[key])) {
		      return true;
		    }
		  }
		  for (const key in nextState) {
		    if (!Immutable.is(thisState[key], nextState[key])) {
		      return true;
		    }
		  }
		  return false;
		}

	deepCompare(instance, nextProps, nextState) {

		return !Immutable.is(instance.props, nextProps) || 
			!Immutable.is(instance.state, nextState);
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

	componentWillUnmount(){

		console.log("TopBanner   componentWillUnmount");
	}

	componentWillMount(){
		console.log("TopBanner   componentWillMount");

	}
	componentWillReceiveProps(){

		console.log("");
	}

	render(){
		var tabs = [];
		const {filter} = this.props;
		if(!filter){
			return (
				<LoadingComponent />
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
