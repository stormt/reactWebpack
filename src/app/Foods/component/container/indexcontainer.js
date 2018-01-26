import React from 'react';
import ReactDOM from 'react-dom';
import stylesheet from '../../foods.css';
import fontsheet from '../../../../publicResource/css/commoniconfont.css';
import {getIndexDate} from '../../action/indexaction.js';
import IndexContents from '../contents/indexcontents.js';
import FilterPositionTab from '../contents/filterpoiTab.js';
import FilterSortByTab from '../contents/nearwise.js';
import FilterCuiTab from '../contents/cuitab.js';
import store from '../../store/reduxstore.js';
export default class IndexContainer extends React.Component {

	forUpforwarDate(isshow){
		this.setState({
			PoisShow:isshow
		})
	}

	componentWillMount(){

  	}
	componentDidMount(){
		store.dispatch(getIndexDate());
		var self = this;
		store.subscribe(function(){
			// console.log(store.getState());
			self.setState({
				result:store.getState().result,
				bottomHeaderOpacity:1,
				upperHeaderOpacity:0,
				PoisShow:false
			});

		});
	}

	render(){
		this.state = store.getState() || {};
		return(
			<div>
				<div className="l-sightheadouter">
					<IndexContents Result={this.state.result} forUpforwarDate={this.forUpforwarDate}/>
				</div>

				<FilterPositionTab filterresult={this.state.result.Filter} PoisShow={this.state.PoisShow}/>
				<FilterSortByTab sortBy={this.state.result.Filter && this.state.result.Filter.DefaultSort}/>
				<FilterCuiTab FoodSort={this.state.result.Filter && this.state.result.Filter.FoodSort} CuisineSort={this.state.result.Filter && this.state.result.Filter.CuisineSort}/>
			
			</div>
		)
	}
}
