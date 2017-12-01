import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet from './header.css';
// import commonSheet from '../../css/commoniconfont.css';
export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
      let istransparent = this.props.transparent ? styleSheet.headercontainer : styleSheet.headercontainer +' '+ styleSheet.headercontainer__grey;
        return(
          <div className={istransparent} style={{opacity:this.props.opacity}}>
						<div className={styleSheet.headercontainer_detail}>
							<div className={styleSheet.headercontainer_detail__left}>
								<i className={'common-iconfont'+' '+styleSheet.ui_back}>&#xe621;</i>
							</div>
							<div>
								<div className={styleSheet.ui_title}>{this.props.title}</div>
							</div>
							<div className={styleSheet.headercontainer_detail__right}>
								<i className="common-iconfont">&#xe62a;</i>
								<i className="common-iconfont">&#xe62b;</i>
							</div>
						</div>
					</div>
        );
    }
}
