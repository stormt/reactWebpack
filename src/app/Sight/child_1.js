import React from 'react';
import ReactDOM from 'react-dom';
import Child_1_1 from './Child_1_1.js';
import store from './store.js';
export default class Child_1 extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
	    setTimeout(() => {
	      store.dispatch({
	        type: 'child_2',
	        data: 'hello'
	      })
	    }, 1000);

	    setTimeout(() => {
	      store.dispatch({
	        type: 'child_2_1',
	        data: 'bye'
	      })
	    }, 2000);
		}

  render() {
    return(
			<div>
	      <p>{this.props.msg}</p>
	      <Child_1_1 {...this.props}/>
    	</div>
		)
  }
}
