import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
export default class TableftContent extends React.Component {
	constructor(props) {
		super(props);
		// console.log("TableftContent constructor ");
		this.superFilter = this.superFilter.bind(this);
		var filter = this.props.FilterResult;
		var tableft = [];
		if(filter.DistanceSort && filter.DistanceSort.length > 0){
				tableft.push({type:"nearby",value:"附近"})
		}
		if(filter.LandmarkSort && filter.LandmarkSort.length > 0){
				tableft.push({type:"landmark",value:"热门地标"});
		}
		if(filter.ZoneSort && filter.ZoneSort.length > 0){
				tableft.push({type:"zonesort",value:"热门商圈"})
		}
		if(filter.RegionSort && filter.RegionSort.length > 0){
				tableft.push({type:"region",value:"行政区"})
		}
		if(filter.MetroSort && filter.MetroSort.length > 0){
				tableft.push({type:"subway",value:"地铁"})
		}
		tableft[0] && (tableft[0].clicked = true)
		// this.setState({
		// 	tableft : tableft,
		// 	previousClickd: 0
		// });
		this.state = {
			tableft : tableft,
			previousClickd:0
		}
	}

	componentWillReceiveProps(nextProps){
		// console.log("componentWillReceiveProps");
		// var filter = nextProps.FilterResult;
		// var tableft = [];
		// if(filter.DistanceSort && filter.DistanceSort.length > 0){
		// 		tableft.push({type:"nearby",value:"附近"})
		// }
		// if(filter.LandmarkSort && filter.LandmarkSort.length > 0){
		// 		tableft.push({type:"landmark",value:"热门地标"});
		// }
		// if(filter.ZoneSort && filter.ZoneSort.length > 0){
		// 		tableft.push({type:"zonesort",value:"热门商圈"})
		// }
		// if(filter.RegionSort && filter.RegionSort.length > 0){
		// 		tableft.push({type:"region",value:"行政区"})
		// }
		// if(filter.MetroSort && filter.MetroSort.length > 0){
		// 		tableft.push({type:"subway",value:"地铁"})
		// }
		// tableft[0] && (tableft[0].clicked = true)
		// this.setState({
		// 	tableft : tableft,
		// 	previousClickd: 0
		// });
	}

	shouldComponentUpdate(nextProps, nextState){
		// console.log("shouldComponentUpdate");
		if(this.state.tableft == nextState.tableft){
			return false;
		}
		return true;
	}

	componentWillUnmount(){
		// console.log("componentWillUnmount");

	}

	superFilter(e){
		var curDom = e.target;
		if(curDom.nodeName == 'SPAN'){
			curDom = curDom.parentNode;
		}
		var index = curDom.dataset.index;
		if(index == this.state.previousClickd){
			return;
		}
		var tableft = Object.assign([],this.state.tableft);
		tableft[index].clicked = true;
		tableft[this.state.previousClickd].clicked = false;
		var self = this;
		this.setState({
				tableft:tableft,
				previousClickd:index
		});
		this.props.updateBodyFilter(index);
	}



	render(){
		// var tableft = [],
		// 		tabright = [];
		// (filter.DistanceSort && filter.DistanceSort.length > 0) ? (tableft.push({type:"nearby",value:"附近"}),filter.DistanceSort.unshift('distance'),tabright.push(filter.DistanceSort)):'';
		// (filter.LandmarkSort && filter.LandmarkSort.length > 0) ? (tableft.push({type:"landmark",value:"热门地标"}),filter.LandmarkSort.unshift('landmark'),tabright.push(filter.LandmarkSort)):'';
		// (filter.ZoneSort && filter.ZoneSort.length > 0) ? (tableft.push({type:"zonesort",value:"热门商圈"}),filter.ZoneSort.unshift('zonesort'),tabright.push(filter.ZoneSort)):'';
		// (filter.RegionSort && filter.RegionSort.length > 0) ? (tableft.push({type:"region",value:"行政区"}),filter.RegionSort.unshift('region'),tabright.push(filter.RegionSort)):'';
		// (filter.MetroSort && filter.MetroSort.length > 0) ? (tableft.push({type:"subway",value:"地铁"}),filter.MetroSort.unshift('subway'),tabright.push(filter.MetroSort)):'';
		// debugger;
		if(!this.state.tableft.length){
			return null;
		}else{
			return(
				<div className="filter-tab-head">
						<ul onClick={this.superFilter}>
							{
								 this.state.tableft.map((tableftitem,index)=>{
									return(
										 <li key={index} className={tableftitem.clicked ? "actived":""} data-index={index}><span>{tableftitem.value}</span></li>
									)
								})
							}
						</ul>
				</div>
			)
		}
	}
}
