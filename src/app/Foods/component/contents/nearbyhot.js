import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
export default class NearbyHot extends React.Component {

	constructor(props) {
		super(props);
		this.getActiveLineWidth = this.getActiveLineWidth.bind(this);
		this.delegateTabClik = this.delegateTabClik.bind(this);
		this.state = {
			activeTabText : ''
		};
	}

	getActiveLineWidth(spanDom){

		this.spanwidth = spanDom.offsetWidth;


	}
	componentDidMount(){
		// var ul = document.getElementsByClassName('js_delegatenode')[0],
		//     li = ul.getElementsByTagName('li')[0],
		// 		width = li.getElementsByTagName('span')[0].offsetWidth + 32,
		// 		liwidth = li.offsetWidth,
		// 		active_line = document.getElementsByClassName('js_activeline')[0];
		// 		active_line.style.cssText = 'width:'+ width + 'px;'+'margin-left:' + (liwidth-width)/2 +'px;transition:all 300ms ease-in-out;transform:translate3d(0,0,0)';
		// 		var bt = document.getElementById('js_bttoall');
		// 		ul.addEventListener('click',function(e){
		// 			if(e.target.nodeName == 'SPAN' || e.target.nodeName == 'LI'){
		// 				var curDom = e.target.nodeName == 'SPAN' ? e.target.parentNode : e.target;
		// 				var tabName = curDom.dataset.tabname;
		// 				if(tabName == 'foods'){
		// 						active_line.style.transform = 'translate3d('+liwidth*0+'px,0,0)';
		// 						bt.getElementsByTagName('a')[0].innerHTML = '查看全部美食';
		// 				}else if(tabName == 'sight'){
		// 						active_line.style.transform = 'translate3d('+liwidth*1+'px,0,0)';
		// 						bt.getElementsByTagName('a')[0].innerHTML = '查看全部景点';
		// 				}else if(tabName == 'shop'){
		// 						active_line.style.transform = 'translate3d('+liwidth*2+'px,0,0)';
		// 						bt.getElementsByTagName('a')[0].innerHTML = '查看全部购物';
		// 				}else{
		// 					//处理酒店逻辑
		// 					 active_line.style.transform = 'translate3d('+liwidth*3+'px,0,0)';
		// 						bt.getElementsByTagName('a')[0].innerHTML = '查看全部酒店';
		// 				}
		// 			}
		// 		},false);




	}

	componentWillReceiveProps(nextProps){
		console.log(nextProps);
		let activeTabText = '';
		let tabNum = 0;
		let activeTab ='';
		if(nextProps.aroundhotel){
			activeTabText = "酒店";
			tabNum++;
			activeTab = "酒店";
		}
		if(nextProps.aroundshops){
			activeTabText = "购物";
			tabNum++;
			activeTab = "购物";
		}
		if(nextProps.aroundsights){
			activeTabText = "景点";
			tabNum++;
			activeTab = "景点";
		}
		if(nextProps.aroundrestaurants){
			activeTabText = "美食";
			tabNum++;
			activeTab = "美食";
		}
		this.liwidth = document.body.clientWidth / tabNum;
		this.setState({
			activeTabText:activeTabText,
			activeTab:activeTab
		},function(){
			console.log(this.spanwidth);
			this.setState({
				activeline_css:{
					width:this.spanwidth + 32,
					transition:'all 300ms ease-in-out',
					transform:'translate3d(0,0,0)',
					marginLeft: (this.liwidth - this.spanwidth - 32)/2
				}
			});
		});

	}

	delegateTabClik(e){
		var curDom= e.target;
		if(curDom.nodeName == 'SPAN'){
			var ii = Array.from(curDom.parentNode.parentNode.childNodes).indexOf(curDom.parentNode);
				this.setState({
					activeTab:curDom.innerHTML,
					activeTabText:curDom.innerHTML,
					activeline_css:{
						transform:'translate3d(' + this.liwidth *ii +'px,0,0)',
						width:this.spanwidth + 32,
						transition:'all 300ms ease-in-out',
						marginLeft: (this.liwidth - this.spanwidth - 32)/2
					}
				});
		}
	}

