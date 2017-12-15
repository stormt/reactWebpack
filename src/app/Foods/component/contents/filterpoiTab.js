import React from 'react';
import ReactDOM from 'react-dom';
import TabLeftContent from './tableftcontent.js';
import TabRightContent from './tabrightcontent.js';
import styleSheet  from '../../foods.css';
export default class FilterPositionTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isactive:false
		}

	}

	componentWillReceiveProps(nextProps){
		var show = nextProps.PoisShow;
			var hasChose = false;
			var innerstate={
				isactive : show
			};
			this.setState(innerstate);
	}
	updateBodyFilter(index){

		// debugger;
		tabright[index].push({
			'display':'block'
		});
		this.setState({
			tabright:tabright
		});
	}

	render(){
		console.log("render");
		var filter = this.props.filterresult || {};
		this.tabright = [];
		(filter.DistanceSort && filter.DistanceSort.length > 0) ? (filter.DistanceSort.unshift('distance'),this.tabright.push(filter.DistanceSort)):'';
		(filter.LandmarkSort && filter.LandmarkSort.length > 0) ? (console.log("avv"),this.tabright.push(filter.LandmarkSort)):'';
		(filter.ZoneSort && filter.ZoneSort.length > 0) ? (filter.ZoneSort.unshift('zonesort'),this.tabright.push(filter.ZoneSort)):'';
		(filter.RegionSort && filter.RegionSort.length > 0) ? (filter.RegionSort.unshift('region'),this.tabright.push(filter.RegionSort)):'';
		(filter.MetroSort && filter.MetroSort.length > 0) ? (filter.MetroSort.unshift('subway'),this.tabright.push(filter.MetroSort)):'';
		debugger;
	
		return(
			<div className={"l-filterbox " + (this.state.isactive ? " current" :"")}>
				<div className="filteritem-group filter-multistage">
						<TabLeftContent FilterResult = {filter}/>
						<TabRightContent tabright={this.tabright}/>
				</div>
			</div>
		)

	}
}
