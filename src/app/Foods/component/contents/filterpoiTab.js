import React from 'react';
import ReactDOM from 'react-dom';
import TabLeftContent from './tableftcontent.js';
import TabRightContent from './tabrightcontent.js';
import styleSheet  from '../../foods.css';
import store from '../../store/reduxstore.js';
export default class FilterPositionTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isactive:false
		}

	}
	componentDidMount(){
		var self = this;
		store.subscribe(function(){
			console.log("subscribe cb");
			var activedtabtype = store.getState().position_active_type;
			if(activedtabtype == 'LandmarkSort'){
				self.tabright = store.getState().result.Filter.LandmarkSort;
			}else if(activedtabtype == 'ZoneSort'){
				self.tabright = store.getState().result.Filter.ZoneSort;
			}else if(activedtabtype == 'RegionSort'){
				self.tabright = store.getState().result.Filter.RegionSort;
			}
			console.log(self.tabright);
			self.setState({
				isactive:store.getState().position_flag
			});
		})

	}

	shouldComponentUpdate(nextProps,nextState){

		return true;
	}
	componentWillReceiveProps(nextProps){
		console.log("componentWillReceiveProps lifecycle");
		var filter = store.getState().result.Filter || {};
		if(this.tableft && this.tableft.length > 0){
			
		}else{
			this.tableft = [];
			if(filter.DistanceSort && filter.DistanceSort.length > 0){
					this.tableft.push({type:"DistanceSort",value:"附近"});

			}
			if(filter.LandmarkSort && filter.LandmarkSort.length > 0){
					this.tableft.push({type:"LandmarkSort",value:"热门地标"});
					// tabright.push();
			}
			if(filter.ZoneSort && filter.ZoneSort.length > 0){
					this.tableft.push({type:"ZoneSort",value:"热门商圈"})
			}
			if(filter.RegionSort && filter.RegionSort.length > 0){
					this.tableft.push({type:"RegionSort",value:"行政区"})
			}
			if(filter.MetroSort && filter.MetroSort.length > 0){
					this.tableft.push({type:"MetroSort",value:"地铁"})
			}
			this.tabright = filter.LandmarkSort;
		}

	}


	render(){
		return(
			<div className={"l-filterbox " + (this.state.isactive ? " current" :"")}>
				<div className="filteritem-group filter-multistage">
						<TabLeftContent tableft={this.tableft} />
					    <TabRightContent tabright={this.tabright}/>
				</div>

			</div>
		)

	}
}
