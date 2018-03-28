import ResList from './reslist.js';
import {connect} from 'react-redux';
import {getIn,is,fromJS,Map} from 'immutable';
import {getPositionFlag} from '../../action/indexaction.js';
import switchPlainObject from './switchPlainObject.js';
function mapStateToProps(state){

	return {

		restaurants:state.ressourcedata && state.ressourcedata.Restaurants
	}

}
// function mapStateToProps(state){

// 	return state.getIn(['ressourcedata','Restaurants']) || {};

// }

// // function areStatePropsEqual(nextStateProps,stateProps){
// // 	return !!is(fromJS(nextStateProps),fromJS(stateProps));

// // }


function mapDispatchToProps(dispatch){
	

	return {hidefiltermask:(flag)=>dispatch(getPositionFlag(flag))}
	

}
var connectReList = connect(mapStateToProps,mapDispatchToProps,null,{
	withRef:true
})(ResList);
export default connectReList;