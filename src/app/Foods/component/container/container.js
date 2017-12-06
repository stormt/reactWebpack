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
    this.state = {
        rest:{},
        bottomHeaderOpacity:1,
        upperHeaderOpacity:0
    }
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
          state.rest = rest;
          return state;
        });
      });
  }
  onContentScroll(scrollTopValue){
    var backtotopbt = document.getElementsByClassName('js_botfixedwrap')[0];
    if(scrollTopValue > 60){
      this.setState({
        bottomHeaderOpacity:0,
        upperHeaderOpacity:1
      });

    }else if(scrollTopValue > 40){
      this.setState({
        bottomHeaderOpacity:0.3,
        upperHeaderOpacity:0.7
      });

    }else if(scrollTopValue > 20){
      this.setState({
        bottomHeaderOpacity:0.7,
        upperHeaderOpacity:0.3
      });
    }else if(scrollTopValue > 10){
      this.setState({
        bottomHeaderOpacity:0.9,
        upperHeaderOpacity:0.1
      });

    }else if(scrollTopValue >= 0){
      this.setState({
        bottomHeaderOpacity:1,
        upperHeaderOpacity:0
      });

    }
    if(scrollTopValue > 0){
      backtotopbt.style.display = 'block';

    }else{

      backtotopbt.style.display = 'none';
    }

  }
  

  render(){
    return (
      <div className="foodwraper_detail foodwraper_detail__ios">
          <Header opacity={this.state.bottomHeaderOpacity} transparent="true" isHybrid={false}/>
          <Header opacity={this.state.upperHeaderOpacity} title={this.state.rest.RestaurantInfo && this.state.rest.RestaurantInfo.Name} isHybrid={false}/>
          <Contents contentdata={this.state.rest} reportscroll={(arg)=>this.onContentScroll(arg)}/>
      </div>
    )
  }
}
