import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet from '../../foods.css';
import Swiper from '../../../../publicResource/vender/swiper.js';
import swipercss from '../../../../publicResource/css/swiper.css';
export default class SwiperComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate(prevProps,prevState){
		 var baseSetting = null;
		if(prevProps.bannerType == 1){
			 baseSetting = {
				 autoplayDisableOnInteraction : false,
				 paginationClickable :true,
				 loop : true
			};

		}
		if(prevProps.bannerType == 2){
					baseSetting = {
			      effect: "coverflow",
			      grabCursor: true,
			      centeredSlides: true,
			      loop: false,
			      slidesPerView: "auto",
			      coverflow: {
			        rotate: 30,
			        stretch: 10,
			        modifier: 3,
			        slideShadows: true
			      }
			  }
		}
 new Swiper(this.props.bannersetting.initwraper,Object.assign({},baseSetting,this.props.bannersetting));

	}
	render(){
			var bannerurl;
			var swiperItems = (this.props.banner || []).map((banner,index)=>{
				bannerurl =banner.ImageUrl ? banner.ImageUrl : banner;
				return(
					<div className={swipercss['swiper-slide'] + ' ' + 'swiper-slide'} key={index}>
						<div className={this.props.bannerType == 1 ? styleSheet.autoheight :''}>
							<img src={bannerurl} style={{width:'100%'}}/>
						</div>
					</div>
				);

			});
			return(
				<div className={swipercss['swiper-container'] + ' '+'swiper-container'}>
					<div className={swipercss['swiper-wrapper'] + ' '+'swiper-wrapper'}>
						{swiperItems}
					</div>
					<div className={swipercss['swiper-pagination'] + ' ' +'swiper-pagination swiper-pagination-clickable swiper-pagination-bullets'}></div>
				</div>
			)
	}
}
