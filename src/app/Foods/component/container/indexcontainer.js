import React from 'react';
import ReactDOM from 'react-dom';
import stylesheet from '../../foods.css';
import fontsheet from '../../../../publicResource/css/commoniconfont.css';
import CModel from '../../../common/abstractModel.js';
import IndexContents from '../contents/indexcontents.js';
import FilterPositionTab from '../contents/filterpoiTab.js';
import FilterSortByTab from '../contents/nearwise.js';
import FilterCuiTab from '../contents/cuitab.js';
export default class IndexContainer extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
					result:{},
	        bottomHeaderOpacity:1,
	        upperHeaderOpacity:0
	    }
	}

	componentWillMount(){
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
      Promise.all([PromiseData1,PromiseData2]).then((resArr)=>{
        this.setState((prevState)=>{
          let result = Object.assign({},prevState.rest,resArr[0],resArr[1]);
          let state = {};
          state.result = result;
          return state;
        });
      });
  }

	render(){
			return(
				<div>
						<div className="l-sightheadouter">
								<IndexContents Result={this.state.result}/>
						</div>
						<div>
						<FilterPositionTab filterresult={this.state.result.Filter}/>
						<FilterSortByTab sortBy={this.state.result.Filter && this.state.result.Filter.DefaultSort}/>
						<FilterCuiTab FoodSort={this.state.result.Filter && this.state.result.Filter.FoodSort} CuisineSort={this.state.result.Filter && this.state.result.Filter.CuisineSort}/>
						</div>
				</div>
			)
	}
}
