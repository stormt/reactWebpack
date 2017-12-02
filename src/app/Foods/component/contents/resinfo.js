import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
export default class ResInfos extends React.Component{
		constructor(props){
			super(props);
		}

		render(){
			let MslTypeInfo = null;
			let RestaurantInfo = this.props.resdata || {};
			let VideoBanner = this.props.VideoBanner;
			let Expert = this.props.Expert;
			RestaurantInfo.firstName = RestaurantInfo.Name || RestaurantInfo.SecondName;
			RestaurantInfo.secondName = RestaurantInfo.SecondName || '';
			if(RestaurantInfo && RestaurantInfo.ShiMeiLinType >= 1){

 					MslTypeInfo = (
					<div className={styleSheet.warper}>
						<div className={styleSheet.res_info}>
							 <div className={styleSheet.restinfo}>
									 <h3 className={RestaurantInfo.secondName ? 'oversea':''}>
									 <strong>{RestaurantInfo.firstName}</strong>
									 {(RestaurantInfo.secondName && RestaurantInfo.firstName != RestaurantInfo.secondName)?(<p>{RestaurantInfo.secondName}</p>):''}
									 </h3>
									 <div className={styleSheet.food_rating +' '+ 'js_wraper_cuiname'}>
                        <div className="js_scroll_cuiname">
														{RestaurantInfo.ShiMeiLinName ? (<span className={styleSheet.staert}>{RestaurantInfo.ShiMeiLinName}</span>):''}
														<p>
															<span className={styleSheet.cuilabels}>{RestaurantInfo.Cuisine[0] && RestaurantInfo.Cuisine[0].Name}</span>
															{RestaurantInfo.AveragePrice ? (<span>人均&yen;{RestaurantInfo.AveragePrice}</span>):''}
															{(RestaurantInfo.LocalCurrency && RestaurantInfo.LocalPrice)?(<span className={styleSheet.oversea}>{RestaurantInfo.LocalCurrency}{RestaurantInfo.LocalPrice}</span>):''}
													  </p>
                        </div>
                    </div>
							  </div>
							 {VideoBanner ? (<div className={styleSheet.tdcp}><span>探店测评</span></div>):''}
					   </div>
					 {(Expert && Expert.ImgUrl && Expert.Introduction && Expert.RecommendedReason)?(
						 <div>
		 					 <div className={styleSheet.mslls}>
		 							 <div className={styleSheet.mslls_intro}>
		 									 <p className={styleSheet.ls}>{Expert.Name+'，'+Expert.Identity}</p>
		 									 <p className={styleSheet.zhicheng}>{Expert.Introduction}</p>
		 							 </div>
		 							 <span>
		 									 <img src={Expert.ImgUrl}/>
		 							 </span>
		 					 </div>
		 					 <div className={styleSheet.travelrecmd}>
		 							 <p className={styleSheet.travelrecmd_comment}>{Expert.RecommendedReason}</p>
		 					 </div>
					 </div>):(RestaurantInfo.Feature ? (
 							 <div className={styleSheet.travelrecmd + ' ' +'nonmslrec'}>
 	 							 <p className={styleSheet.travelrecmd_comment}><span className={styleSheet.travelrecmd_nonmsl}>旅行者推荐：{RestaurantInfo.Feature}</span></p>
 	 					   </div>
 				 		):''
 				  )}
					<div className={styleSheet.nav}>
							<p className={styleSheet.navtext}>{RestaurantInfo.Address}</p>
							<span className={styleSheet.navicons}>
							{(RestaurantInfo.BookTelList && RestaurantInfo.BookTelList.length) ? (<span>电话</span>):''}
							</span>
					</div>
			    </div>
				 )
		 }
				return (
					<div>
 						{MslTypeInfo}
					</div>
				)
		}
}
