import React from 'react';
import ReactDOM from 'react-dom';
import stylesheet from '../../foods.css';
import fontsheet from '../../../../publicResource/css/commoniconfont.css';
import Header from '../../../../publicResource/component/Header/header.js';
import Contents from '../contents/contents.js';
import CModel from '../../../common/abstractModel.js';
export default class Container extends React.Component{

  constructor(props){
    super(props);
    this.state= {};
    this.state.rest = {};
  }

componentDidMount(){
  window.addEventListener('scroll',function(){
    console.log(123);

  },false);


}
  componentWillMount(){
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
        this.setState((prevState)=>{
          let rest = Object.assign({},prevState.rest,resArr[0],resArr[1]);
          let state = {};
          for (var key in rest){
              state[key] = rest[key]
          }
          return state;
        });
      });
  }



  render(){
    return (
      <div className="foodwraper_detail foodwraper_detail__ios">
          <Header opacity="1" transparent="true"/>
          <Header opacity="0" title={this.state.RestaurantInfo && this.state.RestaurantInfo.Name}/>
          <Contents contentdata={this.state}/>
      </div>
    )
  }
}
