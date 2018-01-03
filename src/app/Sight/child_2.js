import React from 'react';
import ReactDOM from 'react-dom';
import Child_2_1 from './child_2_1.js';
import store from './store.js';
export default class Child_2 extends React.Component{
	constructor(props) {
		super(props);
		this.state = {

		};
	}
  componentDidUpdate() {
    console.log('Child_2 update');
  }

	componentDidMount() {
    store.subscribe(() => {
      let state = store.getState();
      if (state.hasOwnProperty('child_2') && state.child_2 !== this.state.msg) {
        this.setState({
          msg: state.child_2
        });
      }
    });
  }

  render() {
    return <div>
      <p>child_2 component: {this.props.msg}</p>
      <Child_2_1 />
    </div>
  }
}
