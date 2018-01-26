var initialState = {
	result:{},
	bottomHeaderOpacity:1,
	upperHeaderOpacity:0,
	PoisShow:false
};
export function rootreducer(state = initialState,action){

	switch(action.type){
		case 'GET_FIRST_DATA':
		return Object.assign({},state,{
			result:action.payload
		});
		case 'GET_POSITION_FLAG':
		return Object.assign({},state,{
			position_flag:action.payload.positionflg
		});
		case 'SET_POSITION_ACTIV_FLAG':
		return Object.assign({},state,{
			position_active_flag:action.payload.activepositionflg,
			position_active_type:action.payload.activepositiontype
		});
		default:
		return state;
	}


}
