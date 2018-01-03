import React from 'react';
import ReactDOM from 'react-dom';
import TabRightContentCommon from './tabrightcommon.js';
import TabRightContentSpecial from './tabrightspecial.js';
import styleSheet  from '../../foods.css';
export default class TabRightContent extends React.Component {
	constructor(props) {
		super(props);

	}
	render(){
		var tabright = this.props.tabright || [];
		var isshow = this.props.isshow;
		return(
			<div>
			{
				 tabright.map((rightitem,index)=>{
					var tag = rightitem.shift();
					if(index < tabright.length - 1 && tag !== 'subway'){
						return (
							<TabRightContentCommon rightitem={rightitem} key={index} />
						)
					}else{
						if(tag == 'subway'){
							return (
								<div key={index}></div>
							)
						}
					}
				})
			}

			</div>
		)
	}
}
