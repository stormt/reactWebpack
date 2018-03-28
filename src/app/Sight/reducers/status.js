export default function status(state={},action){
	switch(action.type) {
		case 'GET_POSITION_FLAG':
			return Object.assign({},state,{
				position_flag:action.payload.positionflg
			});
		case 'SET_LEFT_POSITION_ACTIV_FLAG':
			return Object.assign({},state,{
				position_active_flag:action.payload.activeleftpositionflg
			});
		case 'SET_RIGHT_POSITION_ACTIV_FLAG':
			return Object.assign({},state,{
				position_right_active_flag:action.payload.activerightpositionflg
			});
		default:
			return state;
	}	
}
// import {Map} from 'immutable';
// export default function status(state=Map({}),action){
// 	switch(action.type) {
// 		case 'GET_POSITION_FLAG':
// 			return state.set('position_flag',action.payload.positionflg);
// 		case 'SET_LEFT_POSITION_ACTIV_FLAG':
// 			return state.set('position_active_flag',action.payload.activeleftpositionflg);
// 		case 'SET_RIGHT_POSITION_ACTIV_FLAG':
// 			return state.set('position_right_active_flag',action.payload.activerightpositionflg);
// 		default:
// 			return state;
// 	}	
// }