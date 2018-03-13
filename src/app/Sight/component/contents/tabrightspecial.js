import React from 'react';
import ReactDOM from 'react-dom';
export default class TabRightSpecial extends React.Component {
	constructor(props) {
		super(props);

	}
	render(){
		return(
			<div className="multistage_inner" key={index}>
				 <div className="filter-tab-head">
						 <FilterTabHead rightitem={rightitem}/>
				 </div>
				 {
					 rightitem.map((item,index)=>{
						 return(
									<FilterTabBody item={item} key={index} />
						 )
					 })
				 }
			</div>
		)
	}
}