	render(){
		var AroundHotel = this.props.aroundhotel || [],
			  AroundRestaurants = this.props.aroundrestaurants || [],
				AroundSights = this.props.aroundsights || [],
				AroundShops = this.props.aroundshops || [],
				foodsli = AroundRestaurants.length ?(<li className="is-active" data-tabname="foods"  id="c_near_restaurant"><span ref={this.getActiveLineWidth}>美食</span></li>):'',
				sighli = AroundSights.length ?(<li data-tabname="sight" id="c_near_sight"><span>景点</span></li>):'',
				shopli = AroundShops.length ?(<li data-tabname="shop" id="c_near_shop"><span>购物</span></li>):'',
				hotelli = AroundHotel.length ? (<li data-tabname="hotel" id="c_near_hotel"><span>酒店</span></li>):'';
		return(
			<div className={styleSheet.neararoundhot}>
					<div className={styleSheet['title-detail'] +' '+styleSheet.specialtitle}>附近热门</div>
					<div className={styleSheet['l-detailt-tab']}>
							<ul className="js_delegatenode" onClick={this.delegateTabClik}>
								{
									foodsli
								}
								{
									sighli
								}
								{
									shopli
								}
								{
									hotelli
								}
							</ul>
							<div className={styleSheet.tab__activeline + ' js_activeline'} style={this.state.activeline_css}></div>
					</div>
					{AroundRestaurants && AroundRestaurants.length>0 ? (
						<div className={styleSheet['l-modlist']} style={"美食" == this.state.activeTab ? ({'display':'block'}):({'display':'none'})}>
								{
									AroundRestaurants.map((value,index)=>{
										if(index<2){
											return(
												<div className={styleSheet['l-modlist__item']+' '+ styleSheet.special} key={value.Id}>
														<div className={styleSheet['c-listinnerwrap']}>
																<div className={styleSheet['c-imgbox']}>
																		<img src={value.ImgUrl}/>
																</div>
																<div className={styleSheet['c-textview']}>
																		<div className={styleSheet['c-textview__title']}>
																				<div className={styleSheet['c-textview__title--text']}><span>{value.Name}</span></div>
																		</div>
																		<div className={styleSheet['c-textview__comment']}>
																			{
																				value.MeiShiLinType >0 ? (<div className={styleSheet['c-textview__comment--msltip']}>{value.MeiShiLinName}</div>):(
																					value.Score > 0 ? (<div className={styleSheet['c-textview__comment--score']}>{value.Score}分</div>):(
																						value.CommentCount >= 10 ? (<div className={styleSheet['c-textview__comment--count']}>{value.CommentCount}条点评</div>):(<div className={styleSheet['c-textview__comment--count']}>少于10条点评</div>)
																					))
																			}
																		</div>
																		{value.CuisineName?(<div className={styleSheet['c-textview__tagbox']}><i>{value.CuisineName}</i></div>):''}

																		<div className={styleSheet['c-textview__bottom']}>
																				<div className={styleSheet['c-textview__bottom--distance']}>{value.Distance}</div>
																				{value.Price ? (<div className={styleSheet['c-textview__bottom--price']}><span className={styleSheet['n_text']}>人均</span>{value.Price}</div>):''}
																		</div>
															  </div>
														</div>
												</div>
											)
										}

								})
							}
					  </div>
					):''}
					{AroundSights && AroundSights.length ? (

						<div className={styleSheet['l-modlist']} style={"景点" == this.state.activeTab ? ({'display':'block'}):({'display':'none'})}>
							{AroundSights.map((value,index)=>{
								if(index < 2){
									return(
										<div className={styleSheet['l-modlist__item'] +' '+styleSheet.special} key={value.Id}>
												<div className={styleSheet['c-listinnerwrap']}>
														<div className={styleSheet['c-imgbox']}>
																<img src={value.ImgUrl}/>
														</div>
														<div className={styleSheet['c-textview'] + ' ' + styleSheet['c-textview--sight']}>
																<div className={styleSheet['c-textview__title']}>
																		<div className={styleSheet['c-textview__title--text']}><span>{value.Name}</span></div>
																</div>
																<div className={styleSheet['c-textview__comment']}>
																		{
																				value.Score > 0 ? (<div className={styleSheet['c-textview__comment--score']}>{value.Score}分</div>):(
																					value.CommentCount >= 10 ? (<div className={styleSheet['c-textview__comment--count']}>{value.CommentCount}条点评</div>):(
																						<div className={styleSheet['c-textview__comment--count']}>少于10条点评</div>
																					)
																				)
																		}
																</div>
																<div className={styleSheet['c-textview__bottom']}>
																		<div className={styleSheet['c-textview__bottom--distance']}>{value.Distance}</div>
																		{value.Price ? (<div className={styleSheet['c-textview__bottom--price']}>{value.Price}<span className={styleSheet.n_text}>起</span></div>):''}
																</div>
														</div>
												</div>
										</div>
									)
								}
								})
							}
						</div>
					):''}

					{
						AroundShops && AroundShops.length > 0 ? (
							<div className={styleSheet['l-modlist']} style={"购物" == this.state.activeTab ? ({'display':'block'}):({'display':'none'})}>
									{AroundShops.map((value,index)=>{
										if(index < 2){
											return(
												<div className={styleSheet['l-modlist__item'] +' '+styleSheet.special} key={value.Id}>

														<div className={styleSheet['c-listinnerwrap']}>
																<div className={styleSheet['c-imgbox']}>
																		<img src={value.ImgUrl}/>
																</div>
																<div className={styleSheet['c-textview'] + ' ' +styleSheet['c-textview--sight']}>
																		<div className={styleSheet['c-textview__title']}>
																				<div className={styleSheet['c-textview__title--text']}><span>{value.Name}</span></div>

																		</div>
																		<div className={styleSheet['c-textview__comment']}>
																			{
																				value.Score > 0 ? (<div className={styleSheet['c-textview__comment--score']}>{value.Score}分</div>):(
																					value.CommentCount >= 10 ? (<div className={styleSheet['c-textview__comment--count']}>{value.CommentCount}条点评</div>):(<div className={styleSheet['c-textview__comment--count']}>少于10条点评</div>)
																				)
																			}
																		</div>
																		<div className={styleSheet['c-textview__bottom']}>
																				<div className={styleSheet['c-textview__bottom--distance']}>{value.Distance}</div>
																				 {value.Price ? (<div className={styleSheet['c-textview__bottom--price']}>{value.Price}<span className={styleSheet.n_text}>起</span></div>):''}
																		</div>
																</div>
														</div>
												</div>
											)
										}

									})
								}
							</div>

						):''}

						{
							AroundHotel && AroundHotel.length > 0 ? (
								<div className={styleSheet['l-modlist']} style={"酒店" == this.state.activeTab ? ({'display':'block'}):({'display':'none'})}>
										{AroundHotel.map((value,index)=>{
											if(index < 2){
												return (
													<div className={styleSheet['l-modlist__item'] +' '+styleSheet.special} key={index}>
															<div className={styleSheet['c-listinnerwrap']}>
																	<div className={styleSheet['c-imgbox']}>
																			<img src={value.ImgUrl}/>
																	</div>
																	<div className={styleSheet['c-textview'] +' '+ styleSheet['c-textview--sight']}>
																			<div className={styleSheet['c-textview__title']}>
																					<div className={styleSheet['c-textview__title--text']}><span>{value.Name}</span></div>

																			</div>
																			<div className={styleSheet['c-textview__comment']}>
																				{
																					value.Score > 0 ? (<div className={styleSheet['c-textview__comment--score']}>{value.Score}分</div>):(
																						value.CommentCount >= 10 ? (<div className={styleSheet['c-textview__comment--count']}>{value.CommentCount}条点评</div>):(
																							<div className={styleSheet['c-textview__comment--count']}>少于10条点评</div>
																						)
																					)
																				}

																			</div>
																			<div className={styleSheet['c-textview__bottom']}>
																					<div className={styleSheet['c-textview__bottom--distance']}>{value.Distance}</div>
																					{value.Price ? (<div className={styleSheet['c-textview__bottom--price']}>{value.Price}<span className={styleSheet.n_text}>起</span></div>):''}
																			</div>
																	</div>
															</div>
													</div>
												)
											}
										})
									}
								</div>
							):''
						}
						<p className={styleSheet.spreadmorepack +' '+ styleSheet.marginTop} id="js_bttoall"><a href="#">查看全部{this.state.activeTabText}</a></p>
			</div>
		)
	}
}
