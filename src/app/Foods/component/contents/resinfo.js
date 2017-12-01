import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
export default class ResInfos extends React.Component{
		constructor(props){
			super(props);
		}

		render(){
			let MslTypeInfo = null;
			let RestaurantInfo = this.props.resdata;
			console.log(RestaurantInfo);
			if(RestaurantInfo && RestaurantInfo.ShiMeiLinType > 1){

 					MslTypeInfo = (
						<div className="res_info">
							 <div className="restinfo">
									 <h3 className={RestaurantInfo.secondName ? 'oversea':''}>
									 <strong>{RestaurantInfo.firstName}</strong>
									 {(RestaurantInfo.secondName && RestaurantInfo.firstName != RestaurantInfo.secondName)?(<p>{RestaurantInfo.secondName}</p>):''}
									 </h3>
									 <div className="food_rating js_wraper_cuiname">
                        <div className="js_scroll_cuiname">
														{RestaurantInfo.ShiMeiLinName ? (<span className="staert">{RestaurantInfo.ShiMeiLinName}</span>):''}
														<p>
															<span className="cuilabels">{RestaurantInfo.Cuisine[0] && RestaurantInfo.Cuisine[0].Name}</span>
															{RestaurantInfo.AveragePrice ? (<span>人均&yen;{RestaurantInfo.AveragePrice}</span>):''}
															{(RestaurantInfo.LocalCurrency && RestaurantInfo.LocalPrice)?(<span className="oversea">{RestaurantInfo.LocalCurrency}{RestaurantInfo.LocalPrice}</span>):''}
													  </p>
                        </div>
                    </div>
							 </div>
					 </div>
				 )
		 }
				return (
					<div className={styleSheet.warper}>
 						{MslTypeInfo}
					</div>
				)
		}
}
