import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
import Filter from './filter.js';
import ResList from './reslist.js';
export default class IndexContents extends React.Component{
		constructor(props){
			super(props);
		}

		render(){
			let Result = this.props.Result || {};
			return(
				<div className={styleSheet['l-sightheadouter__head-srollview'] + ' ' + styleSheet.home_e_wrap }>
						{Result.Filter ? (<Filter FilterResult={Result.Filter} />):''}
						<ResList Restaurants={this.props.Result.Restaurants} CustomFilter={this.props.Result.CustomFilter}/>
				</div>
			)
		}
}
