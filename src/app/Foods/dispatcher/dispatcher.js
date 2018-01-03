import flux from 'flux';
import DetailStore from '../store/detailstore.js';
var Dispatcher = flux.Dispatcher;
var AppDispatcher = new Dispatcher();
AppDispatcher.register(function(action){
	switch(action.type){
		case 'first_screen_data':
			DetailStore.setRestfulData(action.payload);
			DetailStore.emitChange();
			break;
		case 'reset_header_opacity':
			DetailStore.resetOpacity(action.payload);
			DetailStore.emitChange();
			break;
		default:break;
	}


})
export default AppDispatcher;
