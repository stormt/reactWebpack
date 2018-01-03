import React from 'react';
import ReactDOM from 'react-dom';
import stylesheet from '../../foods.css';
import fontsheet from '../../../../publicResource/css/commoniconfont.css';
import Header from '../../../../publicResource/component/Header/header.js';
import Contents from '../contents/contents.js';
import DetailStore from '../../store/detailstore.js';
import DetailAction from '../../action/detailaction.js';
export default class Container extends React.Component{

  constructor(props){
    super(props);
    this._onChange = this._onChange.bind(this);
    this.state = {
        rest:DetailStore.getRestfulData(),
        bottomHeaderOpacity:DetailStore.getBottomOpacity(),
        upperHeaderOpacity:DetailStore.getUpOpacity()
    }
  }

componentDidMount(){

  DetailStore.addChangeListener(this._onChange);

}
  _onChange(){
    this.setState({
      rest:DetailStore.getRestfulData(),
      bottomHeaderOpacity:DetailStore.getBottomOpacity(),
      upperHeaderOpacity:DetailStore.getUpOpacity()
    });
  }

  componentWillMount(){
      DetailAction.getRestfulDate();

  }

  shouldComponentUpdate(nextProps){
    return true;

  }
  render(){
    return (
      <div className="foodwraper_detail foodwraper_detail__ios">
          <Header opacity={this.state.bottomHeaderOpacity} transparent="true" isHybrid={false}/>
          <Header opacity={this.state.upperHeaderOpacity} title={this.state.rest.RestaurantInfo && this.state.rest.RestaurantInfo.Name} isHybrid={false}/>
          <Contents contentdata={this.state.rest}/>
      </div>
    )
  }
}
