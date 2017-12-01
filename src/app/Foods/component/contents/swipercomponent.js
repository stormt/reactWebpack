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

		new Swiper('.jsimgbanner_wraper .swiper-container',{
			 autoplayDisableOnInteraction : false,
       pagination :'.swiper-pagination',
       paginationClickable :true,
       loop : true,
       autoplay:3000
		});


	}
	render(){

			var swiperItems = (this.props.banner || []).map((banner,index)=>{
				return(
					<div className={swipercss['swiper-slide'] + ' ' + 'swiper-slide'} key={index}>
						<div className={styleSheet.autoheight}>
							<img src={banner} style={{width:'100%'}}/>
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
