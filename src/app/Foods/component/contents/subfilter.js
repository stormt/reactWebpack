import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
export default class SubFilter extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		var CustomFilter = this.props.CustomFilter || [];
		return(
				<div className="c-listfilter" style={{"overflow":"hidden"}}>
				 <ul className="c-listfilter__text">
						{
							CustomFilter.map((v,k)=>{
								return(
									 <li key={v.Id}>{v.Name}</li>
								)
							})
						}
				</ul>
			</div>
			)
	}
}
