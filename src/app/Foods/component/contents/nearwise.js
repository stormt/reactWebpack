import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
export default class NearWise extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
			var sortby = this.props.sortBy || [];
			return(
				<div className="l-filterbox">
	        <div className="l-filterbox__scroll">
	            <ul className="c-singleline">
									{
										sortby.map((sortitem,index)=>{
											return (
												 <li className={"c-singleline__item" + (index == 0 ? " actived":"")} key={sortitem.Id}>{sortitem.Name}</li>
											)
										})
									}
	            </ul>
	        </div>
    		</div>
			)
	}
}
