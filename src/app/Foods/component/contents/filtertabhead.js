import React from 'react';
import ReactDOM from 'react-dom';
import styleSheet  from '../../foods.css';
export default class FilterTabHead extends React.Component {
	constructor(props) {
		super(props);
		this.sec_filterClick = this.sec_filterClick.bind(this);
		this.props.rightitem && (this.props.rightitem[0].clicked = true,this.props.rightitem[0].isshow = true)
		this.state = {
			rightitem : this.props.rightitem,
			previousClicked : 0
		}
	}
	sec_filterClick(e){
			var curDom = e.target;
			if(curDom.nodeName == 'SPAN'){
				curDom = curDom.parentNode;
			}
			var index = curDom.dataset.index;
			this.props.rightitem[index].clicked = true;
			this.props.rightitem[index].isshow = false;
			this.props.rightitem[this.state.previousClicked].clicked = false;
			var somedata = this.props.rightitem;
			this.setState({
				previousClicked : index,
				rightitem : somedata
			});
			this.props.updatesubFilter();
	}
	render(){
		// console.log(this.props.rightitem);
		var rightitem = this.props.rightitem || [];
		return(
			<ul onClick={this.sec_filterClick}>
				 {
					 rightitem.map((item,index)=>{
						 return (
							 <li key={item.Id} className={item.clicked ? 'actived':''} data-index={index}>
									<span>{item.Name}</span>
							</li>
						 )
					 })
				 }
			</ul>
		)
	}
}
