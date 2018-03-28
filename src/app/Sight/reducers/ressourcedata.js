export default function ressourcedata(state={},action){
	switch(action.type) {
		case 'GET_FIRST_DATA':
			return Object.assign({},state,{...action.payload});
		default:
    		return state;
	}


}
// import {Map} from 'immutable';
// export default function ressourcedata(state=Map({}),action){
// 	switch(action.type) {
// 		case 'GET_FIRST_DATA':
// 			return action.payload;
// 		default:
//     		return state;
// 	}


// }