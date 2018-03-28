import React from 'react';
import ReactDOM from 'react-dom';
import TabLeftContent from './tableftcontent.js';
import TabRightContent from './tabrightcontent.js';
export default class FilterPositionTab extends React.Component {
	constructor(props) {
		super(props);

	}

	render(){
			
		return(
			<div className={"l-filterbox " + (this.props.status && this.props.status.position_flag ? " current" :"")}>
				<div className="filteritem-group filter-multistage">
						<TabLeftContent tableft={this.props.tableft} getpositionleftactiveflag={this.props.getpositionleftactiveflag} activeIndex={this.props.status && this.props.status.position_active_flag}/>
					    <TabRightContent tabright={this.props.tabright} getpositionrightactiveflag={this.props.getpositionrightactiveflag} activeIndex={this.props.status && this.props.status.position_right_active_flag} getFilterdata={this.props.getFilterdata} hidefiltermask={this.props.hidefiltermask}/>
				</div>

			</div>
		)

	}
}
