import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
export default class MenuBottom extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<ul className={styleSheet.menu_bottom}>
					<li className={styleSheet.write_comment} id="delicacies_detail_write"><a href="#">写点评<i className={styleSheet.icon_jiang}></i></a></li>
			</ul>
		)
	}
}
