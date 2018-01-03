import React from 'react';
import ReactDOM from 'react-dom';
import store from './store.js';
export default class Child_2_1 extends React.Component{
	constructor(props) {
		super(props);
	}
  componentDidUpdate() {
    console.log('Child_2_1 update');
  }

	componentDidMount() {
    store.subscribe(() => {
      let state = store.getState();
			console.log(store);
      if (state.hasOwnProperty('child_2_1')) {
        this.setState({
          msg: "hoho" + state.child_2_1
        });
      }
    });
  }

  render() {
    return <div>
      <p>child_2_1 component</p>
    </div>
  }
}
