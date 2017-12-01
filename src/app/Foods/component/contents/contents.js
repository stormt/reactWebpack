import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
import TopBanner from './TopBanner.js';
import ResInfos from './resinfo.js';
export default class Contents extends React.Component{
		constructor(props){
			super(props);
		}

		render(){
				return (
					<div className={styleSheet.foodwraper_detail+' '+styleSheet.food_detail}>
							<TopBanner bannerdata={this.props.contentdata.RestaurantInfo && this.props.contentdata.RestaurantInfo.CoverImageUrls} imageCount={this.props.contentdata.RestaurantInfo && this.props.contentdata.RestaurantInfo.ImageCount}/>
							<ResInfos resdata={this.props.contentdata.RestaurantInfo}/>
					</div>
				)
		}
}
