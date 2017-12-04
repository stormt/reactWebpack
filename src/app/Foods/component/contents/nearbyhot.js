import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
export default class NearbyHot extends React.Component {

	constructor(props) {
		super(props);
	}
	render(){
		var AroundHotel = this.props.aroundhotel || [];
		var AroundRestaurants = this.props.aroundrestaurants || [];
		var AroundSights = this.props.aroundsights || [];
		var AroundShops = this.props.aroundshops || [];
		var foodsli = AroundRestaurants.length ?(<li className="is-active" data-tabname="foods"  id="c_near_restaurant"><span>美食</span></li>):'';
		var sighli = AroundSights.length ?(<li data-tabname="sight" id="c_near_sight"><span>景点</span></li>):'';
		var shopli = AroundShops.length ?(<li data-tabname="shop" id="c_near_shop"><span>购物</span></li>):'';
		var hotelli = AroundHotel.length ? (<li data-tabname="hotel" id="c_near_hotel"><span>酒店</span></li>):'';
		return(
			<div className={styleSheet.neararoundhot}>
					<div className={styleSheet['title-detail'] +' '+styleSheet.specialtitle}>附近热门</div>
					<div className={styleSheet['l-detailt-tab']}>
							<ul className="js_delegatenode">
								{
									foodsli
								}
								{sighli}
								{
									shopli
								}
								{
									hotelli
								}
							</ul>
							<div className={styleSheet.tab__activeline}></div>
					</div>
					{AroundRestaurants && AroundRestaurants.length>0 ? (
						<div className={styleSheet['l-modlist']} style={{display:'block'}}>
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

						<div className="l-modlist js_sightTab" style={{display:'none'}}>
							{AroundSights.map((value,index)=>{
								if(index < 2){
									return(
										<div className="l-modlist__item special" key={value.Id}>
												<div className="c-listinnerwrap">
														<div className="c-imgbox">
																<img src={value.ImgUrl}/>
														</div>
														<div className="c-textview c-textview--sight">
																<div className="c-textview__title">
																		<div className="c-textview__title--text"><span>{value.Name}</span></div>
																</div>
																<div className="c-textview__comment">
																		{
																				value.Score > 0 ? (<div className="c-textview__comment--score">{value.Score}分</div>):(
																					value.CommentCount >= 10 ? (<div className="c-textview__comment--count">{value.CommentCount}条点评</div>):(
																						<div className="c-textview__comment--count">少于10条点评</div>
																					)
																				)
																		}
																</div>
																<div className="c-textview__bottom">
																		<div className="c-textview__bottom--distance">{value.Distance}</div>
																		value.Price ? (<div className="c-textview__bottom--price">{value.Price}<span className="n_text">起</span></div>):''
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
							<div className="l-modlist js_shopTab" style={{display:'none'}}>
									{AroundShops.map((value,index)=>{
										if(index < 2){
											return(
												<div className="l-modlist__item special" key={value.Id}>
														<div className="c-listinnerwrap">
																<div className="c-imgbox">
																		<img src={value.ImgUrl}/>
																</div>
																<div className="c-textview c-textview--sight">
																		<div className="c-textview__title">
																				<div className="c-textview__title--text"><span>{value.Name}</span></div>

																		</div>
																		<div className="c-textview__comment">
																			{
																				value.Score > 0 ? (<div className="c-textview__comment--score">{value.Score}分</div>):(
																					value.CommentCount >= 10 ? (<div className="c-textview__comment--count">{value.CommentCount}条点评</div>):(<div className="c-textview__comment--count">少于10条点评</div>)
																				)
																			}
																		</div>
																		<div className="c-textview__bottom">
																				<div className="c-textview__bottom--distance">{value.Distance}</div>
																				 value.Price ? (<div className="c-textview__bottom--price">{value.Price}<span className="n_text">起</span></div>):''
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
								<div className="l-modlist js_hotelTab" style={{display: 'none'}}>
										{AroundHotel.map((value,index)=>{
											if(index < 2){
												return (
													<div className="l-modlist__item special" key={index}>
															<div className="c-listinnerwrap">
																	<div className="c-imgbox">
																			<img src={value.ImgUrl}/>
																	</div>
																	<div className="c-textview c-textview--sight">
																			<div className="c-textview__title">
																					<div className="c-textview__title--text"><span>{value.Name}</span></div>

																			</div>
																			<div className="c-textview__comment">
																				{
																					value.Score > 0 ? (<div className="c-textview__comment--score">{value.Score}分</div>):(
																						value.CommentCount >= 10 ? (<div className="c-textview__comment--count">{value.CommentCount}条点评</div>):(
																							<div className="c-textview__comment--count">少于10条点评</div>
																						)
																					)
																				}

																			</div>
																			<div className="c-textview__bottom">
																					<div className="c-textview__bottom--distance">{value.Distance}</div>
																					value.Price ? (<div className="c-textview__bottom--price">{value.Price}<span className="n_text">起</span></div>):''
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
						<p className={styleSheet.spreadmorepack +' '+ styleSheet.marginTop}><a href="#">查看全部美食</a></p>
			</div>
		)
	}
}
