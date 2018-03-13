import React from 'react';
import ReactDOM from 'react-dom';
export default class ResList extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillUpdate(){

		this.props.hidefiltermask(false);
	}

	shouldComponentUpdate(nextProps, nextState){

		return true;
	}

	componentWillReceiveProps(nextProps){
		console.log("componentWillReceiveProps");
		console.log(this.props);
		console.log(nextProps);
		console.log(nextProps == this.props);
	}

	render(){
		console.log("餐厅列表被刷新！");
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
