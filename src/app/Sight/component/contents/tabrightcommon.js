import React from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf';
export default class TabRightCommon extends React.Component {
	constructor(props) {
		super(props);
		this.superFilter = this.superFilter.bind(this);
	}

	superFilter(e){
		var curDom = e.target;
		var index = curDom.dataset.index;
		Perf.start();
		this.props.getpositionrightactiveflag(index);
		this.props.getFilterdata(114);
		this.props.hidefiltermask(false);

	}

	componentDidUpdate(){

		Perf.stop();
		// 获取监控结果 
		var measure = Perf.getLastMeasurements(); 
		// 打印总时间 
		// Perf.printInclusive(measure); 
		// // 打印独占时间（不包括组件挂载时间） 
		// Perf.printExclusive(measure); 
		// // // 打印浪费的时间（最有用的函数，例如render 了但是DOM没有变化） 
		// Perf.printWasted(measure); 
		// // //操作真实dom的情况 
		// Perf.printOperations(measure); 
	}

	render(){
		var activeindex = this.props.activeIndex || 0;
		var rightitem = this.props.rightitem || [];
		var activetabbody = true;
		return(
			<div className={"filter-tab-body" + (activetabbody ? ' current':'') } style={rightitem}>
					<ul onClick={this.superFilter}>
						<li className={activeindex == 0 ? 'actived':''} key='8765' data-index="0">不限</li>
						{
							rightitem.map((item,index)=>(<li className={activeindex == (index+1) ? 'actived':''} data-index={index + 1} key={index}>{item.Name || item.ZoneName}</li>))
						}
					</ul>
			</div>
		)
	}
}
