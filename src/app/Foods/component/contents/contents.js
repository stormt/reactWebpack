import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
import TopBanner from './TopBanner.js';
import ResInfos from './resinfo.js';
import RemdDish from './recmddish.js';
import BackToTop from './backtotop.js';
import MenuBottom from './menuBottom.js';
import EatAndDrink from './eatanddrink.js';
import NearbyHot from './nearbyhot.js';
export default class Contents extends React.Component{
		constructor(props){
			super(props);
		}
		componentDidMount(){
			var b = document.getElementById('detail_scroll_wraper');
			var scrollTop;
		  b.addEventListener('scroll',function(){
				scrollTop = b.scrollTop;
				this.props.reportscroll(scrollTop);

		  }.bind(this),false);


		}
		shouldComponentUpdate(nextProps, nextState){
			
	    if(this.props.contentdata == nextProps.contentdata){
	        return false;
	    }
	     return true;
	  }

		render(){
				return (
					<div className={styleSheet.foodwraper_detail+' '+styleSheet.food_detail} id="detail_scroll_wraper">
							<TopBanner bannerdata={this.props.contentdata.RestaurantInfo && this.props.contentdata.RestaurantInfo.CoverImageUrls} imageCount={this.props.contentdata.RestaurantInfo && this.props.contentdata.RestaurantInfo.ImageCount}/>
							<ResInfos resdata={this.props.contentdata.RestaurantInfo} VideoBanner={this.props.contentdata.VideoBanner} Expert={this.props.contentdata.Expert}/>
							<RemdDish resdata={this.props.contentdata.RestaurantInfo} Menus={this.props.contentdata.Menus}/>
							{this.props.contentdata.PictureTexts ? (<EatAndDrink pictextdata={this.props.contentdata.PictureTexts}/>):''}
							<NearbyHot aroundhotel={this.props.contentdata.AroundHotel} aroundrestaurants={this.props.contentdata.AroundRestaurants} aroundshops={this.props.contentdata.AroundShops} aroundsights={this.props.contentdata.AroundSights}/>
							<MenuBottom />
							<BackToTop />
					</div>
				)
		}
}
