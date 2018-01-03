import AppDispatcher from '../dispatcher/dispatcher.js';
import CModel from '../../common/abstractModel.js';
var DetailAction = {
	getRestfulDate : function(){
		var datamodel = CModel.getInstance();
		var PromiseData1 = new Promise(function(resolve,reject){
			datamodel.url = "/soa2/10332/GetRestaurantInfoV705Extend";
			datamodel.method = "POST";
			datamodel.setParam({
				"RestaurantId":"410789",
				"ImageQuality":1,
				"CurrentDestId":"2",
				"Lon":0,
				"Lat":0,
				"Version":"7.03",
				"Platform":2
			});
			datamodel.execute(function(res){
					resolve(JSON.parse(res));
			});
		});

		var PromiseData2 = new Promise((resolve,reject)=>{
			datamodel.url = "/soa2/10332/GetRestaurantInfoV705?_fxpcqlniredt=09031163410092652660";
			datamodel.method = "POST";
			datamodel.setParam({
				"RestaurantId":"410789",
				"DistrictId":2,
				"ImageQuality":1,
				"CurrentDestId":"2",
				"Lon":0,
				"Lat":0,
				"Version":"7.04",
				"Platform":2
			});
			datamodel.execute(function(res){
					resolve(JSON.parse(res));
			});
		});
		Promise.all([PromiseData1,PromiseData2]).then((resArr)=>{
				let rest = Object.assign({},resArr[0],resArr[1]);
				AppDispatcher.dispatch({
					type:"first_screen_data",
					payload:rest
				});
		});
	},
	resetOpacity:function(scrollTop){
		AppDispatcher.dispatch({
			type:"reset_header_opacity",
			payload:scrollTop
		});
	}


}
export default DetailAction;
