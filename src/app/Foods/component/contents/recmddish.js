import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
import SwiperComponent from './swipercomponent.js';
export default class RemdDish extends React.Component{
		constructor(props){
			super(props);
		}

		render(){
      let RestaurantRecommendedFoodList = this.props.resdata && this.props.resdata.RestaurantRecommendedFoodList;
      let Foods = this.props.resdata && this.props.resdata.Foods;
      let Menus = this.props.Menus;
      let recmddish = null;
      let recdishText =Foods && Foods.map((food,index)=>{
         return food + '&emsp; '
      });
      // if(RestaurantRecommendedFoodList && RestaurantRecommendedFoodList.length > 0){
      recmddish = (
        <div className={styleSheet.recomdish}>
            <div className={styleSheet['title-detail']}>推荐菜</div>
            <div className={styleSheet.remdishlist} dangerouslySetInnerHTML={{__html:(recdishText && recdishText.join().replace(/,/g,''))}}></div>
            <div className={styleSheet['swiper-box']+' '+'js_swiper_box'}>
              <SwiperComponent banner={RestaurantRecommendedFoodList} bannerType={2} bannersetting={{
								initwraper:'.js_swiper_box .swiper-container'
							}}></SwiperComponent>
            </div>
             {(Menus && Menus.length>0)?(<div className={styleSheet.seemenu}>查看全部菜单</div>):''}
        </div>
      )
      // }
      return (
        <div id="rec_wraper_container">
          {recmddish}
        </div>
      )
    }
}
