import ResList from './reslist.js';
import {connect} from 'react-redux';
import {getPositionFlag} from '../../action/indexaction.js';
function mapStateToProps(state){

	return {

		restaurants:state.ressourcedata && state.ressourcedata.Restaurants
	}

}

function mapDispatchToProps(dispatch){
	return{

		hidefiltermask:(flag)=>dispatch(getPositionFlag(flag))
	}

}
var connectReList = connect(mapStateToProps,mapDispatchToProps)(ResList);
export default connectReList;