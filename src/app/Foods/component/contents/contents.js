import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
import TopBanner from './TopBanner.js';
import ResInfos from './resinfo.js';
import RemdDish from './recmddish.js';
export default class Contents extends React.Component{
		constructor(props){
			super(props);
		}
		componentDidMount(){
		  window.addEventListener('scroll',function(){
		    console.log(123);

		  },false);


		}

		render(){
				return (
					<div className={styleSheet.foodwraper_detail+' '+styleSheet.food_detail}>
							<TopBanner bannerdata={this.props.contentdata.RestaurantInfo && this.props.contentdata.RestaurantInfo.CoverImageUrls} imageCount={this.props.contentdata.RestaurantInfo && this.props.contentdata.RestaurantInfo.ImageCount}/>
							<ResInfos resdata={this.props.contentdata.RestaurantInfo} VideoBanner={this.props.contentdata.VideoBanner} Expert={this.props.contentdata.Expert}/>
							<RemdDish resdata={this.props.contentdata.RestaurantInfo} Menus={this.props.contentdata.Menus}/>
					</div>
				)
		}
}
