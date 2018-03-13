import {connect} from 'react-redux';
import {getIndexDate,getPositionFlag,getpositionleftactiveflag,getpositionrightactiveflag} from '../../action/indexaction.js';
// import {getIndexDate} from '../../action/indexaction.js';
import RestrauntsComponents from './RestrauntsComponent.js';
function mapStateToProps(state){
	var tableft = [],
		tabrighttype,
		tabright = [],
		activeIndex = state.status && state.status.position_active_flag,
		filter = state.ressourcedata && state.ressourcedata.Filter;

		if(filter){
			if(filter.DistanceSort && filter.DistanceSort.length > 0){
				tableft.push({type:"DistanceSort",value:"附近"});

			}
			if(filter.LandmarkSort && filter.LandmarkSort.length > 0){
				tableft.push({type:"LandmarkSort",value:"热门地标"});
			}
			if(filter.ZoneSort && filter.ZoneSort.length > 0){
				tableft.push({type:"ZoneSort",value:"热门商圈"})
			}
			if(filter.RegionSort && filter.RegionSort.length > 0){
				tableft.push({type:"RegionSort",value:"行政区"})
			}
			if(filter.MetroSort && filter.MetroSort.length > 0){
				tableft.push({type:"MetroSort",value:"地铁"})
			}
			tabrighttype = (tableft[activeIndex] && tableft[activeIndex]['type']) || 'LandmarkSort';
			tabright = filter[tabrighttype];
		}
			
			
	return {
		ressourcedata:state.ressourcedata,
		filter:filter,
		status:state.status,
		tableft:tableft,
		tabright:tabright
	}

}

function mapDispatchToProps(dispatch){
	return {
		handlechoseclick:(flag)=>dispatch(getPositionFlag(flag)),
		getpositionleftactiveflag:(index,activelab)=>dispatch(getpositionleftactiveflag(index)),
		getpositionrightactiveflag:(index)=>dispatch(getpositionrightactiveflag(index)),
		getFilterdata:(RegionId)=>dispatch(getIndexDate(RegionId))

	}

}
// debugger;
var Container = connect(mapStateToProps,mapDispatchToProps)(RestrauntsComponents);
export default Container;