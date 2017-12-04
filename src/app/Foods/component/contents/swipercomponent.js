import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet from '../../foods.css';
import Swiper from '../../../../publicResource/vender/swiper.js';
export default class SwiperComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	shouldComponentUpdate(nextProps, nextState){
		if(this.props.banner == nextProps.banner){
			return false;
		}

		return true;
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
            effect:'coverflow',
            grabCursor: true,
            centeredSlides: true,
            loop: false,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 0,
                stretch: 0,
                depth: 180,
                modifier: 1,
                slideShadows : true
            }
        }
		}
 new Swiper(this.props.bannersetting.initwraper,Object.assign({},baseSetting,this.props.bannersetting));

	}
	render(){
			var bannerurl,
					bannerType = this.props.bannerType || 0;
			var swiperItems = (this.props.banner || []).map((banner,index)=>{
				bannerurl =banner.ImageUrl ? banner.ImageUrl : banner;
				return(
					<div className='swiper-slide swiper-slide' key={index}>
						<div className={this.props.bannerType == 1 ? styleSheet.autoheight :'no'}>
							<img src={bannerurl} style={{width:'100%'}}/>
							{
								bannerType == 2 ? (<p><span>{banner.Title}</span></p>):''
							}
						</div>
					</div>
				);

			});
			return(
				<div className='swiper-container swiper-container'>
					<div className='swiper-wrapper swiper-wrapper'>
						{swiperItems}
					</div>
					<div className='swiper-pagination swiper-pagination swiper-pagination-clickable swiper-pagination-bullets'></div>
				</div>
			)
	}
}
