import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
import Filter from './filter.js';
import ResList from './reslist.js';
export default class IndexContents extends React.Component{
		constructor(props){
			super(props);
			this.forUpforwarDate = this.forUpforwarDate.bind(this);
		}
		forUpforwarDate(isshow){
			
			this.props.forUpforwarDate(isshow);

		}

		render(){
			let Result = this.props.Result || {};
			return(
				<div className={styleSheet['l-sightheadouter__head-srollview'] + ' ' + styleSheet.home_e_wrap }>
						{Result.Filter ? (<Filter FilterResult={Result.Filter} forUpforwarDate={this.forUpforwarDate} />):''}
						<ResList Restaurants={this.props.Result.Restaurants} CustomFilter={this.props.Result.CustomFilter}/>
				</div>
			)
		}
}
