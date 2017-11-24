import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet from './header.css';
// import commonSheet from '../../css/commoniconfont.css';
export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
      console.log(styleSheet);
        return(
          <div className={styleSheet['l-foodheadouter_detail__headwrap']} style={{opacity:1}}>
						<div className={styleSheet['l-customhead_detail']}>
							<div className={styleSheet.customhead_detail__left}>
								<i className={styleSheet.common_iconfont +" " +styleSheet.ui_icon_back}></i>
							</div>
							<div className={styleSheet.customhead_detail__center}>
								<div className={styleSheet.ui_title}></div>
							</div>
							<div className={styleSheet.customhead_detail__right}>
								<i className={styleSheet.common_iconfont +" " + styleSheet.ui_icon_collect}></i>
								<i className={styleSheet.common_iconfont +" " + styleSheet.ui_icon_share}></i>
							</div>
						</div>
					</div>
        );
    }
}
