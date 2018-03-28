import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import {toJS} from 'immutable';
export default class ResList extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillUpdate(){
		
	}


	shouldComponentUpdate(nextProps, nextState) {
		  const thisProps = this.props || {};
		  const thisState = this.state || {};
		  nextState = nextState || {};
		  nextProps = nextProps || {};
		  if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
		    Object.keys(thisState).length !== Object.keys(nextState).length) {
		    return true;
		  }
		  for (const key in nextProps) {
		    if (!Immutable.is(thisProps[key], nextProps[key])) {
		      return true;
		    }
		  }
		  for (const key in nextState) {
		    if (!Immutable.is(thisState[key], nextState[key])) {
		      return true;
		    }
		  }
		  return false;
		}

	componentWillReceiveProps(nextProps){

	}

	render(){
		console.log(this.props);
			var list = this.props.restaurants || [];
			return(
				<div className="recommend">
						<div className="l-modlist" style={{"visibility": "initial"}}>
							{
								list.map((item,index)=>{
									if(index == 2){
										return(
											<div key={item.RestaurantId}>
											<div className="l-modlist__item">
													<div className="c-listinnerwrap">
															<div className="c-imgbox">
																	<img src={item.ImageUrl}/>
															</div>
															<div className="c-textview">
																	<div className="c-textview__title">
																			<div className="c-textview__title--text"><span>{item.Name}</span></div>
																			{
																				item.OpenStatus ? (<i className="ui-tips-gray ui-tips-gray--fontchange">{item.OpenStatus}</i>):(
																				item.IsBook && <i className="common-iconfont ui-iconfont-ding">&#xe61f;</i>
																				)
																			}
																	</div>
															</div>
													</div>
											</div>
											</div>
										)
									}else{
										return(
											<div className="l-modlist__item" key={item.RestaurantId}>
													<div className="c-listinnerwrap">
															<div className="c-imgbox">
																	<img src={item.ImageUrl}/>
															</div>
															<div className="c-textview">
																	<div className="c-textview__title">
																			<div className="c-textview__title--text"><span>{item.Name}</span></div>
																			{
																				item.OpenStatus ? (<i className="ui-tips-gray ui-tips-gray--fontchange">{item.OpenStatus}</i>):(
																				item.IsBook && <i className="common-iconfont ui-iconfont-ding">&#xe61f;</i>
																				)
																			}
																	</div>
															</div>
													</div>
											</div>
										)
									}

								})
							}
						</div>
				</div>
			)
	}
}
