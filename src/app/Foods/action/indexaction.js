import CModel from '../../common/abstractModel.js';
export function getIndexDate(){
	var datamodel = CModel.getInstance();
	var PromiseData1 = new Promise(function(resolve,reject){
	  datamodel.url = "/soa2/10332/json/GetHomePageRestaruantListV706";
	  datamodel.method = "POST";
	  datamodel.setParam({"ViewDestId":"2",
				  "Lon":0,
				  "Lat":0,
				  "CurrentDestId":0,
				  "PageIndex":1,
				  "PageSize":10,
				  "DistanceFilter":0,
				  "PriceFilter":[],
				  "CuisineFilter":[],
				  "SceneFilter":[],
				  "SellFilter":[],
				  "FoodFilter":"",
				  "ZoneId":0,
				  "RegionId":0,
				  "MetroId":0,
				  "PositionLat":0,
				  "PositionLon":0,
				  "MeiShiLinType":0,
				  "Platform":2,
				  "OrderType":0,
				  "IsOnlyList":false,
				  "IsMeiShiLin":true,
				  "head":{"cid":"09031014211785765051","ctok":"","cver":"1.0","lang":"01","sid":"8888","syscode":"09","auth":null,"extension":[{"name":"protocal","value":"http"}]},
				  "contentType":"json"
			  });

	  datamodel.execute(function(res){
		  resolve(JSON.parse(res));
	  });
	});

	var PromiseData2 = new Promise((resolve,reject)=>{
	  datamodel.url = "/soa2/10332/json/GetHomePageViewModelV706";
	  datamodel.method = "POST";
	  datamodel.setParam({
				  "ViewDestId":"2",
				  "CurrentDestId":0,
				  "head":{"cid":"09031014211785765051","ctok":"","cver":"1.0","lang":"01","sid":"8888","syscode":"09","auth":null,"extension":[{"name":"protocal","value":"http"}]},
				  "contentType":"json"
			  });
	  datamodel.execute(function(res){
		  resolve(JSON.parse(res));
	  });
	});

		return Promise.all([PromiseData1,PromiseData2]).then((resArr)=>{
		  return {
			  type:'GET_FIRST_DATA',
			  payload:Object.assign({},resArr[0],resArr[1])
		  }
		});
}
export function getPositionFlag(flag){
	return {
		type:'GET_POSITION_FLAG',
		payload:{
			positionflg:flag
		}
	}

}
export function getpositionactiveflag(activeindex,type){
	return {
		type:'SET_POSITION_ACTIV_FLAG',
		payload:{
			activepositionflg:activeindex,
			activepositiontype:type
		}
	}
}
