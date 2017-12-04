import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
import SwiperComponent from './swipercomponent.js';
export default class TopBanner extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<section className={styleSheet.topmain}>
					<div className={styleSheet.topheadpic__imgshadow}></div>
					<div className="bgimg jsimgbanner jsimgbanner_wraper">
							<SwiperComponent banner={this.props.bannerdata} bannerType={1} bannersetting={{
								initwraper:'.jsimgbanner_wraper .swiper-container',
							  autoplay:3000,
							  pagination :'.swiper-pagination'
							}}/>
					</div>
					<p className={styleSheet.camara}><span>{this.props.imageCount}张</span></p>
			</section>
		)
	}
}
